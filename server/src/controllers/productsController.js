const { sequelize } = require("../models");

const getProductssList = async (req, res , next) => {    
  let {page , pageSize , currency} = req.query;   
  try{
    const results = await sequelize.query(`
      select 
        opd.id ,
        p.product_name ,
        o.invoice_number ,
        concat(round(opd.quantity,4),' ',p.product_unit) as quantity ,
        Round(case 
                    WHEN :currency = o.currency then opd.total_price
                    when :currency = 'USD' then  opd.total_price * o.primary_rate  
                    when :currency = 'TL' then  opd.total_price * o.secondary_rate
                    ELSE opd.total_price  
          end,2) AS sub_total,
          round(
            sum( sl.stock_cost + sl.shipment_cost + COALESCE(sl.credit_cost, 0)) *
            case 
                  WHEN :currency = o.currency THEN 1 / o.primary_rate
                      ELSE o.secondary_rate
            end * opd.quantity
          ,2) as total_cost
      from orders_products_details opd
      join products p on p.id = opd.product_id
      join orders o on o.id  = opd.order_id
      join stock_logs sl on sl.orders_products_details_id  = opd.id 
      group BY opd.id,p.product_name,o.invoice_number ,p.product_unit,o.currency,o.primary_rate,o.secondary_rate
      order by opd.id  ASC
      limit  :pageSize
      offset :offset
      `,
      {
        replacements: { 
          currency , 
          pageSize, 
          offset : ((page-1)*pageSize)}, 
        type: sequelize.QueryTypes.SELECT,
      }
    );
    res.status(200).send({status:true,msg:'SUCCESS',data: results})
  }catch(error){
    res.status(500);
    next(error)
  }
};

const getProductsListTotalCount = async (req, res , next) => {    
  try{
    let count = await req.app.get("db")["orders_products_details"].count();
    res.status(200).send({status:true,msg:'SUCCESS',data: count})
  }catch(error){
    res.status(500);
    next(error)
  }
};

module.exports={
  getProductssList,
  getProductsListTotalCount
}

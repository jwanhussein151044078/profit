const { fn, col, literal } = require('sequelize');
const {sequelize} = require('../models');

const getOrdersList = async (req, res , next) => {
  let {page , pageSize , currency} = req.query;  
  try{
    const results = await sequelize.query(
      `
        select 
          o.id ,
          o.invoice_number,
          c.company_name ,
          concat(sum(sl.stock_quantity), ' ', p.product_unit) as quantity,
          round( case when :currency = 'USD' THEN o.subtotal * o.primary_rate ELSE o.subtotal * o.secondary_rate end , 2) as sub_total,
          round(
            sum(( sl.stock_cost + sl.shipment_cost + COALESCE(sl.credit_cost, 0)) * 
              case 
                when :currency = o.currency THEN 1 / o.primary_rate
                ELSE o.secondary_rate
              end * 
              sl.stock_quantity
            )
            , 2
          ) as total_cost
        from orders o
        join orders_products_details od ON o.id = od.order_id
        join stock_logs sl on od.id = sl.orders_products_details_id 
        join customers c on c.id = o.customer_id 
        join products p on od.product_id = p.id
        group BY o.id, o.invoice_number, c.company_name ,p.product_unit
        order BY o.id asc
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

const getOrdersListTotalCount = async (req, res , next) => {    
  try{
    const count = await req.app.get("db")["orders"].count();
    res.status(200).send({status:true,msg:'SUCCESS',data: count})
  }catch(error){
    res.status(500);
    next(error)
  }
};

module.exports={
  getOrdersList,
  getOrdersListTotalCount
}

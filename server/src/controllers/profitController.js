const { sequelize } = require("../models");

const calcProfit = async (req, res , next) => {  
  let {currency} = req.query;  
  try{
    const results = await sequelize.query(`
        with calculate_difference as (
          select
              case 
                  when :currency = 'USD' THEN o.subtotal * o.primary_rate
                  else o.subtotal * o.secondary_rate
              end as sub_total_converted,
              sum(
                  (sl.stock_cost + sl.shipment_cost + COALESCE(sl.credit_cost, 0)) * 
                  case 
                      when :currency = o.currency THEN 1 / o.primary_rate
                      else o.secondary_rate
                  end * sl.stock_quantity
              ) as total_cost
          from orders o
          join orders_products_details od ON o.id = od.order_id
          join stock_logs sl ON od.id = sl.orders_products_details_id
          join customers c ON c.id = o.customer_id 
          group by o.id, o.subtotal, o.primary_rate, o.secondary_rate, o.currency
      )
      select
          round(sum(sub_total_converted - total_cost),2) as total_difference
      from calculate_difference;
      `,
      {
        replacements: { 
          currency
        }, 
        type: sequelize.QueryTypes.SELECT,
      }
    );
    let profit = parseFloat(results[0].total_difference)
    if(currency == "USD"){
      profit += 100000
    }else{
      profit += 100000 * 33
    }
    res.status(200).send({status:true,msg:'SUCCESS',data: profit})
  }catch(error){
    res.status(500);
    next(error)
  }
};

module.exports={
  calcProfit
}

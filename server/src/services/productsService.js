const {products} = require("../models");

const findOrCreateProduct=(productData, transaction)=>{
  const data= {
    product_name  : productData.product_name,
    product_unit  : productData.product_unit,
    unit_price    : productData.unit_price,
    vat_rate      : productData.vat_rate,
    discount_rate : productData.discount_rate,
    id            : productData.product_id
  }
  return products.findOrCreate({
    where: { id : data.id },
    defaults: data,
    transaction,
  });
}

module.exports={
  findOrCreateProduct
}
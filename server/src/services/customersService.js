const {customers} = require("../models");

const findOrCreateCustomer=(customerData, transaction)=>{
  return customers.findOrCreate({
    where: { id : customerData.id },
    defaults: {
      company_name : customerData.companyname,
      phone        : customerData.phone,
      email        : customerData.email
    },
    transaction,
  });
}

module.exports={
  findOrCreateCustomer
}
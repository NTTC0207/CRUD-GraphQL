const {transaction,transactionById} = require('../data/transaction');



const getTransaction = () => {
    return transaction()
      .then(data => {
        return data;
      })
      .catch(error => {
        throw error;
      });
  };

const getTransactionById =async (id) => {
    return await transactionById(id)
        .then(data => {
            return data;
        })
        .catch(error => {
            throw error;
        });
};
  
  module.exports = {
   getTransaction,
   getTransactionById
  };
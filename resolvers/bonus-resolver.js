const {bonus,bonusById} = require('../data/bonus');



const getBonus = () => {
    return bonus()
      .then(data => {
        return data;
      })
      .catch(error => {
        throw error;
      });
  };

const getBonusById =async (id) => {
    return await bonusById(id)
        .then(data => {
            return data;
        })
        .catch(error => {
            throw error;
        });
};
  
  module.exports = {
    getBonus,
    getBonusById
  };
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList
  } = require('graphql');
  

  
  const BonusType = new GraphQLObjectType({
    name: 'Transaction',
    fields: {
      id: {
        type: GraphQLInt,
      },
      amount: {
        type: GraphQLInt
      },
      date: {
        type: GraphQLString
      }
    }
  });
  
  module.exports = BonusType
  
  
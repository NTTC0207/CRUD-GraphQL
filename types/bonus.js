const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList
  } = require('graphql');
  

  
  const BonusType = new GraphQLObjectType({
    name: 'Bonus',
    fields: {
      id: {
        type: GraphQLInt,
      },
      amount: {
        type: GraphQLInt
      },
      month: {
        type: GraphQLString
      }
    }
  });
  
  module.exports = BonusType
  
  
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLList, GraphQLInt } = require('graphql');
const { getAllUsers, getUserById, getUserByUsername } = require('../resolvers/user-resolver');
const UserType = require('../types/user');
const TransactionType  = require('../types/transaction');
const { getTransaction,getTransactionById } = require('../resolvers/transaction-resolver');

// declare the queries with the resolvers
const RootQueries = new GraphQLObjectType({
    name: 'rootQuery',
    fields: {
        // getAllUsers: {
        //     type: new GraphQLList(UserType), // return type
        //     resolve: () => {
        //         return getAllUsers();
        //     }
        // },
        // getUserById: {
        //     type: UserType,
        //     args: { // input args
        //         userId: {
        //             type: GraphQLString
        //         }
        //     },
        //     resolve: (_Îsource, args) => {
        //         const { userId } = args;
        //         return getUserById(userId);
        //     }
        // },
        // getUserByUsername: {
        //     type: UserType,
        //     args: {
        //         username: {
        //             type: GraphQLString
        //         },
        //     },
        //     resolve: (_source, args) => {
        //         const { username } = args;
        //         return getUserByUsername(username);
        //     }
        // },
        getTransaction: {
            type: new GraphQLList(TransactionType),
            resolve: () => {
                return getTransaction();
            }
        },

        getTransactionById: {
            type: TransactionType,
            args: {
                id: {
                    type: GraphQLInt
                },
            },
            resolve: (_source, args) => {
                const { id } = args;
                return getTransactionById(id);
            }
        },
    }
})

const schema = new GraphQLSchema({
    query: RootQueries,
    types: [
      //  UserType,
        TransactionType
    ]
})

module.exports = schema;
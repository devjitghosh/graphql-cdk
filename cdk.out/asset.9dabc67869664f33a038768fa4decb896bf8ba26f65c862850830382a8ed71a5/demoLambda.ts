import { ApolloServer, gql } from "apollo-server-lambda";

// Define your GraphQL schema
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Define your resolvers
const resolvers = {
  Query: {
    hello: () => "Hello, world!",
  },
};

// Create an instance of Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Export the handler for AWS Lambda
exports.handler = server.createHandler();

// import { APIGatewayProxyEvent } from "aws-lambda";

// exports.handler = async (event: APIGatewayProxyEvent) => {
//   return {
//     statusCode: 200,
//     body: JSON.stringify({ message: "successful" }),
//   };
// };

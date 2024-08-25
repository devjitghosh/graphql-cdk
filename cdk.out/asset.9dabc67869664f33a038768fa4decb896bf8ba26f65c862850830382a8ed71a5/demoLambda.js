"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_lambda_1 = require("apollo-server-lambda");
// Define your GraphQL schema
const typeDefs = (0, apollo_server_lambda_1.gql) `
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
const server = new apollo_server_lambda_1.ApolloServer({
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVtb0xhbWJkYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRlbW9MYW1iZGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrREFBeUQ7QUFFekQsNkJBQTZCO0FBQzdCLE1BQU0sUUFBUSxHQUFHLElBQUEsMEJBQUcsRUFBQTs7OztDQUluQixDQUFDO0FBRUYsd0JBQXdCO0FBQ3hCLE1BQU0sU0FBUyxHQUFHO0lBQ2hCLEtBQUssRUFBRTtRQUNMLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxlQUFlO0tBQzdCO0NBQ0YsQ0FBQztBQUVGLHNDQUFzQztBQUN0QyxNQUFNLE1BQU0sR0FBRyxJQUFJLG1DQUFZLENBQUM7SUFDOUIsUUFBUTtJQUNSLFNBQVM7Q0FDVixDQUFDLENBQUM7QUFFSCxvQ0FBb0M7QUFDcEMsT0FBTyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7QUFFekMscURBQXFEO0FBRXJELDZEQUE2RDtBQUM3RCxhQUFhO0FBQ2IsdUJBQXVCO0FBQ3ZCLHVEQUF1RDtBQUN2RCxPQUFPO0FBQ1AsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwb2xsb1NlcnZlciwgZ3FsIH0gZnJvbSBcImFwb2xsby1zZXJ2ZXItbGFtYmRhXCI7XHJcblxyXG4vLyBEZWZpbmUgeW91ciBHcmFwaFFMIHNjaGVtYVxyXG5jb25zdCB0eXBlRGVmcyA9IGdxbGBcclxuICB0eXBlIFF1ZXJ5IHtcclxuICAgIGhlbGxvOiBTdHJpbmdcclxuICB9XHJcbmA7XHJcblxyXG4vLyBEZWZpbmUgeW91ciByZXNvbHZlcnNcclxuY29uc3QgcmVzb2x2ZXJzID0ge1xyXG4gIFF1ZXJ5OiB7XHJcbiAgICBoZWxsbzogKCkgPT4gXCJIZWxsbywgd29ybGQhXCIsXHJcbiAgfSxcclxufTtcclxuXHJcbi8vIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBBcG9sbG8gU2VydmVyXHJcbmNvbnN0IHNlcnZlciA9IG5ldyBBcG9sbG9TZXJ2ZXIoe1xyXG4gIHR5cGVEZWZzLFxyXG4gIHJlc29sdmVycyxcclxufSk7XHJcblxyXG4vLyBFeHBvcnQgdGhlIGhhbmRsZXIgZm9yIEFXUyBMYW1iZGFcclxuZXhwb3J0cy5oYW5kbGVyID0gc2VydmVyLmNyZWF0ZUhhbmRsZXIoKTtcclxuXHJcbi8vIGltcG9ydCB7IEFQSUdhdGV3YXlQcm94eUV2ZW50IH0gZnJvbSBcImF3cy1sYW1iZGFcIjtcclxuXHJcbi8vIGV4cG9ydHMuaGFuZGxlciA9IGFzeW5jIChldmVudDogQVBJR2F0ZXdheVByb3h5RXZlbnQpID0+IHtcclxuLy8gICByZXR1cm4ge1xyXG4vLyAgICAgc3RhdHVzQ29kZTogMjAwLFxyXG4vLyAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBtZXNzYWdlOiBcInN1Y2Nlc3NmdWxcIiB9KSxcclxuLy8gICB9O1xyXG4vLyB9O1xyXG4iXX0=
const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");
const MONGOSH ="mongodb+srv://harsha_wije:abc%40123@cluster0.physm.mongodb.net/test";

// Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(MONGOSH, { useNewUrlParser: true })
  .then(() => {
    console.log("DB connection success");
    server.listen({ port: 5000 });
  })
  .then((res) => console.log(`server running at: http://localhost:5000`));

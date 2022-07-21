import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://NodeExpress:102030@cluster0.tdq6i.mongodb.net/Alura-node"
);

let db = mongoose.connection;

export default db;

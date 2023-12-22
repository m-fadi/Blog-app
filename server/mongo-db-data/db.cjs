// const { MongoClient } = require('mongodb')

// let dbConnection

// module.exports = {
//   connectToDb: (cb) => {
//     MongoClient.connect("mongodb://0.0.0.0:27017/bookstore")
//         .then((client) => {
//             dbConnection = client.db();
//             return cb();
//         })
//         .catch((err) => {
//             console.log(err);
//             return cb(err);
//         });
//   },
//   getDb: () => dbConnection
// }

// import { MongoClient, mongoClient } from "mongodb";
// const client = new MongoClient("mongodb://0.0.0.0:27017");
// await client.connect();
// const db=client.db('blog')
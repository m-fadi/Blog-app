// const { MongoClient } = require('mongodb')
  import { MongoClient } from "mongodb";

let db

  async function connectToDb(cb){
    const client = new MongoClient("mongodb://0.0.0.0:27017");
  await client.connect();
   db = client.db("blog");
  cb()
}

export {db,connectToDb}
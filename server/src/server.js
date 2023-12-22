// import { createRequire } from "module";
// const require = createRequire(import.meta.url);
import express from "express";
import { MongoClient} from "mongodb";
const app = express();
app.use(express.json());


const client = new MongoClient("mongodb://0.0.0.0:27017");

app.get("/api/articles/:name/upvote", async(req, res) => {
    const { name } = req.params;
    console.log(name);
    

await client.connect();
const db=client.db('blog')
const article=await db.collection('articles').findOne({name})
article ? res.status(200).json(article) : res.send(" article doesn't exist");
})



app.post("/api/articles/:name/comments", (req, res) => {
    console.log(req.body);
    const { postedBy, text } = req.body;
    const { name } = req.params;
    const article = db.find({ name: name });
    if (article) {
        if (text) {
            article.comments.push(text, postedBy);
            res.send(article.comments);
        } else res.send(``);
        console.log(article.comments);
    } else res.send(" article doesn't exist");
});


app.listen(8000, () => console.log("listening on port 8000"));


// let articleInfo = [
//     {
//         name: "learn-react",
//         upvotes: 0,
//         comments: []
//     },
//     {
//         name: "learn-node",
//         upvotes: 0,
//         comments: []
//     },
//     {
//         name: "mongodb",
//         upvotes: 0,
//         comments: []
//     }
// ]
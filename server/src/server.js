import { createRequire } from "module";
const require = createRequire(import.meta.url);
import express from "express";
const app = express();
app.use(express.json());
const { connectToDb, getDb } = require("../mongo-db-data/db.cjs");
//import {connectToDb,getDb} from '../mongo-db-data/db'
app.get("/input", (req, res) => {
    res.send("what r u doing");
});
let db;
connectToDb((err) => {
    if (!err) {
        db = getDb();
       
    }
});

app.get('/books',(req,res) => {
    db.collection('books').find()
    res.json({msg:"welcome to api"})
})
app.post("/input/:name", (req, res) => {
    const { name } = req.params;
    console.log(name);
    res.send("wtf");
});
let articleInfo = [
    {
        name: "learn-react",
        upvotes: 0,
        comments: [],
    },
    {
        name: "learn-node",
        upvotes: 0,
        comments: [],
    },
    {
        name: "mongodb",
        upvotes: 0,
        comments: [],
    },
];

app.put("/api/articles/:name/upvote", (req, res) => {
    const { name } = req.params;
    console.log(name);
    const upvotedArticle = articleInfo.find((article) => article.name === name);
    if (upvotedArticle) {
        upvotedArticle.upvotes += 1;
        //modifyedUpvotes(name, upvotedArticle.upvotes)
        res.send(` the article ${name}  has ${upvotedArticle.upvotes} upvotes`);
        res.send(`${upvotedArticle.name}`);
    } else res.send(" article doesn't exist");
});

app.post("/api/articles/:name/comments", (req, res) => {
    console.log(req.body);
    const { postedBy, text } = req.body;
    const { name } = req.params;
    const article = articleInfo.find((article) => article.name === name);
    if (article) {
        if (text) {
            article.comments.push(text, postedBy);
            res.send(article.comments);
        } else res.send(``);
        console.log(article.comments);
    } else res.send(" article doesn't exist");
});

// const modifyedUpvotes=(name,upvotes) => {
//    let updatedInfo= articleInfo.find((article)=>{
//         if(article.name===name) return ({...article,upvotes:upvotes})
//         else return article
//     })
//     articleInfo={...updatedInfo}
//     console.log({articleInfo})
//     return updatedInfo
// }
app.listen(8000, () => console.log("listening on port 8000"));

[
    {
        title: "the what but",
        author: "the",
        rating: 5,
        pages: 400,
        genres: ["fantasy", "action"],
    },
    {
        title: "ddd",
        author: "d",
        rating: 5,
        pages: 40,
        genres: ["shit", "tion"],
    },
    {
        title: " but",
        author: "but",
        rating: 5,
        pages: 50,
        genres: ["comedy", "play"],
    },
];

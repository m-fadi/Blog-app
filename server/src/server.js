import { createRequire } from "module";
const require = createRequire(import.meta.url);
import express from "express";
const { getDb, connectToDb } = require("../mongo-db-data/db.cjs");
const app = express();
app.use(express.json());

//import {connectToDb,getDb} from '../mongo-db-data/db'

let db;
connectToDb((err) => {
    if (!err) {
        db = getDb();
       
    }
});

app.get("/b", (req, res) => {
    
    let books = [];

    db.collection("books")
        .find()
        .sort({ author: 1 })
        .forEach((book) => books.push(book))
        .then(() => {
            res.status(200).json(books);
        })
        .catch(() => {
            res.status(500).json({ error: "Could not fetch the documents" });
        });
});


app.get("/input", (req, res) => {
    res.send("what r u doing");
});
app.post("/input/:name", (req, res) => {
    const { name } = req.params;
    console.log(name);
    res.send("wtf");
});
;

let articleInfo = [
    {
        name: "learn-react",
        upvotes: 0,
        comments: []
    },
    {
        name: "learn-node",
        upvotes: 0,
        comments: []
    },
    {
        name: "mongodb",
        upvotes: 0,
        comments: []
    }
]

app.put("/api/articles/:name/upvote", (req, res) => {
    const { name } = req.params;
    console.log(name);
    // const upvotedArticle = db.articleInfo.find({name:name});
    // if (upvotedArticle) {
    //     db.upvotedArticle.upvotes += 1;
    //     //modifyedUpvotes(name, upvotedArticle.upvotes)
    //     res.send(` the article ${name}  has ${upvotedArticle.upvotes} upvotes`);
    //     res.send(`${upvotedArticle.name}`);
    // } else res.send(" article doesn't exist");
    let articles = [];
    //console.log(db.collection("articleInfo").find());
    db.collection("articleInfo")
        .find()
        .forEach((article) => articles.push(article))
        .then(() => {
            console.log(articles)
            res.status(200).json(articles);
        })
        .catch(() => {
            res.status(500).json({ error: "Could not fetch the documents" });
        });
});

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



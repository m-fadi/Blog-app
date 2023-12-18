import express from "express";
const app = express();
app.use(express.json());

app.get("/input", (req, res) => {
    res.send("what r u doing");
});
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
    // const upvotedArticle = articleInfo.map((article) => {
    //     if (article.name === name) {
    //         console.log(article);
    //         return ({ ...article, upvotes: upvotes + 1 });
    //     } else {
    //         return article;
    //    }

   // });

   const upvotedArticle = articleInfo.find((article) => 
        article.name === name 
);

if (upvotedArticle) {
    upvotedArticle.upvotes += 1;
//modifyedUpvotes(name, upvotedArticle.upvotes)
    res.send(` the article ${name}  has ${upvotedArticle.upvotes} upvotes`);
    res.send("`${upvotedArticle.name}`");
} else res.send(" article doesn't exist");
})

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

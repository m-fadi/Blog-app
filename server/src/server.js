import express from "express";
import { db, connectToDb } from "../mongo-db-data/db.js";
const app = express();
app.use(express.json());

app.get("/api/articles/:name", async (req, res) => {
    const { name } = req.params;

    const article = await db.collection("articles").findOne({ name });
    //db.collection("articles").updateOne({ name }, { $set: { name } });

    article
        ? res.status(200).json(article)
        : res.send(" article doesn't exist");
});

//upvotes
app.put("/api/articles/:name/upvote", async (req, res) => {
    const { name } = req.params;

    await db
        .collection("articles")
        .updateOne({ name }, { $inc: { upvotes: 1 } });
    const article = await db.collection("articles").findOne({ name });

    article
        ? res.status(200).json(article)
        : res.send(" article doesn't exist");
});

//comments
app.post("/api/articles/:name/comments", async (req, res) => {
    const { name } = req.params;
    const { postedBy, text } = req.body;
    await db.collection("articles").updateOne(
        { name },
        {
            $push: { comments: { postedBy, text } },
        }
    );
    const article = await db.collection("articles").findOne({ name });

    article
        ? res.status(200).json(article)
        : res.send(" article doesn't exist");
});

//-----Login-----   //

app.post("/api/login", async (req, res) => {
    const { email, password } = req.body;
    console.log({ password });
    try {
        console.log("try");
        await db
            .collection("user")
            .insertMany({ password: password }, { email: email });
        const user = await db.collection("user").findOne({ email });
        user ? res.status(200).json(user) : res.send("user does not exist");
    } catch {
        (err) => console.log(err);
    }
});
connectToDb(() => {
    app.listen(8000, () => console.log("listening on port 8000"));
});

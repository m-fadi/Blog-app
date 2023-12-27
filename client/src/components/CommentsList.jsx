import { useState } from "react";
import axios from "axios";

function CommentsList({ comments, articleId, setArticleInfo }) {

    const [name, setName] = useState("");
    const [comment, setComment] = useState("");


    // --- submit comment function
    const handleComment = async () => {
        const response = await axios.post(
            `/api/articles/${articleId}/comments`,
            {
                postedBy: name,
                text: comment,
            }
        );
        setArticleInfo(response.data);
        setComment("");
        setName("");
    };


    /// --- map comments and build the html---
    const commentsHtml = comments.map((comment, i) => (
        <div key={i} className="comment">
            <h4>{comment.postedBy}:</h4>
            <p>{comment.text}</p>
        </div>
    ));

    return (
        <div>
            <div id="add-comment-form">
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="add your name"
                />
                <textarea
                    value={comment}
                    name="comment"
                    onChange={(e) => setComment(e.target.value)}
                    cols="50"
                    rows="5"
                    placeholder="add your comment"
                ></textarea>
                <button onClick={handleComment}> Submit </button>
            </div>
            <h3>Comments: </h3>{commentsHtml}
        </div>
    );
}

export default CommentsList;

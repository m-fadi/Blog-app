import React from 'react'
import { useState } from "react";
import axios from "axios";
import useUser from "../hooks/useUser";
function AddComment({articleId, setArticleInfo }) {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const { user } = useUser;
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
        </div>
    );
}

export default AddComment
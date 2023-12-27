import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import CommentsList from "../components/CommentsList";

function Article() {
    const [articleInfo, setArticleInfo] = useState({
        upvotes: 0,
        comments: [],
    });
    const { articleId } = useParams();
    const handleUpvote = async () => {
        const response = await axios.put(`/api/articles/${articleId}/upvote`);
        const newArticleInfo = response.data;
        setArticleInfo(newArticleInfo);
        
    };

    useEffect(() => {
        const loadArticleInfo = async () => {
            const response = await axios.get(`/api/articles/${articleId}`);

            setArticleInfo(response.data);
        };

        loadArticleInfo();
        
    }, []);

    if (!articleInfo) {
        return <NotFoundPage />;
    }

    return (
        <>
            <h1>{articleInfo.name}</h1>

            <p>{articleInfo.content}</p>

            <div className="upvotes-section">
                <p>This article has {articleInfo.upvotes} upvote(s)</p>

                <button onClick={handleUpvote}>UpVote</button>
            </div>
            <CommentsList
                comments={articleInfo.comments}
                articleId={articleInfo.name}
                setArticleInfo={setArticleInfo}
            />
        </>
    );
}

export default Article;

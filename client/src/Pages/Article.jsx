import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import articleContent from "./articleContent";
import NotFoundPage from "./NotFoundPage";

function Article() {
    const { articleInfo, setArticleInfo } = useState({
        comments: [],
        upvotes: 0,
    });
    useEffect(()=>{
        const response=await axios.get(`http://localhost:8000/api/articles/${articleId}`)
    },[])
    let { articleId } = useParams();
    const article = articleContent.find(
        (article) => article.name === articleId
    );
    if(!article) return <NotFoundPage/>
    const paragraph = article.content.map((paragraph) => (
        <p key={article.name}> {paragraph}</p>
    ));
    return (
        <div>
            <h2>{article.title}</h2>
            <p>this article has {articleInfo.upvotes} upvotes</p>
            <p>{paragraph}</p>
        </div>
    );
}

export default Article;

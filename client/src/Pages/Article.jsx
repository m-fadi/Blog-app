import React from "react";
import { useParams } from "react-router-dom";
import articleContent from "./articleContent";
import NotFoundPage from "./NotFoundPage";

function Article() {
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
            <p>{paragraph}</p>
        </div>
    );
}

export default Article;

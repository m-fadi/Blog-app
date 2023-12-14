import React from "react";
import { Link } from "react-router-dom";

function ArticleBanner({ articles }) {
    let articleItems = articles.map((article) => (
        <div className="article" key={article.name}>
            <Link
                className="article-list-item"
                to={`/articles/${article.name}`}
            >
                <h1>{article.name}</h1>
                <h2>{article.title}</h2>
                <p className="articleBody">
                    {article.content[0].substring(0, 150)}...{" "}
                    <span style={{ color: "red" }}>see more</span>
                </p>
            </Link>
        </div>
    ));
    return <div>{articleItems}</div>;
}

export default ArticleBanner;

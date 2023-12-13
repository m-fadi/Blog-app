import React from 'react'
import { useParams } from 'react-router-dom'
import articleContent from "./articleContent";

function Article() {
    let {articleId}=useParams()
    const article=articleContent.find(article=> article.name===articleId)
  return (
      <div>
          {" "}
          <h1>{article.name}</h1>
          <h2>{article.title}</h2>
          <p className="articleBody">{article.content}</p>
      </div>
  );
}

export default Article
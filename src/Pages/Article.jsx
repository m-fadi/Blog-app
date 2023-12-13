import React from 'react'
import { useParams } from 'react-router-dom'
import articleContent from "./articleContent";


function Article() {
    let {articleId}=useParams()
    const article=articleContent.find(article=> article.name===articleId)
    const paragraph=article.content.map(paragraph=><p> {paragraph}</p>)
  return (
      <div>
         <h2>{article.title}</h2>
          <p >{paragraph}</p>
      </div>
  );
}

export default Article
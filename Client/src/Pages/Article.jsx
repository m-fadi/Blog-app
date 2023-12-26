import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import articleContent from "./articleContent";
import NotFoundPage from "./NotFoundPage";
import CommentsList from "../components/CommentsList";
function Article() {
     const [articleInfo, setArticleInfo] = useState({
         upvotes: 0,
         comments: [],
     });
     const { articleId } = useParams();

     useEffect(() => {
         const loadArticleInfo = async () => {
             const response = await axios.get(`/api/articles/${articleId}`);
             const newArticleInfo = response.data;
             setArticleInfo(newArticleInfo);
             
         };

         loadArticleInfo();
         console.log(articleInfo);
     }, [articleId]);

     const article = articleContent.find((article) => article.name === articleId);
// const commentsHtml=articleInfo.comments.map(comment=>{
//     console.log(comment)
//    return  <div>
       

//     </div>})
    console.log( articleInfo.comments );
     if (!articleInfo) {
         return <NotFoundPage />;
     }

     return (
         <>
             <h1>{articleInfo.name}</h1>
             <p>This article has {articleInfo.upvotes} upvote(s)</p>

             {article.content.map((paragraph, i) => (
                 <p key={i}>{paragraph}</p>
             ))}

             <CommentsList comments={articleInfo.comments} />
         </>
     );

     
}

export default Article;

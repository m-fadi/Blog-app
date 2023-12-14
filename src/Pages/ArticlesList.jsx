import { Link } from "react-router-dom";
import articleContent from "./articleContent";
import ArticleBanner from "../components/ArticleBanner";


function ArticlesListPage() {
   
    return (
        <div id="articles">
            <ArticleBanner articles={articleContent}/>
        </div>
    );
}

export default ArticlesListPage;

import { Link } from "react-router-dom";
import articleContent from "./articleContent";
function ArticlesListPage() {
    let articles = articleContent.map((article) => (
        <div className="article" key={article.name}>
            <Link to={`/articles/${article.name}`}>
                <h1>{article.name}</h1>
                <h2>{article.title}</h2>
                <p className="articleBody">{article.content}</p>
                <hr />
            </Link>
        </div>
    ));
    return <div id="articles">{articles}</div>;
}

export default ArticlesListPage;

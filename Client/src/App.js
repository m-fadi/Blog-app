import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Article from "./Pages/Article";
import ArticlesList from "./Pages/ArticlesList";
import NotFoundPage from "./Pages/NotFoundPage";
import Navbar from "./components/Navbar";

function App() {
    return (
        
            <BrowserRouter>
            <div  className="App">
                <Navbar />
            <div id="page-body">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/articles/:articleId" element={<Article />} />
                    <Route path="/articles" element={<ArticlesList />} />
                    
                    <Route path="*" element={<NotFoundPage />} />
                     {/* // the Route * is any route that is not defined */}
                </Routes>
                </div>
                </div>
            </BrowserRouter>
        
    );
}

export default App;

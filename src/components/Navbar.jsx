import React from 'react'
import Home from '../Pages/Home'
import ArticlesList from '../Pages/ArticlesList'
import About from '../Pages/About'
import { Link } from "react-router-dom";
function Navbar() {
  return (
      <div className='navbar'>
          <ul>
              <li>
                  <Link to="/">Home</Link>
              </li>
              <li>
                  <Link to="/articles">Articles</Link>
              </li>
              <li>
                  <Link to="/about"> About</Link>
              </li>
          </ul>
      </div>
  );
}

export default Navbar
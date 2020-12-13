import React from 'react';
import './scss/main.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const topbar = () => {
    return (
        <div className="topbar">
          <nav className='topnav'>
            <ul className="topbar-list">
               <li><Link to="/id-lab">Main ID Lab Website</Link></li>
                <li><Link to="/odi">ODI Conference 2020</Link></li>
                <li><Link to="/knowledge-portal">Knowledge Portal</Link></li>
            </ul>
            </nav>
        </div>
    )
}

export default topbar

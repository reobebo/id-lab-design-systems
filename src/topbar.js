import React from 'react'
import './scss/main.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const topbar = () => {
    return (
        <div className="topbar">
            <h4>DePaul ID Lab</h4>
            <ul className="topbar-list">
               <li><Link to="/id-lab-welcome">Main ID Lab Website</Link></li>
                <li><Link to="/id-lab-footers">ODI Conference 2020</Link></li>
                <li><Link to="/id-lab-navigation">Knowledge Portal</Link></li>
            </ul>
        </div>
    )
}

export default topbar

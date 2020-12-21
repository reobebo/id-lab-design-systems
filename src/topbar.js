import React from 'react';
import './scss/main.css';

// code for the top navigation bar of the Design System

const Topbar = () => {
    return (
        <div className="topbar">
          <nav className='topnav'>
            <ul className="topbar-list">
               <li><a href="/id-lab">Main ID Lab Website</a></li>
                <li><a href="/odi">ODI Conference 2020</a></li>
                <li><a href="/knowledge-portal">Knowledge Portal</a></li>
            </ul>
            </nav>
        </div>
    )
}

export default Topbar

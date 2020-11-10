import React from 'react'
import './scss/main.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FooterDesignCode from './footerDesignCode';
import Welcome from './welcome';

const sidebar = () => {
    return (
       
        <div className="sidebar">
            <h4>Atoms</h4>
            <ul className="sidebar-list">
                <li><Link to="/id-lab-headers">Logos</Link></li>
                <li><Link to="/id-lab-footers">Backgrounds</Link></li>
                <li><Link to="/id-lab-navigation">Buttons</Link></li>
            </ul>
            <br/>
             <h4>Molecules</h4>
            <ul className="sidebar-list">
                <li><Link to="/id-lab-headers">Headers</Link></li>
                <li><Link to="/id-lab-footers">Footers</Link></li>
                <li><Link to="/id-lab-navigation">Navigation</Link></li>
            </ul>
            <br/>
            <h4>Components</h4>
            <ul className="sidebar-list">
                <li><Link to="/id-lab-headers">Headers</Link></li>
                <li><Link to="/id-lab-footers">Footers</Link></li>
                <li><Link to="/id-lab-navigation">Navigation</Link></li>
            </ul>
        
      </div>
       
       
    )
}

export default sidebar

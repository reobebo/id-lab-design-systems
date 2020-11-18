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
import Sidebaritem from './sidebarItem';

const sidebar = (props) => {
    return (
       
        <div className="sidebar">
            <nav>
            <h4><span>Atoms<i className="fa fa-caret-down"></i></span> </h4>
         
            <ul className="sidebar-list">
            <Sidebaritem link="/Welcome" name="Welcome"/>
            <Sidebaritem link="/Welcome" name="Welcome"/>
            <Sidebaritem link="/Welcome" name="Welcome"/>
            <Sidebaritem link="/Welcome" name="Welcome"/>
            <Sidebaritem link="/Welcome" name="Welcome"/>
            </ul>
            <br/>
             <h4>Molecules</h4>
            <ul className="sidebar-list">
            <Sidebaritem link="/search-bar" name="Search Bar"/>
            <Sidebaritem link="/Welcome" name="Welcome"/>
            <Sidebaritem link="/Welcome" name="Welcome"/>
            <Sidebaritem link="/Welcome" name="Welcome"/>
         
            </ul>
            <br/>

            <h4>Pages</h4>
            <ul className="sidebar-list">
            <Sidebaritem link="/homepage" name="Homepage"/>
            <Sidebaritem link="/people" name="People"/>
            <Sidebaritem link="/fervices" name="Services"/>
            <Sidebaritem link="/events" name="Events"/>
            <Sidebaritem link="/contact" name="Contact"/>
            </ul>
            </nav>
        
      </div>
       
       
    )
}

export default sidebar

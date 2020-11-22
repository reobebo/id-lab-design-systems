import React from 'react'
import './scss/main.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import FooterDesignCode from './footerDesignCode';
import Welcome from './welcome';
import Sidebaritem from './sidebarItem';
import image from './img/Primary Logo Small.png';

function SidebarKnowledgePortal() {
    return (
         <div className="sidebar">
           <img className="topbar-image" src={image} alt=""/>
            <nav className='nav-items'>
            <h4><span></span>Foundations</h4>

            <ul className="sidebar-list">
            <Sidebaritem link="/knowledge-portal/odi-lab-footers" name="Buttons"/>
            <Sidebaritem link="/knowledge-portal/links" name="Links"/>
            <Sidebaritem link="/knowledge-portal/headings" name="Headings"/>
            <Sidebaritem link="/knowledge-portal/icons" name="Icons"/>
            <Sidebaritem link="/knowledge-portal/logos" name="Logos"/>
             <Sidebaritem link="/knowledge-portal/colors" name="Colors"/>
            <Sidebaritem link="/knowledge-portal/typography-and-fonts" name="Typography And Fonts"/>
            <Sidebaritem link="/knowledge-portal/backgrounds" name="Backgrounds"/>
            </ul>
            <br/>
             <h4>Components</h4>
            <ul className="sidebar-list">
            <Sidebaritem link="/knowledge-portal/search-bar" name="Search Bar"/>
            <Sidebaritem link="/knowledge-portal/social-media" name="Social Media"/>
            <Sidebaritem link="/knowledge-portal/id-lab-welcome/id-lab-navigation" name="Navigation"/>
            <Sidebaritem link="/knowledge-portal/id-lab-footers" name="Footer"/>
         
            </ul>
            <br/>

            <h4>Pages</h4>
            <ul className="sidebar-list">
            <Sidebaritem link="/homepage" name="Homepage"/>
            
            </ul>
            </nav>
        
      </div>
    )
}

export default SidebarKnowledgePortal

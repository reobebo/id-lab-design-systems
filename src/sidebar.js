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

const Sidebar = () => {
  let { app } = useParams();
  console.log(app);
  if(app==="id-lab"){
    return (
      <Router>
        <div className="sidebar">
           <img className="topbar-image" src={image} alt=""/>
              
            <nav className='nav-items'>
            <h4><span></span>Foundations</h4>

            <ul className="sidebar-list">
            <Sidebaritem link="/id-lab/odi-lab-footers" name="Buttons"/>
            <Sidebaritem link="/id-lab/links" name="Links"/>
            <Sidebaritem link="/id-lab/headings" name="Headings"/>
            <Sidebaritem link="/id-lab/icons" name="Icons"/>
            <Sidebaritem link="/id-lab/logos" name="Logos"/>
             <Sidebaritem link="/id-lab/colors" name="Colors"/>
            <Sidebaritem link="/id-lab/typography-and-fonts" name="Typography And Fonts"/>
            <Sidebaritem link="/id-lab/backgrounds" name="Backgrounds"/>
            </ul>
            <br/>
             <h4>Components</h4>
            <ul className="sidebar-list">
            <Sidebaritem link="/id-lab/search-bar" name="Search Bar"/>
            <Sidebaritem link="/id-lab/social-media" name="Social Media"/>
            <Sidebaritem link="/id-lab/id-lab-welcome/id-lab-navigation" name="Navigation"/>
            <Sidebaritem link="/id-lab/id-lab-footers" name="Footer"/>
         
            </ul>
            <br/>

            <h4>Pages</h4>
            <ul className="sidebar-list">
            <Sidebaritem link="/id-lab/Home" name="Home"/>
            <Sidebaritem link="/id-lab/what-we-do" name="What We Do"/>
            <Sidebaritem link="/id-lab/meet-our-team" name="Meet Our Team"/>
            <Sidebaritem link="/id-lab/constact-us" name="Contact Us"/>
            </ul>
            </nav>
              </div>
            <Switch>
          <Route path="/id-lab/id-lab-footers">
            <FooterDesignCode app="id-lab" />
          </Route>
        </Switch>
    
    </Router> 
    )}
    if(app==="odi"){
    return (
      <Router>
        <div className="sidebar">
           <img className="topbar-image" src={image} alt=""/>
              
            <nav className='nav-items'>
            <h4><span></span>Foundations</h4>

            <ul className="sidebar-list">
            <Sidebaritem link="/id-lab/odi-lab-footers" name="Buttons"/>
            <Sidebaritem link="/id-lab/links" name="Links"/>
            <Sidebaritem link="/id-lab/headings" name="Headings"/>
            <Sidebaritem link="/id-lab/icons" name="Icons"/>
            <Sidebaritem link="/id-lab/logos" name="Logos"/>
             <Sidebaritem link="/id-lab/colors" name="Colors"/>
            <Sidebaritem link="/id-lab/typography-and-fonts" name="Typography And Fonts"/>
            <Sidebaritem link="/id-lab/backgrounds" name="Backgrounds"/>
            </ul>
            <br/>
             <h4>Components</h4>
            <ul className="sidebar-list">
            <Sidebaritem link="/id-lab/search-bar" name="Search Bar"/>
            <Sidebaritem link="/id-lab/social-media" name="Social Media"/>
            <Sidebaritem link="/id-lab/id-lab-welcome/id-lab-navigation" name="Navigation"/>
            <Sidebaritem link="/id-lab/id-lab-footers" name="Footer"/>
         
            </ul>
            <br/>

            <h4>Pages</h4>
            <ul className="sidebar-list">
            <Sidebaritem link="/id-lab/Home" name="Home"/>
           
            </ul>
            </nav>
              </div>
            <Switch>
          <Route path="/id-lab/id-lab-footers">
            <FooterDesignCode app="id-lab" />
          </Route>
        </Switch>
    
    </Router> 
    )}
    else{
      return (
        <Router>
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
            <Sidebaritem link="/knowledge-portal/home" name="Home"/>
            <Sidebaritem link="/knowledge-portal/videos" name="Videos"/>
            <Sidebaritem link="/knowledge-portal/contact-us" name="Contact Us"/> 
            </ul>
            </nav>
        
      </div>
         <Switch>
          <Route path="/id-lab/id-lab-footers">
            <FooterDesignCode app="knowlege-portal" />
          </Route>
        </Switch>
    
    </Router> 
    )
    }
}

export default Sidebar

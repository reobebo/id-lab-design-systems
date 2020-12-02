import React from 'react'
import './scss/main.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import FooterDesignCode from './footerDesignCode';
import Sidebaritem from './sidebarItem';
import image from './img/primary-logo-small-colored.png';
import TypeographyAndFont from './TypographyFontsDesign';
import ColorsDesign from './ColorsDesign';
import BackgroundsDesign from './BackgroundsDesign';
import HeadingsDesign from './HeadingsDesign';
import LogosDesign from './LogosDesign';
import WhatWeDoDesign from './WhatWeDoDesign';
import MeetOurTeamDesign from './MeetOurTeamDesign';
import ContactUsDesign from './ContactUsDesign';
import HomePageDesign from './HomePageDesign';

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
            <Sidebaritem link="/id-lab/buttons" name="Buttons"/>
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
            <Sidebaritem link="/id-lab/banners" name="Banners"/>
            <Sidebaritem link="/id-lab/people" name="People"/>
            <Sidebaritem link="/id-lab/navigation" name="Navigation"/>
            <Sidebaritem link="/id-lab/footers" name="Footer"/>
         
            </ul>
            <br/>

            <h4>Pages</h4>
            <ul className="sidebar-list">
            <Sidebaritem link="/id-lab/Home" name="Home"/>
            <Sidebaritem link="/id-lab/what-we-do" name="What We Do"/>
            <Sidebaritem link="/id-lab/meet-our-team" name="Meet Our Team"/>
            <Sidebaritem link="/id-lab/contact-us" name="Contact Us"/>
            </ul>
            </nav>
              </div>
            <Switch>
                  <Route path="/id-lab/headings">
            <HeadingsDesign />
          </Route>
           <Route path="/id-lab/logos">
            <LogosDesign />
          </Route>
                 <Route path="/id-lab/colors">
            <ColorsDesign />
          </Route>
          <Route path="/id-lab/footers">
            <FooterDesignCode app="id-lab" />
          </Route>
          <Route path="/id-lab/typography-and-fonts">
            <TypeographyAndFont/>
          </Route>
                <Route path="/id-lab/backgrounds">
            <BackgroundsDesign />
          </Route>
          <Route path="/id-lab/home">
            <HomePageDesign />
          </Route>
                <Route path="/id-lab/what-we-do">
            <WhatWeDoDesign />
          </Route>
          <Route path="/id-lab/meet-our-team">
            <MeetOurTeamDesign />
          </Route>
          <Route path="/id-lab/contact-us">
            <ContactUsDesign />
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
            <Sidebaritem link="/odi/buttons" name="Buttons"/>
            <Sidebaritem link="/odi/links" name="Links"/>
            <Sidebaritem link="/odi/headings" name="Headings"/>
            <Sidebaritem link="/odi/icons" name="Icons"/>
            <Sidebaritem link="/odi/logos" name="Logos"/>
             <Sidebaritem link="/odi/colors" name="Colors"/>
            <Sidebaritem link="/odi/typography-and-fonts" name="Typography And Fonts"/>
            <Sidebaritem link="/odi/backgrounds" name="Backgrounds"/>
            </ul>
            <br/>
             <h4>Components</h4>
            <ul className="sidebar-list">
            <Sidebaritem link="/odi/banners" name="Banners"/>
            <Sidebaritem link="/odi/people" name="People"/>
            <Sidebaritem link="/odi/navigation" name="Navigation"/>
            <Sidebaritem link="/odi/footers" name="Footer"/>
         
            </ul>
            <br/>

            <h4>Pages</h4>
            <ul className="sidebar-list">
            <Sidebaritem link="/odi/home" name="Home"/>
           
            </ul>
            </nav>
              </div>
            <Switch>
               <Route path="/odi/headings">
            <HeadingsDesign />
          </Route>
           <Route path="/odi/logos">
            <LogosDesign />
          </Route>
               <Route path="/odi/colors">
            <ColorsDesign />
          </Route>
          <Route path="/odi/typography-and-fonts">
            <TypeographyAndFont />
          </Route>
          <Route path="/odi/footers">
            <FooterDesignCode app="odi" />
          </Route>
              <Route path="/odi/backgrounds">
            <BackgroundsDesign />
          </Route>
          <Route path="/odi/home">
            <HomePageDesign />
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
            <Sidebaritem link="/knowledge-portal/buttons" name="Buttons"/>
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
            <Sidebaritem link="/knowledge-portal/banners" name="Banners"/>
            <Sidebaritem link="/knowledge-portal/people" name="People"/>
            <Sidebaritem link="/knowledge-portal/navigation" name="Navigation"/>
            <Sidebaritem link="/knowledge-portal/footers" name="Footer"/>
         
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
            <Route path="/knowledge-portal/logos">
            <LogosDesign />
          </Route>
            <Route path="/knowledge-portal/headings">
            <HeadingsDesign />
          </Route>
          
              <Route path="/knowledge-portal/colors">
            <ColorsDesign />
          </Route>
           <Route path="/knowledge-portal/typography-and-fonts">
            <TypeographyAndFont />
          </Route>
          <Route path="/knowledge-portal/footers">
            <FooterDesignCode app="knowlege-portal" />
          </Route>
              <Route path="/knowledge-portal/backgrounds">
            <BackgroundsDesign />
          </Route>
         
              <Route path="/knowledge-portal/home">
            <HomePageDesign />
          </Route>
        </Switch>
    
    </Router> 
    )
    }
}

export default Sidebar

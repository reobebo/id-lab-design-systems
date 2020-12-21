import React from 'react'
import './scss/main.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import FooterDesignCode from './FooterDesignCode';
import Sidebaritem from './SidebarItem';
import sidebarImage from './img/primary-logo-small-colored.png';
import TypeographyAndFont from './TypographyFontsDesign';
import ColorsDesign from './ColorsDesign';
import BackgroundsDesign from './BackgroundsDesign';
import HeadingsDesign from './HeadingsDesign';
import LogosDesign from './LogosDesign';
import WhatWeDoDesign from './WhatWeDoDesign';
import MeetOurTeamDesign from './MeetOurTeamDesign';
import ContactUsDesign from './ContactUsDesign';
import HomePageDesign from './HomePageDesign';
import BannersDesign from './BannersDesign';
import ButtonsDesign from './ButtonsDesign';
import PeopleDesign from './PeopleDesign';
import NavigationDesign from './NavigationDesign';
import IconsDesign from './IconsDesign';
import VideosPageDesign from './VideosPageDesign';


const Sidebar = () => {
  let { app } = useParams();
  // sidebar for the id lab assets 
  if(app==="id-lab"){
    return (
      <Router>
        <div className="sidebar">
           <img className="topbar-image" src={sidebarImage} alt=""/>
              
            <nav className='nav-items'>
            <h4><span></span>Foundations</h4>

            <ul className="sidebar-list">
            <Sidebaritem link="/id-lab/buttons" name="Buttons"/>
            <Sidebaritem link="/id-lab/headings" name="Headings"/>
            <Sidebaritem link="/id-lab/icons" name="Icons"/>
            <Sidebaritem link="/id-lab/logos" name="Logos"/>
             <Sidebaritem link="/id-lab/colors" name="Colors"/>
            <Sidebaritem link="/id-lab/typography-and-fonts" name="Typography"/>
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
            <Route exact path="/id-lab/buttons">
            <ButtonsDesign app="id-lab"/>
          </Route>
       
            <Route exact path="/id-lab/headings">
            <HeadingsDesign app={app}/>
          </Route>
          <Route exact path="/id-lab/icons">
            <IconsDesign/>
          </Route>
           <Route exact path="/id-lab/logos">
            <LogosDesign />
          </Route>
                 <Route exact path="/id-lab/colors">
            <ColorsDesign />
          </Route>
          <Route exact path="/id-lab/banners">
            <BannersDesign app={app}/>
          </Route>
          <Route exact path="/id-lab/people">
            <PeopleDesign app={app} />
          </Route>
          <Route exact path="/id-lab/navigation">
            <NavigationDesign app={app} />
          </Route>
          <Route exact path="/id-lab/footers">
            <FooterDesignCode app={app} />
          </Route>
          <Route exact path="/id-lab/typography-and-fonts">
            <TypeographyAndFont/>
          </Route>
                <Route exact path="/id-lab/backgrounds">
            <BackgroundsDesign />
          </Route>
          <Route exact path="/id-lab/home">
            <HomePageDesign app={app} />
          </Route>
                <Route exact path="/id-lab/what-we-do">
            <WhatWeDoDesign />
          </Route>
          <Route exact path="/id-lab/meet-our-team">
            <MeetOurTeamDesign />
          </Route>
           <Route exact path="/id-lab/contact-us">
            <ContactUsDesign />
            </Route> 
          
        </Switch>
    
    </Router> 
    )}
     // sidebar for the odi assets 
    if(app==="odi"){
    return (
      <Router>
        <div className="sidebar">
           <img className="topbar-image" src={sidebarImage} alt=""/>
              
            <nav className='nav-items'>
            <h4><span></span>Foundations</h4>

            <ul className="sidebar-list">
            <Sidebaritem link="/odi/buttons" name="Buttons"/>
            <Sidebaritem link="/odi/headings" name="Headings"/>
            <Sidebaritem link="/odi/icons" name="Icons"/>
            <Sidebaritem link="/odi/logos" name="Logos"/>
             <Sidebaritem link="/odi/colors" name="Colors"/>
            <Sidebaritem link="/odi/typography-and-fonts" name="Typography"/>
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
            <Route exact path="/odi/buttons">
            <ButtonsDesign app={app}/>
          </Route>
               <Route exact path="/odi/headings">
            <HeadingsDesign />
          </Route>
          <Route exact path="/odi/icons">
            <IconsDesign/>
          </Route>
           <Route exact path="/odi/logos">
            <LogosDesign />
          </Route>
               <Route exact path="/odi/colors">
            <ColorsDesign />
          </Route>
          <Route exact path="/odi/typography-and-fonts">
            <TypeographyAndFont />
          </Route>
          <Route exact path="/odi/banners">
            <BannersDesign app={app}/>
          </Route>
          <Route  exact path="/odi/people">
            <PeopleDesign app={app}/>
          </Route>
          <Route exact path="/odi/navigation">
            <NavigationDesign app={app} />
          </Route>
          <Route exact path="/odi/footers">
            <FooterDesignCode app={app} />
          </Route>
              <Route exact path="/odi/backgrounds">
            <BackgroundsDesign />
          </Route>
          <Route exact path="/odi/home">
            <HomePageDesign app={app}/>
          </Route>
          
        </Switch>
    
    </Router> 
    )}
     // sidebar for the ikp assets 
    else{
      return (
        <Router>
         <div className="sidebar">
           <img className="topbar-image" src={sidebarImage} alt=""/>
            <nav className='nav-items'>
            <h4><span></span>Foundations</h4>

            <ul className="sidebar-list">
            <Sidebaritem link="/knowledge-portal/buttons" name="Buttons"/>
            <Sidebaritem link="/knowledge-portal/headings" name="Headings"/>
            <Sidebaritem link="/knowledge-portal/icons" name="Icons"/>
            <Sidebaritem link="/knowledge-portal/logos" name="Logos"/>
             <Sidebaritem link="/knowledge-portal/colors" name="Colors"/>
            <Sidebaritem link="/knowledge-portal/typography-and-fonts" name="Typography"/>
            <Sidebaritem link="/knowledge-portal/backgrounds" name="Backgrounds"/>
            </ul>
            <br/>
             <h4>Components</h4>
            <ul className="sidebar-list">
            <Sidebaritem link="/knowledge-portal/banners" name="Banners"/>
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
         <Route exact path="/knowledge-portal/buttons">
            <ButtonsDesign app={app+"/buttons"}/>
          </Route>
            <Route exact path="/knowledge-portal/logos">
            <LogosDesign app={app}/>
          </Route>
            <Route exact path="/knowledge-portal/headings">
            <HeadingsDesign />
          </Route>
          <Route exact path="/knowledge-portal/icons">
            <IconsDesign/>
          </Route>
              <Route exact path="/knowledge-portal/colors">
            <ColorsDesign />
          </Route>
           <Route exact path="/knowledge-portal/typography-and-fonts">
            <TypeographyAndFont />
          </Route>
          <Route exact path="/knowledge-portal/banners">
            <BannersDesign app={app}/>
          </Route>
          <Route exact path="/knowledge-portal/navigation">
            <NavigationDesign app={app} />
          </Route>
          <Route exact path="/knowledge-portal/footers">
            <FooterDesignCode app={app} />
          </Route>
              <Route exact path="/knowledge-portal/backgrounds">
            <BackgroundsDesign />
          </Route>
              <Route exact path="/knowledge-portal/home">
            <HomePageDesign app={app} />
          </Route>
              <Route exact path="/knowledge-portal/videos">
            <VideosPageDesign />
          </Route>
          <Route exact path="/knowledge-portal/contact-us">
            <ContactUsDesign app={app}/>
          </Route>
          
        </Switch>
    
    </Router> 
    )
    }
}

export default Sidebar

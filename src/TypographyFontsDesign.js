import React from 'react';
import headingsImage from './img/Headings.png';
import contentImage from './img/content-example.png';
import titleStylesImage from './img/title-style.png'; 
import titleStylesExplaination from './img/title-style-explaination.png'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

/* This page contains the Typography used for the ID Lab, ODI, and IKP projects */ 

function TypographyFontsDesign() {
    return (
    
         <div className="content">
            <h1>
            Typography 
            </h1>
            <br/>
             <Tabs className="tab-content">
            <TabList>
            <Tab>Title Style Explanation</Tab>
             <Tab>Title Style Example</Tab>
              <Tab>Content Example</Tab>
             
             
            </TabList>
              <TabPanel>
                <div>
            <img className="headings-text"  src={titleStylesExplaination} alt="Typography and Fonts: Content"/>
            </div>
            </TabPanel>
          <TabPanel>
                <div>
            <img className="headings-text"  src={titleStylesImage} alt="Typography and Fonts: Content"/>
            </div>
            </TabPanel>
             <TabPanel>
                <div>
            <img className="headings-text"  src={contentImage} alt="Typography and Fonts: Content"/>
            </div>
            </TabPanel>
            
           
            </Tabs>
            
           </div>
        
          
    )
}

export default TypographyFontsDesign

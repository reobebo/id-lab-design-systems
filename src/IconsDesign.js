import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import smallIconWhite

function IconsDesign() {
    return (
          <div className="content">
            <h1>
            Social Media Icons
            </h1>
            <br/>
             <Tabs className="tab-content">
            <TabList>
              <Tab>Icons 1</Tab>
              <Tab>Icons 2</Tab>
              <Tab>Icons 3</Tab>
              <Tab>Icons 4</Tab>
             
            
            </TabList>
            <TabPanel>
                <div className>
            <img className="headings-text"  src={colorsExlainationImage} alt="Colors Explaination"/>
            </div>
            </TabPanel>
            <TabPanel>
            
                <div>
                <h4>Large Icons</h4>
            <img className="headings-text" src={colorsImage} alt="Colors"/>

            <h4>Small Icons</h4>
            </div>
            </TabPanel>
             
           
            </Tabs>
            
        </div>
    )
}

export default IconsDesign

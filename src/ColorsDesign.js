import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import colorsImage from './img/colors.png';
import colorsExlainationImage from './img/color-explainations.png'

function ColorsDesign() {
    return (
        <div className="content">
            <h1>
            Colors
            </h1>
            <br/>
             <Tabs className="tab-content">
            <TabList>
              <Tab>Colors Explaination</Tab>
              <Tab>Colors</Tab>
             
            
            </TabList>
            <TabPanel>
                <div>
            <img className="headings-text"  src={colorsExlainationImage} alt="Colors Explaination"/>
            </div>
            </TabPanel>
            <TabPanel>
                <div>
            <img className="headings-text" src={colorsImage} alt="Colors"/>
            </div>
            </TabPanel>
             
           
            </Tabs>
            
           </div>
    )
}

export default ColorsDesign

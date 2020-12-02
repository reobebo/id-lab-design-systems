import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import headingsImageOne from './img/headings-1.png';
import headingsImageTwo from './img/headings-2.png';
import headingsImageThree from './img/headings-3.png';

function HeadingsDesign() {
    return (
       <div className="content">
            <h1>
            Headings
            </h1>
            <br/>
             <Tabs className="tab-content">
            <TabList>
              <Tab>Headings Part 1</Tab>
              <Tab>Headings Part 2</Tab>
                <Tab>Headings Part 3</Tab>
             
            
            </TabList>
            <TabPanel>
                <div>
            <img className="headings-text"  src={headingsImageOne} alt="Colors Explaination"/>
            </div>
            </TabPanel>
            <TabPanel>
                <div>
            <img className="headings-text" src={headingsImageTwo} alt="Colors"/>
            </div>
            </TabPanel>
              <TabPanel>
                <div>
            <img className="headings-text" src={headingsImageThree} alt="Colors"/>
            </div>
            </TabPanel>
           
            </Tabs>
            
           </div>
    )
}

export default HeadingsDesign

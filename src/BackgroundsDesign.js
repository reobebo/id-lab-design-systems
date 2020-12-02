import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import backgroundExplainationImage from './img/background-explaination.png';
import backgroundOneImage from './img/background-1.png';
import backgroundTwoImage from './img/background-2.png';
import backgroundThreeImage from './img/background-3.png';
import backgroundFourImage from './img/background-4.png';
import backgroundFiveImage from './img/background-5.png';
import backgroundSixImage from './img/background-6.png';

function BackgroundsDesign() {
    return (
        <div className="content">
            <h1>
            Backgrounds
            </h1>
            <br/>
             <Tabs className="tab-content">
            <TabList>
              <Tab>Backgrounds Explaination</Tab>
              <Tab>Background 1</Tab>
              <Tab>Background 2</Tab>
              <Tab>Background 3</Tab>
              <Tab>Background 4</Tab>
         
                </TabList>
             <TabPanel>
                <div>
            <img className="headings-text"  src={backgroundExplainationImage} alt="Colors Explaination"/>
            </div>
            </TabPanel>
             <TabPanel>
                <div>
            <img className="headings-text"  src={backgroundOneImage} alt="Colors Explaination"/>
            </div>
            </TabPanel>
             <TabPanel>
                <div>
            <img className="headings-text"  src={backgroundTwoImage} alt="Colors Explaination"/>
            </div>
            </TabPanel>
             <TabPanel>
                <div>
            <img className="headings-text"  src={backgroundThreeImage} alt="Colors Explaination"/>
            </div>
            </TabPanel>
             <TabPanel>
                <div>
            <img className="headings-text"  src={backgroundFourImage} alt="Colors Explaination"/>
            </div>
            </TabPanel>  
            </Tabs>
            </div>
    )
}

export default BackgroundsDesign

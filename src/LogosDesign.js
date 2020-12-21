import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import logosExplainationImage from './img/logos-explaination.png';
import largeLogoExampleOne from './img/large-logo-one.png';
import largeLogoExampleTwo from './img/large-logo-two.png';
import largeLogoExampleThree from './img/large-logo-three.png';
import largeLogoExampleFour from './img/large-logo-four.png';
import largeLogoExampleFive from './img/large-logo-five.png';
import largeLogoExampleSix from './img/large-logo-six.png';

import smallogoExampleOne from './img/small-logo-one.png';
import smallLogoExampleTwo from './img/small-logo-two.png';
import smallLogoExampleThree from './img/small-logo-three.png';
import smallLogoExampleFour from './img/small-logo-four.png';
import smallLogoExampleFive from './img/small-logo-five.png';
import smallLogoExampleSix from './img/small-logo-six.png';

/* This page contains all the logos used accross the ID Lab, ODI, and IKP sites as well as an explaination */ 

function LogosDesign() {
    return (
       
             <div className="content">
            <h1>
            Logos
            </h1>
            <br/>
            <Tabs className="tab-content">
            <TabList>
            <Tab>Logos Explaination</Tab>
             <Tab>Logos Example 1</Tab>
              <Tab>Logos Example 2</Tab>
                <Tab>Logos Example 3</Tab>
              <Tab>Logos Example 4</Tab>
               <Tab>Logos Example 5</Tab>
              <Tab>Logos Example 6</Tab>
               </TabList>
               <TabPanel>
                <div>
            <img className="headings-text"  src={logosExplainationImage} alt="Typography and Fonts: Content"/>
            </div>
            </TabPanel>
             <TabPanel>
                <div>
                    <h4>Large Logo</h4>
            <img src={largeLogoExampleOne} alt="Typography and Fonts: Content"/>
            <h4>Small Logo</h4>
            <img src={smallogoExampleOne} alt="Typography and Fonts: Content"/>
            </div>
            </TabPanel>
             <TabPanel>
               <div>
                    <h4>Large Logo</h4>
            <img  src={largeLogoExampleTwo} alt="Typography and Fonts: Content"/>
            <h4>Small Logo</h4>
            <img   src={smallLogoExampleTwo} alt="Typography and Fonts: Content"/>
            </div>
            </TabPanel>
             <TabPanel>
                <div>
                    <h4>Large Logo</h4>
            <img  src={largeLogoExampleThree} alt="Typography and Fonts: Content"/>
            <h4>Small Logo</h4>
            <img  src={smallLogoExampleThree} alt="Typography and Fonts: Content"/>
            </div>
            </TabPanel>
              <TabPanel>
                <div>
                    <h4>Large Logo</h4>
            <img src={largeLogoExampleFour} alt="Typography and Fonts: Content"/>
            <h4>Small Logo</h4>
            <img   src={smallLogoExampleFour} alt="Typography and Fonts: Content"/>
            </div>
            </TabPanel>
              <TabPanel>
                <div>
                    <h4>Large Logo</h4>
            <img  src={largeLogoExampleFive} alt="Typography and Fonts: Content"/>
            <h4>Small Logo</h4>
            <img  src={smallLogoExampleFive} alt="Typography and Fonts: Content"/>
            </div>
            </TabPanel>
              <TabPanel>
                <div>
                    <h4>Large Logo</h4>
            <img  src={largeLogoExampleSix} alt="Typography and Fonts: Content"/>
            <h4>Small Logo</h4>
            <img  src={smallLogoExampleSix} alt="Typography and Fonts: Content"/>
            </div>
            </TabPanel>
             

               </Tabs>
        </div>
    )
}

export default LogosDesign

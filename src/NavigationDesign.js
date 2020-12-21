import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import image from './img/id-lab-navigation.png';
import odiImage from './img/odi-navigation.png';
import ikpImage from './img/ikp-navigation.png';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {navigation} from './content/NavigationContent';

/* This page contains the code used for the Navigation in the ID Lab, ODI, and IKP projects.
The content where all the code is from is in the NavigationContent.js file */ 


function NavigationDesign(props) {
     // displays id lab navigation code
    if(props.app==='id-lab'){
        return (
            <div className="content">
                <h1>
                ID Lab: navigation 
            </h1>
                <img className="component-image" src={image} alt="navigation for the main ID Lab Website"/>
                <Tabs className="tab-content">
                <TabList>
                  <Tab>HTML</Tab>
                  <Tab>CSS</Tab>
                
                </TabList>
    
                <TabPanel>
                   
                   <div className="code-content">
                     <CopyToClipboard text={navigation[0].split("\n").map((i,key) => { return String(i+"\n")}).join("")}>
                       <button className="copy-button">Copy to clipboard</button>
                       </CopyToClipboard>
                <code>
                     {navigation[0].split("\n").map((i,key) => {
                return <div key={key}>{i}</div>;})}
                </code>
                </div>
                </TabPanel>
                <TabPanel>
                     <div className="code-content">
                     <CopyToClipboard text={navigation[1].split("\n").map((i,key) => { return String(i+"\n")}).join("")}>
                   <button className="copy-button">Copy to clipboard</button>
                   </CopyToClipboard>
                <code>
                    {navigation[1].split("\n").map((i,key) => {
                      return <div key={key}>{i}</div>;
                })}
                </code>
                </div>
                </TabPanel>

              </Tabs>
              
            </div>
        )}
        // displays odi navigation code
        if(props.app==='odi'){
          return (
              <div className="content">
                  <h1>
                  ODI 2020: navigation 
              </h1>
                  <img className="component-image" src={odiImage} alt="navigation for the main ID Lab Website"/>
                  <Tabs className="tab-content">
                  <TabList>
                    <Tab>HTML</Tab>
                    <Tab>CSS</Tab>
           
                  </TabList>
      
                  <TabPanel>
                     
                     <div className="code-content">
                       <CopyToClipboard text={navigation[2].split("\n").map((i,key) => { return String(i+"\n")}).join("")}>
                         <button className="copy-button">Copy to clipboard</button>
                         </CopyToClipboard>
                  <code>
                       {navigation[2].split("\n").map((i,key) => {
                  return <div key={key}>{i}</div>;})}
                  </code>
                  </div>
                  </TabPanel>
                  <TabPanel>
                       <div className="code-content">
                       <CopyToClipboard text={navigation[3].split("\n").map((i,key) => { return String(i+"\n")}).join("")}>
                     <button className="copy-button">Copy to clipboard</button>
                     </CopyToClipboard>
                  <code>
                      {navigation[3].split("\n").map((i,key) => {
                        return <div key={key}>{i}</div>;
                  })}
                  </code>
                  </div>
                  </TabPanel>
                
                </Tabs>
                
              </div>
          )}
          // displays ikp navigation code
          else{
          return(
             <div className="content">
                <h1>
                IKP: navigation 
            </h1>
                <img className="component-image"  src={ikpImage} alt="navigation for the main ID Lab Website"/>
                <Tabs className="tab-content">
                <TabList>
                  <Tab>HTML</Tab>
                  <Tab>CSS</Tab>
                
                </TabList>
    
                <TabPanel>
                   
                   <div className="code-content">
                     <CopyToClipboard text={navigation[4].split("\n").map((i,key) => { return String(i+"\n")}).join("")}>
                       <button className="copy-button">Copy to clipboard</button>
                       </CopyToClipboard>
                <code>
                     {navigation[4].split("\n").map((i,key) => {
                return <div key={key}>{i}</div>;})}
                </code>
                </div>
                </TabPanel>
                <TabPanel>
                     <div className="code-content">
                     <CopyToClipboard text={navigation[5].split("\n").map((i,key) => { return String(i+"\n")}).join("")}>
                       <button className="copy-button">Copy to clipboard</button>
                       </CopyToClipboard>
                <code>
                    {navigation[5].split("\n").map((i,key) => {
                      return <div key={key}>{i}</div>;
                })}
                </code>
                </div>
                </TabPanel>
             
              </Tabs>
              
            </div>
            
          )
        }
}

export default NavigationDesign

import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {buttons} from './content/ButtonsContent';
import image from './img/id-lab-button.png';
import odiImage from './img/odi-button.png';
import ikpImage from './img/ikp-button.png';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import ReactDOM from "react-dom";
import Welcome from './Welcome';

/* This page contains the code used for the Buttons in the ID Lab, ODI, and IKP projects.
The content where all the code is from is in the ButtonsContent.js file */ 

function buttonsDesign(props) {
    if(props.app==='id-lab'){
     
        return (
            <div className="content">
                <h1>
                ID Lab: buttons 
            </h1>
                <img src={image} alt="Footer for the main ID Lab Website"/>
                <Tabs className="tab-content">
                <TabList>
                  <Tab>HTML</Tab>
                  <Tab>CSS</Tab>
                </TabList>
    
                <TabPanel>
                   
                   <div className="code-content">
                     <CopyToClipboard text={buttons[0].split("\n").map((i,key) => { return String(i+"\n")}).join("")}>
                       <button className="copy-button">Copy to clipboard</button>
                       </CopyToClipboard>
                <code>
                     {buttons[0].split("\n").map((i,key) => {
                return <div key={key}>{i}</div>;})}
                </code>
                </div>
                </TabPanel>
                <TabPanel>
                     <div className="code-content">
                     <CopyToClipboard text={buttons[1].split("\n").map((i,key) => { return String(i+"\n")}).join("")}>
                   <button className="copy-button">Copy to clipboard</button>
                   </CopyToClipboard>
                <code>
                    {buttons[1].split("\n").map((i,key) => {
                      return <div key={key}>{i}</div>;
                })}
                </code>
                </div>
                </TabPanel>
              </Tabs>
              
            </div>
        )}if(props.app==='odi'){
          return (
              <div className="content">
                  <h1>
                  ODI 2020: buttons 
              </h1>
                  <img src={odiImage} alt="Footer for the main ID Lab Website"/>
                  <Tabs className="tab-content">
                  <TabList>
                    <Tab>HTML</Tab>
                    <Tab>CSS</Tab>
                   
                  </TabList>
      
                  <TabPanel>
                     
                     <div className="code-content">
                       <CopyToClipboard text={buttons[2].split("\n").map((i,key) => { return String(i+"\n")}).join("")}>
                         <button className="copy-button">Copy to clipboard</button>
                         </CopyToClipboard>
                  <code>
                       {buttons[2].split("\n").map((i,key) => {
                  return <div key={key}>{i}</div>;})}
                  </code>
                  </div>
                  </TabPanel>
                  <TabPanel>
                       <div className="code-content">
                       <CopyToClipboard text={buttons[3].split("\n").map((i,key) => { return String(i+"\n")}).join("")}>
                     <button className="copy-button">Copy to clipboard</button>
                     </CopyToClipboard>
                  <code>
                      {buttons[3].split("\n").map((i,key) => {
                        return <div key={key}>{i}</div>;
                  })}
                  </code>
                  </div>
                  </TabPanel>
              
                </Tabs>
                
              </div>
          )}if(props.app==='knowledge-portal/buttons') {
          return(
             <div className="content">
                <h1>
                IKP: buttons 
            </h1>
                <img src={ikpImage} alt="Footer for the main ID Lab Website"/>
                <Tabs className="tab-content">
                <TabList>
                  <Tab>HTML</Tab>
                  <Tab>CSS</Tab>
                  
                </TabList>
    
                <TabPanel>
                   
                   <div className="code-content">
                     <CopyToClipboard text={buttons[4].split("\n").map((i,key) => { return String(i+"\n")}).join("")}>
                       <button className="copy-button">Copy to clipboard</button>
                       </CopyToClipboard>
                <code>
                     {buttons[4].split("\n").map((i,key) => {
                return <div key={key}>{i}</div>;})}
                </code>
                </div>
                </TabPanel>
                <TabPanel>
                     <div className="code-content">
                     <CopyToClipboard text={buttons[5].split("\n").map((i,key) => { return String(i+"\n")}).join("")}>
                       <button className="copy-button">Copy to clipboard</button>
                       </CopyToClipboard>
                <code>
                    {buttons[5].split("\n").map((i,key) => {
                      return <div key={key}>{i}</div>;
                })}
                </code>
                </div>
                </TabPanel>
              
              </Tabs>
              
            </div>
            
          )
        }else{
          return(
            <Welcome/>
          )
        }
}

export default buttonsDesign

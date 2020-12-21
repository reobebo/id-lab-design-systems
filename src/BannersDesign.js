import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import image from './img/id-lab-banner.png';
import odiImage from './img/odi-banner.png';
import ikpImage from './img/ikp-banner.png';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {banners} from './content/BannersContent';

/* This page contains the code used for the Banners/Headers in the ID Lab, ODI, and IKP projects.
The content where all the code is from is in the BannersContent.js file */ 

export default function BannersDesign(props) {
    // displays id lab banner code
    if(props.app==='id-lab'){
      return (
          <div className="content">
              <h1>
              ID Lab: Banner 
          </h1>
              <img className="component-image" src={image} alt="Footer for the main ID Lab Website"/>
              <Tabs className="tab-content">
              <TabList>
                <Tab>HTML</Tab>
                <Tab>CSS</Tab>
              </TabList>
  
              <TabPanel>
                 
                 <div className="code-content">
                   <CopyToClipboard text={banners[0].split("\n").map((i,key) => { return String(i+"\n")}).join("")}>
                     <button className="copy-button">Copy to clipboard</button>
                     </CopyToClipboard>
              <code>
                   {banners[0].split("\n").map((i,key) => {
              return <div key={key}>{i}</div>;})}
              </code>
              </div>
              </TabPanel>
              <TabPanel>
                   <div className="code-content">
                   <CopyToClipboard text={banners[1].split("\n").map((i,key) => { return String(i+"\n")}).join("")}>
                 <button className="copy-button">Copy to clipboard</button>
                 </CopyToClipboard>
              <code>
                  {banners[1].split("\n").map((i,key) => {
                    return <div key={key}>{i}</div>;
              })}
              </code>
              </div>
              </TabPanel>
            </Tabs>
            
          </div>
      )}
      // displays code for the odi banner
      if(props.app==='odi'){
        return (
            <div className="content">
                <h1>
                ODI 2020: Banner 
            </h1>
                <img className="component-image" src={odiImage} alt="Footer for the main ID Lab Website"/>
                <Tabs className="tab-content">
                <TabList>
                  <Tab>HTML</Tab>
                  <Tab>CSS</Tab>
                 
                </TabList>
    
                <TabPanel>
                   
                   <div className="code-content">
                     <CopyToClipboard text={banners[2].split("\n").map((i,key) => { return String(i+"\n")}).join("")}>
                       <button className="copy-button">Copy to clipboard</button>
                       </CopyToClipboard>
                <code>
                     {banners[2].split("\n").map((i,key) => {
                return <div key={key}>{i}</div>;})}
                </code>
                </div>
                </TabPanel>
                <TabPanel>
                     <div className="code-content">
                     <CopyToClipboard text={banners[3].split("\n").map((i,key) => { return String(i+"\n")}).join("")}>
                   <button className="copy-button">Copy to clipboard</button>
                   </CopyToClipboard>
                <code>
                    {banners[3].split("\n").map((i,key) => {
                      return <div key={key}>{i}</div>;
                })}
                </code>
                </div>
                </TabPanel>
            
              </Tabs>
              
            </div>
        )}
        // displays ikp banner code
        else{
        return(
           <div className="content">
              <h1>
              IKP: Banner 
          </h1>
              <img className="component-image"  src={ikpImage} alt="Footer for the main ID Lab Website"/>
              <Tabs className="tab-content">
              <TabList>
                <Tab>HTML</Tab>
                <Tab>CSS</Tab>
                
              </TabList>
  
              <TabPanel>
                 
                 <div className="code-content">
                   <CopyToClipboard text={banners[4].split("\n").map((i,key) => { return String(i+"\n")}).join("")}>
                     <button className="copy-button">Copy to clipboard</button>
                     </CopyToClipboard>
              <code>
                   {banners[4].split("\n").map((i,key) => {
              return <div key={key}>{i}</div>;})}
              </code>
              </div>
              </TabPanel>
              <TabPanel>
                   <div className="code-content">
                   <CopyToClipboard text={banners[5].split("\n").map((i,key) => { return String(i+"\n")}).join("")}>
                     <button className="copy-button">Copy to clipboard</button>
                     </CopyToClipboard>
              <code>
                  {banners[5].split("\n").map((i,key) => {
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


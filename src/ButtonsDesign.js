import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {buttons} from './content/ButtonsContent';
import image from './img/id-lab-button.png';
import odiImage from './img/odi-footer.png';
import ikpImage from './img/ikp-footer.png';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import ReactDOM from "react-dom";

function buttonsDesign(props) {
    if(props.app==='id-lab'){
      ReactDOM.render();
        return (
            <div className="content">
                <h1>
                ID Lab: buttons 
            </h1>
                <img className="component-image" src={image} alt="Footer for the main ID Lab Website"/>
                <Tabs className="tab-content">
                <TabList>
                  <Tab>HTML</Tab>
                  <Tab>CSS</Tab>
                </TabList>
    
                <TabPanel>
                   
                   <div className="code-content">
                     <CopyToClipboard text={buttons[0].split("\n").map((i,key) => { return String(i+"\n")})}>
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
                     <CopyToClipboard text={buttons[1].split("\n").map((i,key) => { return String(i+"\n")})}>
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
                  <img className="component-image" src={odiImage} alt="Footer for the main ID Lab Website"/>
                  <Tabs className="tab-content">
                  <TabList>
                    <Tab>HTML</Tab>
                    <Tab>CSS</Tab>
                   
                  </TabList>
      
                  <TabPanel>
                     
                     <div className="code-content">
                       <CopyToClipboard text={buttons[2].split("\n").map((i,key) => { return String(i+"\n")})}>
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
                       <CopyToClipboard text={buttons[3].split("\n").map((i,key) => { return String(i+"\n")})}>
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
          )}else{
          return(
             <div className="content">
                <h1>
                IKP: buttons 
            </h1>
                <img className="component-image"  src={ikpImage} alt="Footer for the main ID Lab Website"/>
                <Tabs className="tab-content">
                <TabList>
                  <Tab>HTML</Tab>
                  <Tab>CSS</Tab>
                  
                </TabList>
    
                <TabPanel>
                   
                   <div className="code-content">
                     <CopyToClipboard text={buttons[4].split("\n").map((i,key) => { return String(i+"\n")})}>
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
                     <CopyToClipboard text={buttons[5].split("\n").map((i,key) => { return String(i+"\n")})}>
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
        }
}

export default buttonsDesign

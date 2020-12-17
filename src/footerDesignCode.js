import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import image from './img/id-lab-footer.png';
import odiImage from './img/odi-footer.png';
import ikpImage from './img/ikp-footer.png';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {idLabFooter} from './content/footerContent';

const FooterDesignCode = (props) => {
  console.log(props.app);
  if(props.app==='id-lab'){
    return (
        <div className="content">
            <h1>
            ID Lab: Footer 
        </h1>
            <img className="component-image" src={image} alt="Footer for the main ID Lab Website"/>
            <Tabs className="tab-content">
            <TabList>
              <Tab>HTML</Tab>
              <Tab>CSS</Tab>
              <Tab>JavaScript</Tab>
            </TabList>

            <TabPanel>
               
               <div className="code-content">
                 <CopyToClipboard text={idLabFooter[0].split("\n").map((i,key) => { return String(i+"\n")}).join("")}>
                   <button className="copy-button">Copy to clipboard</button>
                   </CopyToClipboard>
            <code>
                 {idLabFooter[0].split("\n").map((i,key) => {
            return <div key={key}>{i}</div>;})}
            </code>
            </div>
            </TabPanel>
            <TabPanel>
                 <div className="code-content">
                 <CopyToClipboard text={idLabFooter[1].split("\n").map((i,key) => { return String(i+"\n")}).join("")}>
               <button className="copy-button">Copy to clipboard</button>
               </CopyToClipboard>
            <code>
                {idLabFooter[1].split("\n").map((i,key) => {
                  return <div key={key}>{i}</div>;
            })}
            </code>
            </div>
            </TabPanel>
            <TabPanel>
              <div className="code-content">
              <code>{idLabFooter[2]}</code>
            </div>
            </TabPanel>
          </Tabs>
          
        </div>
    )}if(props.app==='odi'){
      return (
          <div className="content">
              <h1>
              ODI 2020: Footer 
          </h1>
              <img className="component-image" src={odiImage} alt="Footer for the main ID Lab Website"/>
              <Tabs className="tab-content">
              <TabList>
                <Tab>HTML</Tab>
                <Tab>CSS</Tab>
                <Tab>JavaScript</Tab>
              </TabList>
  
              <TabPanel>
                 
                 <div className="code-content">
                   <CopyToClipboard text={idLabFooter[3].split("\n").map((i,key) => { return String(i+"\n")}).join("")}>
                     <button className="copy-button">Copy to clipboard</button>
                     </CopyToClipboard>
              <code>
                   {idLabFooter[3].split("\n").map((i,key) => {
              return <div key={key}>{i}</div>;})}
              </code>
              </div>
              </TabPanel>
              <TabPanel>
                   <div className="code-content">
                   <CopyToClipboard text={idLabFooter[4].split("\n").map((i,key) => { return String(i+"\n")}).join("")}>
                 <button className="copy-button">Copy to clipboard</button>
                 </CopyToClipboard>
              <code>
                  {idLabFooter[4].split("\n").map((i,key) => {
                    return <div key={key}>{i}</div>;
              })}
              </code>
              </div>
              </TabPanel>
              <TabPanel>
                <div className="code-content">
                <code>{idLabFooter[5]}</code>
              </div>
              </TabPanel>
            </Tabs>
            
          </div>
      )}else{
      return(
         <div className="content">
            <h1>
            IKP: Footer 
        </h1>
            <img className="component-image"  src={ikpImage} alt="Footer for the main ID Lab Website"/>
            <Tabs className="tab-content">
            <TabList>
              <Tab>HTML</Tab>
              <Tab>CSS</Tab>
              <Tab>JavaScript</Tab>
            </TabList>

            <TabPanel>
               
               <div className="code-content">
                 <CopyToClipboard text={idLabFooter[6].split("\n").map((i,key) => { return String(i+"\n")}).join("")}>
                   <button className="copy-button">Copy to clipboard</button>
                   </CopyToClipboard>
            <code>
                 {idLabFooter[6].split("\n").map((i,key) => {
            return <div key={key}>{i}</div>;})}
            </code>
            </div>
            </TabPanel>
            <TabPanel>
                 <div className="code-content">
                 <CopyToClipboard text={idLabFooter[7].split("\n").map((i,key) => { return String(i+"\n")}).join("")}>
                   <button className="copy-button">Copy to clipboard</button>
                   </CopyToClipboard>
            <code>
                {idLabFooter[7].split("\n").map((i,key) => {
                  return <div key={key}>{i}</div>;
            })}
            </code>
            </div>
            </TabPanel>
            <TabPanel>
              <div className="code-content">
              <code>{idLabFooter[8]}</code>
            </div>
            </TabPanel>
          </Tabs>
          
        </div>
        
      )
    }
}

export default FooterDesignCode

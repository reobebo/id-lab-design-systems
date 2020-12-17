import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {contactUs} from './content/ContactUsContent';
import {CopyToClipboard} from 'react-copy-to-clipboard';


function ContactUsDesign(props) {
  if(props.app==='id-lab'){
    return (
        <div className="content">
        <h1>
        Contact Us Page
    </h1>
        
        <Tabs className="tab-content">
        <TabList>
          <Tab>Info</Tab>
          <Tab>HTML</Tab>
          <Tab>CSS</Tab>
          <Tab>JavaScript</Tab>
        </TabList>


        <TabPanel>
           
           <div className="code-content">
            
        <code>
             {contactUs[0].split("\n").map((i,key) => {
        return <div key={key}>{i}</div>;})}
        </code>
        </div>
        </TabPanel>
        <TabPanel>
           
           <div className="code-content">
             <CopyToClipboard text={contactUs[1].split("\n").map((i,key) => { return String(i+"\n")}).join("")}>
               <button className="copy-button">Copy to clipboard</button>
               </CopyToClipboard>
        <code>
             {contactUs[1].split("\n").map((i,key) => {
        return <div key={key}>{i}</div>;})}
        </code>
        </div>
        </TabPanel>
        <TabPanel>
        <CopyToClipboard text={contactUs[2].split("\n").map((i,key) => { return String(i+"\n")}).join("")}>
               <button className="copy-button">Copy to clipboard</button>
               </CopyToClipboard>
             <div className="code-content">
        <code>
            {contactUs[2].split("\n").map((i,key) => {
              return <div key={key}>{i}</div>;
        })}
        </code>
        </div>
        </TabPanel>
        <TabPanel>
          <div className="code-content">
          <code>{contactUs[3]}</code>
        </div>
        </TabPanel>
      </Tabs>
      
    </div>
    );}else{
      return (
        <div className="content">
        <h1>
        Contact Us Page
    </h1>
        
        <Tabs className="tab-content">
        <TabList>
          <Tab>Info</Tab>
          <Tab>Code</Tab>
        
        </TabList>


        <TabPanel>
           
           <div className="code-content">
            
        <code>
             {contactUs[4].split("\n").map((i,key) => {
        return <div key={key}>{i}</div>;})}
        </code>
        </div>
        </TabPanel>
        <TabPanel>
           
           <div className="code-content">
             <CopyToClipboard text={contactUs[5].split("\n").map((i,key) => { return String(i+"\n")}).join("")}>
               <button className="copy-button">Copy to clipboard</button>
               </CopyToClipboard>
        <code>
             {contactUs[5].split("\n").map((i,key) => {
        return <div key={key}>{i}</div>;})}
        </code>
        </div>
        </TabPanel>
       
      </Tabs>
      
    </div>
    );
    }
}

export default ContactUsDesign;
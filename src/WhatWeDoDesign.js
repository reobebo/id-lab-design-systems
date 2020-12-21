import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {whatWeDo} from './content/WhatWeDoContent';
import {CopyToClipboard} from 'react-copy-to-clipboard';

/* This page contains the code used for the What We Do Page in the ID Lab WhatWeDoContent.js file */ 

function WhatWeDoDesign(props) {
    return (
        <div className="content">
        <h1>
        What We Do Page
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
             {whatWeDo[0].split("\n").map((i,key) => {
        return <div key={key}>{i}</div>;})}
        </code>
        </div>
        </TabPanel>
        <TabPanel>
           
           <div className="code-content">
             <CopyToClipboard text={whatWeDo[1].split("\n").map((i,key) => { return String(i+"\n")}).join("")}>
               <button className="copy-button">Copy to clipboard</button>
               </CopyToClipboard>
        <code>
             {whatWeDo[1].split("\n").map((i,key) => {
        return <div key={key}>{i}</div>;})}
        </code>
        </div>
        </TabPanel>
        <TabPanel>
        <CopyToClipboard text={whatWeDo[2].split("\n").map((i,key) => { return String(i+"\n")}).join("")}>
               <button className="copy-button">Copy to clipboard</button>
               </CopyToClipboard>
             <div className="code-content">
        <code>
            {whatWeDo[2].split("\n").map((i,key) => {
              return <div key={key}>{i}</div>;
        })}
        </code>
        </div>
        </TabPanel>
        <TabPanel>
          <div className="code-content">
          <code>{whatWeDo[3]}</code>
        </div>
        </TabPanel>
      </Tabs>
      
    </div>
    );
}

export default WhatWeDoDesign;
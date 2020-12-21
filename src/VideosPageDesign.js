import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {videos} from './content/VideosContent';
import {CopyToClipboard} from 'react-copy-to-clipboard';

/* This page contains the code used for the Videos page in the  IKP project.
The content where all the code is from is in the VideosContent.js file */ 

function VideosPageDesign() {
    return (
        <div className="content">
        <h1>
        Videos Page
        </h1>
        <Tabs className="tab-content">
        <TabList>
          <Tab>Info</Tab>
          <Tab>Code</Tab>
       
        </TabList>
        <TabPanel>
        <div className="code-content">
        <code>
             {videos[0].split("\n").map((i,key) => {
        return <div key={key}>{i}</div>;})}
        </code>
        </div>
        </TabPanel>
        <TabPanel>
           
           <div className="code-content">
             <CopyToClipboard text={videos[1].split("\n").map((i,key) => { return String(i+"\n")}).join("")}>
               <button className="copy-button">Copy to clipboard</button>
               </CopyToClipboard>
        <code>
             {videos[1].split("\n").map((i,key) => {
        return <div key={key}>{i}</div>;})}
        </code>
        </div>
        </TabPanel>
            </Tabs>
        </div>
    )
}

export default VideosPageDesign

import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {people} from './content/PeopleContent';
import image from './img/id-lab-people.png';
import odiImage from './img/odi-people.png';
import {CopyToClipboard} from 'react-copy-to-clipboard';

function PeopleDesign(props) {
    if(props.app==='id-lab'){
        return (
            <div className="content">
                <h1>
                ID Lab: people 
            </h1>
                <img className="component-image" src={image} alt="Footer for the main ID Lab Website"/>
                <Tabs className="tab-content">
                <TabList>
                  <Tab>HTML</Tab>
                  <Tab>CSS</Tab>
                </TabList>
    
                <TabPanel>
                   
                   <div className="code-content">
                     <CopyToClipboard text={people[0].split("\n").map((i,key) => { return String(i+"\n")})}>
                       <button className="copy-button">Copy to clipboard</button>
                       </CopyToClipboard>
                <code>
                     {people[0].split("\n").map((i,key) => {
                return <div key={key}>{i}</div>;})}
                </code>
                </div>
                </TabPanel>
                <TabPanel>
                     <div className="code-content">
                     <CopyToClipboard text={people[1].split("\n").map((i,key) => { return String(i+"\n")})}>
                   <button className="copy-button">Copy to clipboard</button>
                   </CopyToClipboard>
                <code>
                    {people[1].split("\n").map((i,key) => {
                      return <div key={key}>{i}</div>;
                })}
                </code>
                </div>
                </TabPanel>
              </Tabs>
              
            </div>
        )}else if(props.app==='odi'){
          return (
              <div className="content">
                  <h1>
                  ODI 2020: people 
              </h1>
                  <img className="component-image" src={odiImage} alt="Footer for the main ID Lab Website"/>
                  <Tabs className="tab-content">
                  <TabList>
                    <Tab>HTML</Tab>
                    <Tab>CSS</Tab>
                   
                  </TabList>
      
                  <TabPanel>
                     
                     <div className="code-content">
                       <CopyToClipboard text={people[2].split("\n").map((i,key) => { return String(i+"\n")})}>
                         <button className="copy-button">Copy to clipboard</button>
                         </CopyToClipboard>
                  <code>
                       {people[2].split("\n").map((i,key) => {
                  return <div key={key}>{i}</div>;})}
                  </code>
                  </div>
                  </TabPanel>
                  <TabPanel>
                       <div className="code-content">
                       <CopyToClipboard text={people[3].split("\n").map((i,key) => { return String(i+"\n")})}>
                     <button className="copy-button">Copy to clipboard</button>
                     </CopyToClipboard>
                  <code>
                      {people[3].split("\n").map((i,key) => {
                        return <div key={key}>{i}</div>;
                  })}
                  </code>
                  </div>
                  </TabPanel>
              
                </Tabs>
                
              </div>
          )}
}

export default PeopleDesign

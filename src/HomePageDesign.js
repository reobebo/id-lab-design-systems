import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {homePage} from './content/HomePageContent';

function HomePageDesign(props) {
  console.log(props.app);
    if(props.app==='id-lab'){
        return (
            <div className="content">
                <h1>
                ID Lab: Home Page 
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
             {homePage[0].split("\n").map((i,key) => {
        return <div key={key}>{i}</div>;})}
        </code>
        </div>
        </TabPanel>
                <TabPanel>
                   
                   <div className="code-content">
                     <CopyToClipboard text={homePage[1].split("\n").map((i,key) => { return String(i+"\n")})}>
                       <button className="copy-button">Copy to clipboard</button>
                       </CopyToClipboard>
                <code>
                     {homePage[1].split("\n").map((i,key) => {
                return <div key={key}>{i}</div>;})}
                </code>
                </div>
                </TabPanel>
                <TabPanel>
                     <div className="code-content">
                     <CopyToClipboard text={homePage[2].split("\n").map((i,key) => { return String(i+"\n")})}>
                   <button className="copy-button">Copy to clipboard</button>
                   </CopyToClipboard>
                <code>
                    {homePage[2].split("\n").map((i,key) => {
                      return <div key={key}>{i}</div>;
                })}
                </code>
                </div>
                </TabPanel>
                <TabPanel>
                  <div className="code-content">
                  <code>{homePage[3]}</code>
                </div>
                </TabPanel>
              </Tabs>
              
            </div>
        )}if(props.app==='odi'){
          return (
              <div className="content">
                  <h1>
                  ODI 2020: Home Page 
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
             {homePage[4].split("\n").map((i,key) => {
        return <div key={key}>{i}</div>;})}
        </code>
        </div>
        </TabPanel>
                  <TabPanel>
                     
                     <div className="code-content">
                       <CopyToClipboard text={homePage[5].split("\n").map((i,key) => { return String(i+"\n")})}>
                         <button className="copy-button">Copy to clipboard</button>
                         </CopyToClipboard>
                  <code>
                       {homePage[5].split("\n").map((i,key) => {
                  return <div key={key}>{i}</div>;})}
                  </code>
                  </div>
                  </TabPanel>
                  <TabPanel>
                       <div className="code-content">
                       <CopyToClipboard text={homePage[6].split("\n").map((i,key) => { return String(i+"\n")})}>
                     <button className="copy-button">Copy to clipboard</button>
                     </CopyToClipboard>
                  <code>
                      {homePage[6].split("\n").map((i,key) => {
                        return <div key={key}>{i}</div>;
                  })}
                  </code>
                  </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="code-content">
                    <code>{homePage[7]}</code>
                  </div>
                  </TabPanel>
                </Tabs>
                
              </div>
          )}else{
          return(
             <div className="content">
                <h1>
                IKP: Home Page 
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
             {homePage[8].split("\n").map((i,key) => {
        return <div key={key}>{i}</div>;})}
        </code>
        </div>
        </TabPanel>
                <TabPanel>
                   
                   <div className="code-content">
                     <CopyToClipboard text={homePage[9].split("\n").map((i,key) => { return String(i+"\n")})}>
                       <button className="copy-button">Copy to clipboard</button>
                       </CopyToClipboard>
                <code>
                     {homePage[9].split("\n").map((i,key) => {
                return <div key={key}>{i}</div>;})}
                </code>
                </div>
                </TabPanel>
                <TabPanel>
                     <div className="code-content">
                     <CopyToClipboard text={homePage[10].split("\n").map((i,key) => { return String(i+"\n")})}>
                       <button className="copy-button">Copy to clipboard</button>
                       </CopyToClipboard>
                <code>
                    {homePage[10].split("\n").map((i,key) => {
                      return <div key={key}>{i}</div>;
                })}
                </code>
                </div>
                </TabPanel>
                <TabPanel>
                  <div className="code-content">
                  <code>{homePage[11]}</code>
                </div>
                </TabPanel>
              </Tabs>
              
            </div>
            
          )
        }
}

export default HomePageDesign

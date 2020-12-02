import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import image from './img/id_lab_main_side_footer.png';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {idLabFooter} from './content/FooterContent';

const FooterDesignCode = (props) => {
  console.log(props.app);
  if(props.app==='id-lab'){
    return (
        <div className="content">
            <h1>
            Footer 
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
                 <CopyToClipboard text={idLabFooter[0].split("\n").map((i,key) => { return String(i+"\n")})}>
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
    )}else{
      return(
         <div className="content">
            <h1>
            Footer 
        </h1>
            <img className="component-image"  src={image} alt="Footer for the main ID Lab Website"/>
            <Tabs className="tab-content">
            <TabList>
              <Tab>HTML</Tab>
              <Tab>CSS</Tab>
              <Tab>JavaScript</Tab>
            </TabList>

            <TabPanel>
               
               <div className="code-content">
                 <CopyToClipboard text={idLabFooter[0].split("\n").map((i,key) => { return String(i+"\n")})}>
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
        
      )
    }
}

export default FooterDesignCode

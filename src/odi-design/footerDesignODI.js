import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import image from '../img/id_lab_main_side_footer.png';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {testTable} from '../content/footerContent';
function footerDesignODI(props) {
  let pathName=props.location.pathname
  let codeNum=0;
  console.log(props.location.pathname);
  if (!pathName.includes('/id-lab-welcome')){
     codeNum=0;
  }
    return (
        <div className="content">
            <h1>
            Footer
        </h1>
            <img src={image} alt="Footer for the main ID Lab Website"/>
            <Tabs className="tab-content">
            <TabList>
              <Tab>HTML</Tab>
              <Tab>CSS</Tab>
              <Tab>JavaScript</Tab>
            </TabList>

            <TabPanel>
               
               <div className="code-content">
                 <CopyToClipboard text={testTable[codeNum].split("\n").map((i,key) => { return String(i+"\n")})}>
                   <button className="copy-button">Copy to clipboard</button>
                   </CopyToClipboard>
            <code>
                 {testTable[codeNum].split("\n").map((i,key) => {
            return <div key={key}>{i}</div>;})}
            </code>
            </div>
            </TabPanel>
            <TabPanel>
                 <div className="code-content">
            <code>
                {testTable[codeNum].split("\n").map((i,key) => {
                  return <div key={key}>{i}</div>;
            })}
            </code>
            </div>
            </TabPanel>
            <TabPanel>
              <div className="code-content">
              <code>No JavaScript</code>
            </div>
            </TabPanel>
          </Tabs>
          
        </div>
    )
}

export default footerDesignODI

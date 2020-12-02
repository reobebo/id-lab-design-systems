import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {meetOurTeam} from './content/MeetOurTeamContent';
import {CopyToClipboard} from 'react-copy-to-clipboard';

function MeetOurTeamDesign(props) {
    return (
        <div className="content">
        <h1>
        Meet Our Team
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
             {meetOurTeam[0].split("\n").map((i,key) => {
        return <div key={key}>{i}</div>;})}
        </code>
        </div>
        </TabPanel>
        <TabPanel>
           
           <div className="code-content">
             <CopyToClipboard text={meetOurTeam[1].split("\n").map((i,key) => { return String(i+"\n")})}>
               <button className="copy-button">Copy to clipboard</button>
               </CopyToClipboard>
        <code>
             {meetOurTeam[1].split("\n").map((i,key) => {
        return <div key={key}>{i}</div>;})}
        </code>
        </div>
        </TabPanel>
        <TabPanel>
        <CopyToClipboard text={meetOurTeam[2].split("\n").map((i,key) => { return String(i+"\n")})}>
               <button className="copy-button">Copy to clipboard</button>
               </CopyToClipboard>
             <div className="code-content">
        <code>
            {meetOurTeam[2].split("\n").map((i,key) => {
              return <div key={key}>{i}</div>;
        })}
        </code>
        </div>
        </TabPanel>
        <TabPanel>
          <div className="code-content">
          <code>{meetOurTeam[3]}</code>
        </div>
        </TabPanel>
      </Tabs>
      
    </div>
    );
}

export default MeetOurTeamDesign;
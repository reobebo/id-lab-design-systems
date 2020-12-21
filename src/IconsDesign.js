import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import igSmallImageSquareOne from './img/igSmallImageSquareOne.png';
import igSmallImageCircleOne from './img/igSmallImageCircleOne.png';
import igSmallImageRoundedOne from './img/igSmallImageRoundedOne.png';
import liSmallImageSquareOne from './img/liSmallImageSquareOne.png';
import liSmallImageCircleOne from './img/liSmallImageCircleOne.png';
import liSmallImageRoundedOne from './img/liSmallImageRoundedOne.png';
import fbSmallImageSquareOne from './img/fbSmallImageSquareOne.png';
import fbSmallImageCircleOne from './img/fbSmallImageCircleOne.png';
import fbSmallImageRoundedOne from './img/fbSmallImageRoundedOne.png';

import igLargeImageSquareOne from './img/igLargeImageSquareOne.png';
import igLargeImageCircleOne from './img/igLargeImageCircleOne.png';
import igLargeImageRoundedOne from './img/igLargeImageRoundedOne.png';
import liLargeImageSquareOne from './img/liLargeImageSquareOne.png';
import liLargeImageCircleOne from './img/liLargeImageCircleOne.png';
import liLargeImageRoundedOne from './img/liLargeImageRoundedOne.png';
import fbLargeImageSquareOne from './img/fbLargeImageSquareOne.png';
import fbLargeImageCircleOne from './img/fbLargeImageCircleOne.png';
import fbLargeImageRoundedOne from './img/fbLargeImageRoundedOne.png';

import igSmallImageSquareTwo from './img/igSmallImageSquareTwo.png';
import igSmallImageCircleTwo from './img/igSmallImageCircleTwo.png';
import igSmallImageRoundedTwo from './img/igSmallImageRoundedTwo.png';
import liSmallImageSquareTwo from './img/liSmallImageSquareTwo.png';
import liSmallImageCircleTwo from './img/liSmallImageCircleTwo.png';
import liSmallImageRoundedTwo from './img/liSmallImageRoundedTwo.png';
import fbSmallImageSquareTwo from './img/fbSmallImageSquareTwo.png';
import fbSmallImageCircleTwo from './img/fbSmallImageCircleTwo.png';
import fbSmallImageRoundedTwo from './img/fbSmallImageRoundedTwo.png';

import igLargeImageSquareTwo from './img/igLargeImageSquareTwo.png';
import igLargeImageCircleTwo from './img/igLargeImageCircleTwo.png';
import igLargeImageRoundedTwo from './img/igLargeImageRoundedTwo.png';
import liLargeImageSquareTwo from './img/liLargeImageSquareTwo.png';
import liLargeImageCircleTwo from './img/liLargeImageCircleTwo.png';
import liLargeImageRoundedTwo from './img/liLargeImageRoundedTwo.png';
import fbLargeImageSquareTwo from './img/fbLargeImageSquareTwo.png';
import fbLargeImageCircleTwo from './img/fbLargeImageCircleTwo.png';
import fbLargeImageRoundedTwo from './img/fbLargeImageRoundedTwo.png';

import igSmallImageSquareThree from './img/igSmallImageSquareThree.png';
import igSmallImageCircleThree from './img/igSmallImageCircleThree.png';
import igSmallImageRoundedThree from './img/igSmallImageRoundedThree.png';
import liSmallImageSquareThree from './img/liSmallImageSquareThree.png';
import liSmallImageCircleThree from './img/liSmallImageCircleThree.png';
import liSmallImageRoundedThree from './img/liSmallImageRoundedThree.png';
import fbSmallImageSquareThree from './img/fbSmallImageSquareThree.png';
import fbSmallImageCircleThree from './img/fbSmallImageCircleThree.png';
import fbSmallImageRoundedThree from './img/fbSmallImageRoundedThree.png';

import igLargeImageSquareThree from './img/igLargeImageSquareThree.png';
import igLargeImageCircleThree from './img/igLargeImageCircleThree.png';
import igLargeImageRoundedThree from './img/igLargeImageRoundedThree.png';
import liLargeImageSquareThree from './img/liLargeImageSquareThree.png';
import liLargeImageCircleThree from './img/liLargeImageCircleThree.png';
import liLargeImageRoundedThree from './img/liLargeImageRoundedThree.png';
import fbLargeImageSquareThree from './img/fbLargeImageSquareThree.png';
import fbLargeImageCircleThree from './img/fbLargeImageCircleThree.png';
import fbLargeImageRoundedThree from './img/fbLargeImageRoundedThree.png';

import igSmallImageSquareFour from './img/igSmallImageSquareFour.png';
import igSmallImageCircleFour from './img/igSmallImageCircleFour.png';
import igSmallImageRoundedFour from './img/igSmallImageRoundedFour.png';
import liSmallImageSquareFour from './img/liSmallImageSquareFour.png';
import liSmallImageCircleFour from './img/liSmallImageCircleFour.png';
import liSmallImageRoundedFour from './img/liSmallImageRoundedFour.png';
import fbSmallImageSquareFour from './img/fbSmallImageSquareFour.png';
import fbSmallImageCircleFour from './img/fbSmallImageCircleFour.png';
import fbSmallImageRoundedFour from './img/fbSmallImageRoundedFour.png';


import igLargeImageSquareFour from './img/igLargeImageSquareFour.png';
import igLargeImageCircleFour from './img/igLargeImageCircleFour.png';
import igLargeImageRoundedFour from './img/igLargeImageRoundedFour.png';
import liLargeImageSquareFour from './img/liLargeImageSquareFour.png';
import liLargeImageCircleFour from './img/liLargeImageCircleFour.png';
import liLargeImageRoundedFour from './img/liLargeImageRoundedFour.png';
import fbLargeImageSquareFour from './img/fbLargeImageSquareFour.png';
import fbLargeImageCircleFour from './img/fbLargeImageCircleFour.png';
import fbLargeImageRoundedFour from './img/fbLargeImageRoundedFour.png';

/* This page contains all the social media icons used accross the ID Lab, ODI, and IKP sites */ 

function IconsDesign() {
    return (
          <div className="content">
            <h1>
            Social Media Icons
            </h1>
            <br/>
             <Tabs className="tab-content">
            <TabList>
              <Tab>Icons 1</Tab>
              <Tab>Icons 2</Tab>
              <Tab>Icons 3</Tab>
              <Tab>Icons 4</Tab>
             
            
            </TabList>
            <TabPanel>
                
            <h4 className="icon-title">Small Icons</h4>
            <br/>
            <div className="icon-images">
            <img className="icon1" src={igSmallImageSquareOne} alt="Icons"/>
            <img className="icon2" src={liSmallImageSquareOne} alt="Icons"/>
            <img className="icon3" src={fbSmallImageSquareOne} alt="Icons"/>
            <img className="icon4" src={igSmallImageCircleOne} alt="Icons"/>
            <img className="icon5" src={liSmallImageCircleOne} alt="Icons"/>
            <img className="icon6" src={fbSmallImageCircleOne} alt="Icons"/>
            <img className="icon7" src={igSmallImageRoundedOne} alt="Icons"/>
            <img className="icon8" src={liSmallImageRoundedOne} alt="Icons"/>
            <img className="icon9" src={fbSmallImageRoundedOne} alt="Icons"/>
            </div>
            <br/>
            <h4 className="icon-title">Large Icons</h4>
            <br/>
            <div className="icon-images">
            <img className="icon1" src={igLargeImageSquareOne} alt="Icons"/>
            <img className="icon2" src={liLargeImageSquareOne} alt="Icons"/>
            <img className="icon3" src={fbLargeImageSquareOne} alt="Icons"/>
            <img className="icon4" src={igLargeImageCircleOne} alt="Icons"/>
            <img className="icon5" src={liLargeImageCircleOne} alt="Icons"/>
            <img className="icon6" src={fbLargeImageCircleOne} alt="Icons"/>
            <img className="icon7" src={igLargeImageRoundedOne} alt="Icons"/>
            <img className="icon8" src={liLargeImageRoundedOne} alt="Icons"/>
            <img className="icon9" src={fbLargeImageRoundedOne} alt="Icons"/>
            </div>
            </TabPanel>
            <TabPanel>
            
            
            <h4 className="icon-title">Small Icons</h4>
            <br/>
            <div className="icon-images">
            <img className="icon1" src={igSmallImageSquareTwo} alt="Icons"/>
            <img className="icon2" src={liSmallImageSquareTwo} alt="Icons"/>
            <img className="icon3" src={fbSmallImageSquareTwo} alt="Icons"/>
            <img className="icon4" src={igSmallImageCircleTwo} alt="Icons"/>
            <img className="icon5" src={liSmallImageCircleTwo} alt="Icons"/>
            <img className="icon6" src={fbSmallImageCircleTwo} alt="Icons"/>
            <img className="icon7" src={igSmallImageRoundedTwo} alt="Icons"/>
            <img className="icon8" src={liSmallImageRoundedTwo} alt="Icons"/>
            <img className="icon9" src={fbSmallImageRoundedTwo} alt="Icons"/>
            </div>
            <br/>
           
            <h4 className="icon-title">Large Icons</h4>
            <br/>
             <div className="icon-images">
            <img className="icon1" src={igLargeImageSquareTwo} alt="Icons"/>
            <img className="icon2" src={liLargeImageSquareTwo} alt="Icons"/>
            <img className="icon3" src={fbLargeImageSquareTwo} alt="Icons"/>
            <img className="icon4" src={igLargeImageCircleTwo} alt="Icons"/>
            <img className="icon5" src={liLargeImageCircleTwo} alt="Icons"/>
            <img className="icon6" src={fbLargeImageCircleTwo} alt="Icons"/>
            <img className="icon7" src={igLargeImageRoundedTwo} alt="Icons"/>
            <img className="icon8" src={liLargeImageRoundedTwo} alt="Icons"/>
            <img className="icon9" src={fbLargeImageRoundedTwo} alt="Icons"/>
            </div>
            </TabPanel>
               <TabPanel>
            
            
            <h4 className="icon-title">Small Icons</h4>
            <br/>
            <div className="icon-images">
            <img className="icon1" src={igSmallImageSquareThree} alt="Icons"/>
            <img className="icon2" src={liSmallImageSquareThree} alt="Icons"/>
            <img className="icon3" src={fbSmallImageSquareThree} alt="Icons"/>
            <img className="icon4" src={igSmallImageCircleThree} alt="Icons"/>
            <img className="icon5" src={liSmallImageCircleThree} alt="Icons"/>
            <img className="icon6" src={fbSmallImageCircleThree} alt="Icons"/>
            <img className="icon7" src={igSmallImageRoundedThree} alt="Icons"/>
            <img className="icon8" src={liSmallImageRoundedThree} alt="Icons"/>
            <img className="icon9" src={fbSmallImageRoundedThree} alt="Icons"/>
            </div>
            <br/>
            <h4 className="icon-title">Large Icons</h4>
            <br/>
              <div className="icon-images">
            <img className="icon1" src={igLargeImageSquareThree} alt="Icons"/>
            <img className="icon2" src={liLargeImageSquareThree} alt="Icons"/>
            <img className="icon3" src={fbLargeImageSquareThree} alt="Icons"/>
            <img className="icon4" src={igLargeImageCircleThree} alt="Icons"/>
            <img className="icon5" src={liLargeImageCircleThree} alt="Icons"/>
            <img className="icon6" src={fbLargeImageCircleThree} alt="Icons"/>
            <img className="icon7" src={igLargeImageRoundedThree} alt="Icons"/>
            <img className="icon8" src={liLargeImageRoundedThree} alt="Icons"/>
            <img className="icon9" src={fbLargeImageRoundedThree} alt="Icons"/>
            </div>
            </TabPanel>
               <TabPanel>
            
            
            <h4 className="icon-title">Small Icons</h4>
            <br/>
            <div className="icon-images">
            <img className="icon1" src={igSmallImageSquareFour} alt="Icons"/>
            <img className="icon2" src={liSmallImageSquareFour} alt="Icons"/>
            <img className="icon3" src={fbSmallImageSquareFour} alt="Icons"/>
            <img className="icon4" src={igSmallImageCircleFour} alt="Icons"/>
            <img className="icon5" src={liSmallImageCircleFour} alt="Icons"/>
            <img className="icon6" src={fbSmallImageCircleFour} alt="Icons"/>
            <img className="icon7" src={igSmallImageRoundedFour} alt="Icons"/>
            <img className="icon8" src={liSmallImageRoundedFour} alt="Icons"/>
            <img className="icon9" src={fbSmallImageRoundedFour} alt="Icons"/>
            </div>
            <br/>
           
            <h4 className="icon-title">Large Icons</h4>
            <br/>
          <div className="icon-images">
            <img className="icon1" src={igLargeImageSquareFour} alt="Icons"/>
            <img className="icon2" src={liLargeImageSquareFour} alt="Icons"/>
            <img className="icon3" src={fbLargeImageSquareFour} alt="Icons"/>
            <img className="icon4" src={igLargeImageCircleFour} alt="Icons"/>
            <img className="icon5" src={liLargeImageCircleFour} alt="Icons"/>
            <img className="icon6" src={fbLargeImageCircleFour} alt="Icons"/>
            <img className="icon7" src={igLargeImageRoundedFour} alt="Icons"/>
            <img className="icon8" src={liLargeImageRoundedFour} alt="Icons"/>
            <img className="icon9" src={fbLargeImageRoundedFour} alt="Icons"/>
            </div>
            </TabPanel>
             
           
            </Tabs>
            
        </div>
    )
}

export default IconsDesign

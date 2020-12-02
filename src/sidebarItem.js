import React from 'react'
import './scss/main.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FooterDesignCode from './footerDesignCode';
import Welcome from './Welcome';

const sidebarItem = (props) => {
    return (
        <>  
                <li><Link to={props.link}>{props.name}</Link></li>
                </>
    )
}

export default sidebarItem

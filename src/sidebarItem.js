import React from 'react'
import './scss/main.css'
import {
  Link
} from "react-router-dom";


// Code that dynamically displays all the sidebar items

const SidebarItem = (props) => {
    return (
        <>  
                <li><Link to={props.link}>{props.name}</Link></li>
                </>
    )
}

export default SidebarItem

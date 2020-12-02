import React from 'react';
import './scss/main.css';

const welcome = (props) => {
    return (
        <header className="welcome-header">
        <h1>{props.name}</h1>
        <h4>{props.description}</h4>
      </header>
    )
}

export default welcome

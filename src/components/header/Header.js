import React, { Component } from 'react';


export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      <header className="main-header">
        <div className="logo">
            <a href="index.html">Elevate</a>
        </div> 
        <a className="menu-toggle" href="#">
            <span>Menu</span>
        </a>   	
      </header>
    
      </React.Fragment>
    );
  }
}

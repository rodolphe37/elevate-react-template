import React, { Component } from 'react';


export default class Intro extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="intro">
      {/* <div class="shadow-overlay"></div> */}
      <div className="row intro-content">
        <div className="col-twelve">
          <h3 className="animate-intro">Introducing Elevate</h3>
          <h1 className="animate-intro">
            The perfect template to
            present your awesome product.
          </h1>	
          <div className="buttons">
            <a className="button stroke smoothscroll animate-intro" href="#features" title>Features</a>
            <a className="button stroke smoothscroll animate-intro" href="#download" title>Download</a>
          </div>					
          <img src="images/app-screenshot-big.jpg" alt="" className="animate-intro" />   			
        </div> {/* /twelve */} 		   			
      </div> {/* /row */}   
    </section>    
      </React.Fragment>
    );
  }
}
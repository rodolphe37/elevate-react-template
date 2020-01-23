import React, { Component } from 'react';


export default class Subscribe extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="subscribe">
      <div className="row subscribe-content">
        <div className="col-twelve">
          <h2 className="h01 animate-this">Stay upto date, join our newsletter</h2>
          <form id="mc-form" className="group" noValidate="true" autoComplete="off">
            <div className="row">
              <div className="col-eight tab-full left animate-this" data-animate="fadeInLeft">					
                <input type="email" defaultValue name="EMAIL" className="email" id="mce-EMAIL" placeholder="Enter Your Email" required />			   				
              </div>
              <div className="col-four tab-full right animate-this" data-animate="fadeInRight">
                <input type="submit" defaultValue="Get Notified" name="subscribe" className="button large" />
              </div>				   		
            </div> {/* /row */}	
            <label htmlFor="mce-EMAIL" className="subscribe-message" />					
          </form>
        </div>
      </div>
    </section>
      </React.Fragment>
    );
  }
}
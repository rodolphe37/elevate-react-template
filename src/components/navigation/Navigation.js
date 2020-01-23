import React, { Component } from 'react';


export default class Navigation extends Component {
  render() {
    return (
      <React.Fragment>
      <nav id="menu-nav-wrap">
      <h3>Navigation</h3>   	
      <ul className="nav-list">
        <li><a className="smoothscroll" href="#intro" title>Home</a></li>
        <li><a className="smoothscroll" href="#features" title>Features</a></li>
        <li><a className="smoothscroll" href="#infos" title>Product Info</a></li>
        <li><a className="smoothscroll" href="#stats" title>Stats</a></li>
        <li><a className="smoothscroll" href="#pricing" title>Pricing</a></li>					
        <li><a className="smoothscroll" href="#testimonials" title>Testimonials</a></li>	
        <li><a className="smoothscroll" href="#download" title>Download</a></li>	
        <li><a className="smoothscroll" href="#subscribe" title>Newsletter</a></li>			
      </ul>
      <h3>We Recommend Dreamhost</h3>  
      <p className="sponsor-text">
        Looking for an awesome and reliable webhosting? Try <a href="http://www.dreamhost.com/r.cgi?287326|STYLESHOUT">DreamHost</a>.
        Get <span>$50 off</span> when you sign up with the promocode <span>styleshout</span>. 
        {/* Simply type	the promocode in the box labeled “Promo Code” when placing your order. */}
      </p>
      <div className="action">
        <a className="button" href="http://www.dreamhost.com/r.cgi?287326|STYLESHOUT">Sign Up Now</a>
      </div>
    </nav>
      </React.Fragment>
    );
  }
}
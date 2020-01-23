import React, { Component } from 'react';


export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
      <div>
      <footer id="main-footer">
        <div className="footer-social-wrap">  
          <div className="row">
            <ul className="footer-social-list">
              <li><a href="#">
                  <i className="fa fa-facebook-square" />
                </a></li>
              <li><a href="#">
                  <i className="fa fa-twitter" />
                </a></li>
              <li><a href="#">
                  <i className="fa fa-google-plus" />
                </a></li>
              <li><a href="#">
                  <i className="fa fa-pinterest" />
                </a></li>
              <li><a href="#">
                  <i className="fa fa-instagram" />
                </a></li>
              <li><a href="#">
                  <i className="fa fa-dribbble" />
                </a></li>
            </ul>
          </div> 
        </div> {/* /footer-social-wrap */}
        <div className="footer-info-wrap">
          <div className="row footer-info">
            <div className="col-four tab-full">
              <h4><i className="icon-location-map-1" /> Where to Find Us</h4>
              <p>
                1600 Amphitheatre Parkway<br />
                Mountain View, CA<br />
                94043 US
              </p>
            </div>
            <div className="col-four tab-full collapse">
              <h4><i className="icon-phone-incoming" /> Get In Touch</h4>
              <p>someone@elevatewebsite.com<br />
                info@elevatewebsite.com <br />
                Phone: (+63) 555 1212			     
              </p>
            </div>
            <div className="col-four tab-full">
              <h4><i className="icon-organization-hierarchy-3" /> Company Links</h4>
              <ul className="footer-link-list">
                <li><a href="#">Company Journal</a></li>
                <li><a href="#">Product Support</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div> {/* /footer-info-wrap */}
        <div className="footer-bottom"> 
          <div className="copyright">
            <span>© Copyright 2020.</span> 
            <span>Design by <a href="https://github.com/rodolphe37?tab=repositories">Rodolphe Augusto</a></span>	         	
          </div>  		
        </div>
      </footer>   
      <div id="go-top">
        <a className="smoothscroll" title="Back to Top" href="#top"><i className="fa fa-long-arrow-up" /></a>
      </div>
    </div>
      </React.Fragment>
    );
  }
}
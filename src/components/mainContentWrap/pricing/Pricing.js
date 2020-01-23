import React, { Component } from 'react';


export default class Pricing extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="pricing">
      <div className="row section-intro animate-this">
        <div className="col-twelve with-bottom-line">
          <h2>Plans and Pricing.</h2>
          <p className="lead">Lorem ipsum Tempor do Excepteur nulla aute deserunt reprehenderit aute commodo aliquip laboris velit eu esse exercitation ex fugiat pariatur aute consequat. Lorem ipsum Fugiat mollit quis qui. Lorem ipsum Duis Excepteur Duis magna fugiat incididunt qui id quis dolor nisi irure proident labore ut in incididunt eiusmod est anim.</p>
        </div>   		
      </div>
      <div className="row pricing-content">
        <div className="pricing-tables block-1-3  group">
          <div className="bgrid animate-this"> 
            <div className="price-block">
              <div className="top-part">
                <h3 className="plan-title">Starter</h3>
                <p className="plan-price"><sup>$</sup>4.99</p>
                <p className="price-month">Per month</p>		             
              </div>                
              <div className="bottom-part">
                <ul className="features">
                  <li><strong>3GB</strong> Storage</li>
                  <li><strong>10GB</strong> Bandwidth</li>		                  
                  <li><strong>5</strong> Databases</li>		                  
                  <li><strong>30</strong> Email Accounts</li>
                </ul>
                <a className="button large" href>Get Started</a>
              </div>
            </div>           	
          </div> {/* /bgrid */}
          <div className="bgrid animate-this">
            <div className="price-block primary" data-info="popular">
              <div className="top-part">
                <h3 className="plan-title">Standard</h3>
                <p className="plan-price"><sup>$</sup>9.99</p>
                <p className="price-month">Per month</p>							
              </div>               
              <div className="bottom-part">
                <ul className="features">
                  <li><strong>5GB</strong> Storage</li>
                  <li><strong>15GB</strong> Bandwidth</li>		                  
                  <li><strong>7</strong> Databases</li>		                  
                  <li><strong>40</strong> Email Accounts</li>
                </ul>
                <a className="button large" href>Get Started</a>
              </div>
            </div>            	                 
          </div> {/* /bgrid */}
          <div className="bgrid animate-this">               
            <div className="price-block">
              <div className="top-part">
                <h3 className="plan-title">Premium</h3>
                <p className="plan-price"><sup>$</sup>29.99</p>
                <p className="price-month">Per month</p>	                		               
              </div> 
              <div className="bottom-part">
                <ul className="features">
                  <li><strong>10GB</strong> Storage</li>
                  <li><strong>30GB</strong> Bandwidth</li>		                  
                  <li><strong>15</strong> Databases</li>		                  
                  <li><strong>60</strong> Email Accounts</li>
                </ul>
                <a className="button large" href>Get Started</a>
              </div>	            		                
            </div>                              
          </div> {/* /bgrid */}		           
        </div> {/* /pricing-tables */} 
      </div> {/* /pricing-content */} 
    </section>
      </React.Fragment>
    );
  }
}
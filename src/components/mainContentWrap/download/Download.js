import React, { Component } from 'react';


export default class Download extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="download">
      <div className="overlay" />
      <div className="row download-content">
        <div className="col-twelve">
          <div className="text-part">
            <h2 className="animate-this">Download Elevate Now.</h2>
            <p className="lead animate-this">Lorem ipsum Tempor do Excepteur nulla aute deserunt reprehenderit aute commodo aliquip laboris velit eu esse exercitation ex fugiat pariatur aute consequat. Lorem ipsum Fugiat mollit quis qui. Lorem ipsum Duis Excepteur Duis magna fugiat incididunt qui id quis dolor nisi irure proident labore ut in incididunt eiusmod est anim.</p>
          </div>   			
          <a className="button large animate-this" href="#">                               
            Download Elevate
          </a>  			
        </div>
      </div>
    </section>
      </React.Fragment>
    );
  }
}
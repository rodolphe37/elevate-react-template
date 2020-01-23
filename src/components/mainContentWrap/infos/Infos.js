import React, { Component } from 'react';


export default class Infos extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="infos">
      <div className="info-entry">
        <div className="half-grey" />
        <div className="row info-entry-content">
          <div className="media-wrap">
            <div className="media animate-this" data-animate="fadeInRight">
              <img src="images/app-screenshot-small.jpg" alt="" />
            </div>   				      				
          </div>
          <div className="col-six text-part">   				
            <h5 className="animate-this" data-animate="fadeInLeft">Some Cool Stuff</h5>
            <h2 className="animate-this" data-animate="fadeInLeft">Clean and Organized Code</h2>
            <p className="animate-this" data-animate="fadeInLeft">Lorem ipsum Sunt adipisicing adipisicing esse exercitation consequat sed irure commodo cupidatat aute ea adipisicing consectetur nulla consequat irure consectetur veniam sit sit qui reprehenderit officia sunt nulla elit nisi proident.</p>
            <a href="#" className="button animate-this" data-animate="fadeInLeft">Learn More</a>
          </div>   				
        </div> {/* /info-entry-content */}
      </div> {/* /info-entry */}
      <div className="info-entry">
        <div className="half-grey" />
        <div className="row info-entry-content">
          <div className="media-wrap">
            <div className="media animate-this" data-animate="fadeInLeft">
              <div className="fluid-video-wrapper">
                <iframe src="http://player.vimeo.com/video/14592941?title=0&byline=0&portrait=0&color=F64B39" width={500} height={281} frameBorder={0} webkitallowfullscreen mozallowfullscreen allowFullScreen /> 
              </div>
            </div>   				
          </div>
          <div className="col-six text-part">   				
            <h5 className="animate-this" data-animate="fadeInRight">Video Stuff</h5>
            <h2 className="animate-this" data-animate="fadeInRight">Your Super Cool Video</h2>
            <p className="animate-this" data-animate="fadeInRight">Lorem ipsum Sunt adipisicing adipisicing esse exercitation consequat sed irure commodo cupidatat aute ea adipisicing consectetur nulla consequat irure consectetur veniam sit sit qui reprehenderit officia sunt nulla elit nisi proident.</p>
            <a href="#" className="button animate-this" data-animate="fadeInRight">Learn More</a>
          </div>
        </div> {/* /info-entry-content */}
      </div> {/* /info-entry */}
    </section>   
      </React.Fragment>
    );
  }
}
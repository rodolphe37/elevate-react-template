import React, { Component } from 'react';


export default class Stats extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="stats" className="count-up">
      <div className="row">
        <div className="col-twelve">
          <div className="block-1-6 block-s-1-3 block-tab-1-2 block-mob-full stats-list">
            <div className="bgrid stat">
              <div className="icon-part">
                <i className="icon-pencil-ruler" />
              </div>
              <h3 className="stat-count">110</h3>
              <h5 className="stat-title">
                Awesome Projects
              </h5>
            </div> {/* /stat */}					
            <div className="bgrid stat">
              <div className="icon-part">
                <i className="icon-location-user" />
              </div>
              <h3 className="stat-count">9050</h3>
              <h5 className="stat-title">
                Clients Served
              </h5>
            </div> {/* /stat */}
            <div className="bgrid stat">
              <div className="icon-part">
                <i className="icon-rewards-medal-1" />
              </div>
              <h3 className="stat-count">210</h3>
              <h5 className="stat-title">
                Awards Received
              </h5>
            </div> {/* /stat */}									
            <div className="bgrid stat">
              <div className="icon-part">
                <i className="icon-alien" />
              </div>
              <h3 className="stat-count">123</h3>
              <h5 className="stat-title">
                Crazy Ideas
              </h5>
            </div> {/* /stat */}
            <div className="bgrid stat">
              <div className="icon-part">
                <i className="icon-coffee-mug" />
              </div>
              <h3 className="stat-count">1500</h3>
              <h5 className="stat-title">
                Coffee Cups
              </h5>
            </div> {/* /stat */}
            <div className="bgrid stat">
              <div className="icon-part">
                <i className="icon-hourglass" />
              </div>
              <h3 className="stat-count">7200</h3>
              <h5 className="stat-title">
                Hours
              </h5>
            </div> {/* /stat */}
          </div> {/* /stats-list */}
        </div> {/* /twelve */}
      </div> {/* /row */}
    </section>
      </React.Fragment>
    );
  }
}
import React, { Component } from 'react';
import Subscribe from './subscribe/Subscribe';
import Download from './download/Download'
import Testimonials from './testimonials/Testimonials';
import Pricing from './pricing/Pricing';
import Stats from './stats/Stats';
import Infos from './infos/Infos';
import Features from './features/Features';
import Intro from './intro/Intro';

export default class MainContentWrap extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="main-content-wrap">
        <Intro />
        <Features />
        <Infos />
        <Stats />
        <Pricing />
        <Testimonials />
        <Download />
        <Subscribe />
        </div>
      </React.Fragment>
    );
  }
}
import React, { Component } from 'react';


export default class Testimonials extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="testimonials">
      <div className="row testimonial-content">
        <div className="col-twelve">
          <h2 className="h01 animate-this">
            Hear What Our Customers Say.
          </h2>
          <div id="testimonial-slider" className="flexslider animate-this">
            <ul className="slides">	
              <li>
                <p>“Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.”</p>
                <p className="author-info">— Steve Jobs</p>
              </li>						
              <li>
                <p>“Good design is as little design as possible. Less, but better - because it concentrates on the essential aspects, and the products are not burdened with non-essentials. Back to purity, back to simplicity..”</p>
                <p className="author-info">— Dieter Rams</p>
              </li>						
              <li>
                <p>“A fundamental part of that is making mistakes together. There's no learning without trying lots of ideas and failing lots of times.”</p>
                <p className="author-info">— Jony Ive</p>
              </li>
            </ul>
          </div>
          <div className="flexslider-controls animate-this">
            <ul className="flex-control-nav">
              <li><img src="images/customer01.jpg" alt="" /></li>
              <li><img src="images/customer02.jpg" alt="" /></li>
              <li><img src="images/customer03.jpg" alt="" /></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
      </React.Fragment>
    );
  }
}
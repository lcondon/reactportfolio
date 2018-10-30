import React, { Component } from 'react';
import * as Scroll from 'react-scroll';

let Link = Scroll.Link;

class MastHead extends Component {
  render() {
    return (
      <header className="masthead">
        <div className="container">
          <div className="intro-text">
            <div className="intro-lead-in">Welcome To My Portfolio!</div>
            <div className="intro-heading text-uppercase">
              It's Nice To Meet You
            </div>
            <Link
              to="portfolio"
              smooth={true}
              duration={1500}
              className="btn btn-primary btn-xl text-uppercase js-scroll-trigger">
              Tell Me More
            </Link>
          </div>
        </div>
      </header>
    );
  }
}

export default MastHead;

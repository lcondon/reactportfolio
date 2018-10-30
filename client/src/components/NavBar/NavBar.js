import React, { Component } from 'react';
import * as Scroll from 'react-scroll';

let Link = Scroll.Link;

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.shrink ? (
          <nav
            className="navbar navbar-expand-lg navbar-shrink navbar-dark fixed-top"
            id="mainNav">
            <div className="container">
              <a className="navbar-brand js-scroll-trigger" href="#page-top">
                Lucas Condon
              </a>

              <button
                className="navbar-toggler navbar-toggler-right"
                type="button"
                data-toggle="collapse"
                data-target="#navbarResponsive"
                aria-controls="navbarResponsive"
                aria-expanded="false"
                aria-label="Toggle navigation">
                Menu
                <i className="fa fa-bars" />
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav text-uppercase ml-auto">
                  <li className="nav-item">
                    <Link
                      to="portfolio"
                      smooth={true}
                      className="nav-link"
                      duration={1500}
                      href="#">
                      Portfolio
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="about"
                      smooth={true}
                      className="nav-link"
                      duration={1500}
                      href="#">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="contact"
                      smooth={true}
                      className="nav-link"
                      duration={1500}
                      href="#">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        ) : (
          <nav
            className="navbar navbar-expand-lg navbar-dark fixed-top"
            id="mainNav">
            <div className="container">
              <a className="navbar-brand js-scroll-trigger" href="#page-top">
                Lucas Condon
              </a>

              <button
                className="navbar-toggler navbar-toggler-right"
                type="button"
                data-toggle="collapse"
                data-target="#navbarResponsive"
                aria-controls="navbarResponsive"
                aria-expanded="false"
                aria-label="Toggle navigation">
                Menu
                <i className="fa fa-bars" />
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav text-uppercase ml-auto">
                  <li className="nav-item">
                    <Link
                      to="portfolio"
                      smooth={true}
                      className="nav-link"
                      duration={1500}
                      href="#">
                      Portfolio
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="about"
                      smooth={true}
                      className="nav-link"
                      duration={1500}
                      href="#">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="contact"
                      smooth={true}
                      className="nav-link"
                      duration={1500}
                      href="#">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        )}
      </React.Fragment>
    );
  }
}

export default NavBar;

import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div name="about">
        <section className="bg-light" id="team">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">
                  More About Me
                </h2>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-sm-4">
                <div className="team-member">
                  <img
                    className="mx-auto rounded-circle"
                    src="./images/team/2.jpg"
                    alt=""
                  />
                  <h4>Lucas Condon</h4>
                  <p className="text-muted">Full-Stack Web Developer</p>
                  <ul className="list-inline social-buttons">
                    <li className="list-inline-item">
                      <a
                        href="https://www.linkedin.com/in/lucas-condon-5192b3145/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="https://github.com/lcondon"
                        target="_blank"
                        rel="noopener noreferrer">
                        <i className="fa fa-github" aria-hidden="true" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <p className="large text-muted">
                  Full-stack Web Developer with development experience using
                  JavaScript, HTML, and CSS on the Front end, and Node.js on the
                  Back end. Excels at finding creative solutions to complex
                  problems. Driven to be continuously learning and exploring new
                  technologies. Focused on high quality and customer driven
                  output.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default About;

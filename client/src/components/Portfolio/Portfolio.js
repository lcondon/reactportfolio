import React, { Component } from 'react';

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)

class Portfolio extends Component {
  render() {
    return (
      <div name="portfolio">
        <section className="bg-light" id="portfolio">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Portfolio</h2>
              </div>
            </div>
            <div className="row">
              {this.props.projects.map((project, index) => (
                <div
                  key={project.title}
                  className="col-md-4 col-sm-6 portfolio-item"
                  onClick={ev => {
                    this.props.openModal(`${index}`);
                  }}>
                  <a
                    className="portfolio-link"
                    href="#"
                    //   data-toggle="modal"
                  >
                    <div className="portfolio-hover">
                      <div className="portfolio-hover-content">
                        <i className="fa fa-plus fa-3x" />
                      </div>
                    </div>
                    <img className="img-fluid" src={project.imageLink} alt="" />
                  </a>
                  <div className="portfolio-caption">
                    <h4>{project.title}</h4>
                    <p className="text-muted">{project.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Portfolio;

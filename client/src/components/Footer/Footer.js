import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <span className="copyright">
                Copyright &copy; Lucas Condon 2018
              </span>
            </div>
            <div className="col-md-4" />
            <div className="col-md-4">
              <ul className="list-inline quicklinks">
                <li className="list-inline-item">
                  <a href="#" rel="noopener noreferrer">
                    Privacy Policy
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" rel="noopener noreferrer">
                    Terms of Use
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

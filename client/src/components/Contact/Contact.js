import React, { Component } from 'react';

class Contact extends Component {
  state = {
    message: '',
    subject: 'Re: Lucas Condon'
  };

  sendMessage = event => {
    event.preventDefault();

    window.location = `mailto:lcondon@bennington.edu?subject=${
      this.state.subject
    }&body=${this.state.message}`;
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div name="contact">
        <section id="contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Contact Me</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <form id="contactForm">
                  <div className="row justify-content-center">
                    <div className="col-md-8">
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          id="message"
                          type="text"
                          placeholder="Your Message"
                          onChange={ev => {
                            this.handleChange(ev);
                          }}
                        />
                      </div>
                    </div>
                    <div className="clearfix" />
                    <div className="col-lg-12 text-center">
                      <div id="success" />
                      <button
                        id="sendMessageButton"
                        onClick={ev => this.sendMessage(ev)}
                        className="btn btn-primary btn-xl text-uppercase"
                        type="submit">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;

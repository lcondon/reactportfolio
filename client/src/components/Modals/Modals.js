import React from 'react';
import AriaModal from 'react-aria-modal';

const Modals = props => {
  const modal = props.modalIsOpen ? (
    <AriaModal
      titleText="demo one"
      onExit={ev => {
        props.closeModal();
      }}
      getApplicationNode={props.getApplicationNode}
      underlayStyle={{ paddingTop: '2em' }}>
      <div
        className="modal-dialog"
        style={{
          border: 'none',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          textAlign: 'center'
        }}>
        <div className="modal-content">
          <div className="close-modal">
            <div className="lr">
              <div className="rl" />
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto p-0">
                <div className="modal-body">
                  <h2 className="text-uppercase">{props.project.subtitle}</h2>
                  <img
                    className="img-fluid d-block mx-auto"
                    src={props.project.imageLink}
                    alt=""
                  />
                  <p>{props.project.description}</p>
                  <ul className="list-inline">
                    <li>
                      <a
                        href={props.project.liveSite}
                        target="_blank"
                        rel="noopener noreferrer">
                        Live Website
                      </a>
                    </li>
                    <li>
                      <a
                        href={props.project.gitRepo}
                        target="_blank"
                        rel="noopener noreferrer">
                        Github Repository
                      </a>
                    </li>
                  </ul>
                  <button
                    className="btn btn-primary"
                    // data-dismiss="modal"
                    type="button"
                    onClick={ev => {
                      props.closeModal();
                    }}>
                    <i className="fa fa-times" />
                    Close Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AriaModal>
  ) : (
    false
  );
  return <React.Fragment>{modal}</React.Fragment>;
};

export default Modals;

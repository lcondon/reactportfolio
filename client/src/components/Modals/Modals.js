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
      <button
        className="btn btn-primary"
        style={{ float: 'right', marginBottom: 5 }}
        type="button"
        onClick={ev => {
          props.closeModal();
        }}>
        <i className="fa fa-times" />
      </button>
      <div
        className="modal-dialog"
        style={{
          border: 'none',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          textAlign: 'center'
        }}>
        <div className="modal-content">
          <div className="container">
            <div className="modal-body" style={{ width: '100%' }}>
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

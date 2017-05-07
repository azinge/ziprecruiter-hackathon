import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router';
import '../styles/ViewChallenges.css';

export default class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  openModal() {
    this.setState({ showModal: true });
  }

  render() {
    let { showModal } = this.state;
    let customStyles = {};

    return (
      <div className="card" style={{"margin":"25px"}}>
        <div className="challenge">
          <h5>Challenge #1</h5>
          <div className="side-scroll">
            <div className="card item">Hello!</div>
            <div className="card item">Hello!</div>
            <div className="card item">Hello!</div>
            <div className="card item">Hello!</div>
            <div className="card item">Hello!</div>
            <div className="card item">Hello!</div>
          </div>
        </div>
        <div className="challenge">
          <h5>Challenge #2</h5>
          <div className="side-scroll">
            <div className="card item">Hello!</div>
            <div className="card item">Hello!</div>
            <div className="card item">Hello!</div>
            <div className="card item">Hello!</div>
            <div className="card item">Hello!</div>
            <div className="card item">Hello!</div>
          </div>
        </div>
        <div className="challenge">
          <h5>Challenge #3</h5>
          <div className="side-scroll">
            <div className="card item">Hello!</div>
            <div className="card item">Hello!</div>
            <div className="card item">Hello!</div>
            <div className="card item">Hello!</div>
            <div className="card item" onClick={this.openModal.bind(this)}>Hello!</div>
            <div className="card item">Hello!</div>
          </div>
        </div>
        <div className="challenge">
          {showModal ? (<div></div>) : (<Link to='/newchallenge' className="waves-effect waves-light btn-large new-challenge">Create new Challenge</Link>)}
        </div>
        <Modal
          isOpen={showModal}
          style={customStyles}
          contentLabel="Congratulations!"
        >
              <div className="container">
                  <div className="row">
                    <div className="col s6 center">
                        <Link to='/user' className="waves-effect waves-light btn-large new-challenge">Accept User's Submission</Link>
                    </div>
                    <div className="col s6 center">
                        <Link to='/user' className="waves-effect waves-light btn-large new-challenge red">Decline User's Submission</Link>
                    </div>
                  </div>
              </div>
        </Modal>
      </div>
    );
  }
}

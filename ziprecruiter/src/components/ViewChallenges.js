import React from 'react';
import '../styles/ViewChallenges.css';

export default class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {


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
        <div className="challenge"><h5>Challenge #2</h5>
          <div className="side-scroll">
            <div className="card item">Hello!</div>
            <div className="card item">Hello!</div>
            <div className="card item">Hello!</div>
            <div className="card item">Hello!</div>
            <div className="card item">Hello!</div>
            <div className="card item">Hello!</div>
          </div></div>
        <div className="challenge">
          <a className="waves-effect waves-light btn-large new-challenge">Create new Challenge</a>
        </div>
      </div>
    );
  }
}

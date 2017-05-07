import React from 'react';
import { Link } from 'react-router';
import '../styles/NewChallenge.css';

export default class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      challengeName: "",
      challengeDescription: "",
      submissionInstructions: "",
      totalReward: "",
      timeLimit: "",
      tags: "",
      files: (<a>Select Files</a>)
    };
  }

  populateFields() {
    setTimeout(() => {
      this.setState({
        challengeName: "Visualize Data from the Bureau of Labor Statistics",
        challengeDescription: "Create a Webpage using HTML, Javascript, and CSS Visualizing some form of interesting job statistics from the last year from the given data. Make the webpage interactive and display your data dynamically using React.",
        submissionInstructions: "Submit a link to a github repo showing the finalized site.",
        totalReward: "$1000 USD",
        timeLimit: "1 week",
        tags: "HTML, Javascript, CSS, React",
        files: (<div>Bureau of Labor Statistics Reference.json (256 MB)</div>)
      });
    }, 4000);
  }

  render() {
    let { challengeName, challengeDescription, submissionInstructions, totalReward, timeLimit, tags, files } = this.state;
    this.populateFields();
    return (
      <div>
        THIS IS THE USER PAGE
      </div>
    );
  }
}

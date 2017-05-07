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
        tagline: "Can you use React make goverment data look better?",
        files: (<div>Bureau of Labor Statistics Reference.json (256 MB)</div>)
      });
    }, 4000);
  }

  render() {
    let { challengeName, challengeDescription, submissionInstructions, totalReward, timeLimit, tags, files, tagline } = this.state;
    this.populateFields();
    return (
      <div>
        <form className="container">
          <div className="row">
              <div className="col s12">
                <h4>Create a New Challenge</h4>
                <hr/>
              </div>
              <div className="col s12">
                <label>Challenge Name</label>
                <input value={challengeName}  placeholder="Solve FizzBuzz" type="text" />
              </div>
              <div className="col s12">
                <label>Tagline</label>
                <input value={tagline}  placeholder="One line description" type="text" />
              </div>
              <div className="col s12">
                <label>Challenge Description</label>
                <textArea value={challengeDescription} placeholder="Challenge Description" className="code-form-input"></textArea>
              </div>
              <div className="col s12">
                <label>Submission Instructions</label>
                <textArea value={submissionInstructions} placeholder="Submission Instructions" className="code-form-input"></textArea>
              </div>
              <div className="col s12">
                <label>Time Limit</label>
                <input value={tags} placeholder="Java, Python, C++ ..." type="text" />
              </div>
              <div className="col s6">
                <label>Total Reward</label>
                <input value={totalReward} placeholder="500$" type="text" />
              </div>
              <div className="col s6">
                <label>Time Limit</label>
                <input value={timeLimit} placeholder="1 week" type="text" />
              </div>
          </div>
          <div className="left">{files}</div>
          <Link to="/challengelanding" className="btn right">Submit Challenge</Link>
          <br/><br/>
        </form>
      </div>
    );
  }
}

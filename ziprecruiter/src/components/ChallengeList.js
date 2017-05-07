import React from 'react';

export default class ChallengeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	challengeArray: [],
    }
  }

  render() {
  	let { challengeArray } = this.state
    return (
      <div className="container">
      	<div className="row">
      		<div className="col s12">
				<div className="row">
					<div className="col s4">
						<h3>Challenge Title</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At numquam commodi esse, maxime quasi! Laborum eos enim, vel assumenda hic omnis quas, deserunt quibusdam commodi ut nulla, ab consequatur voluptatum!</p>
					</div>
				</div>
      		</div>
      	</div>
      </div>
    );
  }
}

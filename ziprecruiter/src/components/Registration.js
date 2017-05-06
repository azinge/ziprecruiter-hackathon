import React from 'react';

export default class Registration extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
      	<div className="row">
			<div className="col s12">
				<h4>Turn your job search into a Hackathon</h4>
			</div>
      	</div>
      </div>
    );
  }
}

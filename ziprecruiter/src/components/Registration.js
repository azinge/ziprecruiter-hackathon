import React from 'react';
import '../styles/Registration.scss';
export default class Registration extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
    	showCodeTest: false,
    	codeText: '',
    	fizzCode: ''
    }
  }

  showCodeTest() {
  	let { showCodeTest } = this.state
  	this.setState({
  		showCodeTest: !showCodeTest,
  		
  	});
  	setTimeout(() => {
  	  this.setState({
  	  fizzCode: `let n = 0;
  	  	while (n++ < 100) {
  	  	  console.log(
  	  	    n % 15 === 0 ? 'FizzBuzz' :
  	  	    n % 5 === 0 ? 'Buzz' :
  	  	    n % 3 === 0 ? 'Fizz' :
  	  	    n
  	  	  )
  	  	}`,
  	  });
  	}, 3000);
  }
  sumbitForm() {
  	console.log("Submitted")
  }
  updateCode(e) {
	this.setState({
		codeText: e.target.value 
	});
  }
  render() {
  	let { showCodeTest, codeText, fizzCode } = this.state
  	
    return (
      <div className="container">
      	<div className={showCodeTest ? 'hide' : ''}>
			<div className="col s12 center">
				<h4>Turn your job search into a Hackathon</h4>
				<a onClick={this.showCodeTest.bind(this)} className="btn">
					Register Now
				</a>
			</div>
      	</div>
      	<div className={!showCodeTest ? 'hide' : ''}>
      		<div className="col s12">
      			<h4>Create a FizzBuzz program</h4>
				<form onSubmit={this.sumbitForm.bind(this)}>
					<textArea
						placeholder="Write your code here"
						onChange={this.updateCode.bind(this)}
						className="code-form-input blue darken-4"
						value={fizzCode}
					>
						
					</textArea>
					<input type="submit" className="btn right" value="Complete Test" />
				</form>
      		</div>
      	</div>

      </div>
    );
  }
}

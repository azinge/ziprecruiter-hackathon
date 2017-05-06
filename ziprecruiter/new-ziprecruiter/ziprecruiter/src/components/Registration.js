import React from 'react';
import '../styles/Registration.css';
export default class Registration extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };
  constructor(props) {
    super(props);
    this.state = {
      showCodeTest: false,
      codeText: '',
      firstName: '',
      lastName: '',
      fizzCode: '',
      userLocation: '',
      bitcoinAddress: '',
    }
  }

  showCodeTest() {
    let { showCodeTest } = this.state
    this.setState({
      showCodeTest: !showCodeTest
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
    }, 9000);
  }
  sumbitForm(e) {
    e.preventDefault
    this.setState({
      loading: true 
    });
    setTimeout(() => {
    this.setState({
      loading: false 
    });
  }, 3000); 
  }
  updateCode(e) {
  this.setState({
    codeText: e.target.value 
  });
  }
  updateFirstName(e) {
  this.setState({
    firstName: e.target.value 
  });
  }
  updateLastName(e) {
  this.setState({
    lastName: e.target.value 
  });
  }
  updateLocation(e) {
    this.setState({
      userLocation: e.target.value 
    });
  }
  updateBitcoinAddress(e) {
    this.setState({
      bitcoinAddress: e.target.value 
    });
  }
  render() {
    let { showCodeTest, codeText, fizzCode, firstName, lastName, loading, userLocation, bitcoinAddress } = this.state
    
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
        <div className={showCodeTest ? 'hide' : ''}>
          <div className="col s12">
        <form onSubmit={this.sumbitForm.bind(this)}>
          <div className="row">
              <div className="col s6">
                <input value={firstName} onChange={this.updateFirstName.bind(this)} placeholder="First Name" type="text" />
              </div>
              <div className="col s6">
                <input value={lastName} onChange={this.updateLastName.bind(this)} placeholder="Last Name" type="text" />
              </div>
              <div className="col s6">
                <input value={userLocation} onChange={this.updateLocation.bind(this)} placeholder="What city are you in?" type="text" />
              </div>
              <div className="col s6">
                <input value={bitcoinAddress} className="bitcoin-input" onChange={this.updateBitcoinAddress.bind(this)} placeholder="Bitcoin Address" type="text" />
                <div className="switch charity-switch">
                    <label>
                      <input type="checkbox" />
                      <span className="lever"></span>
                      Donate to my prize charity
                    </label>
                  </div>
              </div>
              <div className="col s12">
                <h4 className="headline">Create a FizzBuzz program</h4>
                <ul>
                  <li><span className="new badge">4</span></li>
                  <li><span className="new badge">4</span></li>
                  <li><span className="new badge">4</span></li>
                  <li><span className="new badge">4</span></li>
                  <li><span className="new badge">4</span></li>
                </ul>
                <textArea
                  placeholder="Write your code here"
                  onChange={this.updateCode.bind(this)}
                  className="code-form-input blue darken-4"
                  value={fizzCode}
                >
                </textArea>
              </div>
          </div>
          <input type="submit" className="btn right" value="Complete Test" />
        </form>
        { loading ? 'Loading...' : '' }
          </div>
        </div>

      </div>
    );
  }
}

import React from 'react';
import '../styles/Registration.css';
import Modal from 'react-modal'
export default class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCodeTest: false,
      codeText: '',
      firstName: '',
      lastName: '',
      fizzCode: '',
      userLocation: '',
      completeForm: false,
      showModal: false,
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
    e.preventDefault()
    this.setState({
      loading: true
    });
    setTimeout(() => {
    this.setState({
      loading: false,
      completeForm: true,
      showModal: true,
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
    let { showCodeTest, codeText, fizzCode, firstName, lastName, loading, userLocation, completeForm, bitcoinAddress, showModal } = this.state
    let loadingIndicator
    if(loading) {
      loadingIndicator = <div className="row">
          <div className="col s12 center">
          <div className="preloader-wrapper big active">
              <div className="spinner-layer spinner-blue-only">
                <div className="circle-clipper left">
                  <div className="circle"></div>
                </div><div className="gap-patch">
                  <div className="circle"></div>
                </div><div className="circle-clipper right">
                  <div className="circle"></div>
                </div>
              </div>
            </div>
          </div>
      </div>
    }
    const customStyles = {
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
      }
    };
    return (
      <div style={!showCodeTest ? { background: '#71af05', paddingBottom: '75px' } : {}}>
        <div className={showCodeTest ? 'hide' : ''}>
          <div className="row">
          <div className="col s12 center">
            <h4 className="white-text" style={{ paddingTop: '75px', marginTop: '0', marginBottom: '20px' }}>Turn your job search into a Hackathon</h4>
            <a onClick={this.showCodeTest.bind(this)} className="btn white green-text">
              Register Now
            </a>
        </div>
      </div>
        </div>
        <div className={!showCodeTest ? 'hide' : 'container'}>
          <div className="row">
              <div className="col s12">
                <h4>Register</h4>
                <hr/>
                <form onSubmit={this.sumbitForm.bind(this)}>
                  <div className="row">
                      <div className="col s6">
                        <label>First Name</label>
                        <input value={firstName} onChange={this.updateFirstName.bind(this)} placeholder="Ada" type="text" />
                      </div>
                      <div className="col s6">
                        <label>Last Name</label>
                        <input value={lastName} onChange={this.updateLastName.bind(this)} placeholder="Lovelace" type="text" />
                      </div>
                      <div className="col s6">
                        <label>Location</label>
                        <input value={userLocation} onChange={this.updateLocation.bind(this)} placeholder="What city are you in?" type="text" />
                      </div>
                      <div className="col s6">
                        <label>Bitcoin Address</label>
                        <input value={bitcoinAddress} className="bitcoin-input" onChange={this.updateBitcoinAddress.bind(this)} placeholder="1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa" type="text" />
                        <div className="switch charity-switch">
                            <label>
                              <input type="checkbox" />
                              <span className="lever"></span>
                              Donate to my prize charity
                            </label>
                          </div>
                      </div>
                      <div className="col s12">
                        <h5 className="headline">Create a FizzBuzz program</h5>
                        <hr/>
                        <div>Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.</div>
                        <ul>
                          <li><span className="badge">Python</span></li>
                          <li><span className="badge">C++</span></li>
                          <li><span className="badge">PHP</span></li>
                          <li><span className="badge">Java</span></li>
                          <li><span className="badge">Perl</span></li>
                          <li><span className="badge" style={{fontWeight: '300', fontSize: '0.8rem', color: 'white', background: '#26a69a', borderRadius: '2px'}}>JS</span></li>
                        </ul>
                        <br/><br/>
                        <textArea
                          placeholder="Write your code here"
                          onChange={this.updateCode.bind(this)}
                          className="code-form-input blue darken-4"
                          value={fizzCode}
                        >
                        </textArea>
                      </div>
                  </div>
                  {loadingIndicator}
                  <input type="submit" className={loading || completeForm ? "hide" : "btn right"} value="Complete Test" />
                  <br/><br/>
                  <Modal
                    isOpen={showModal}
                    style={customStyles}
                    contentLabel="Congratulations!"
                  >
                        <div className="container">
                            <div className="row">
                              <div className="col s12 center">
                                  <h1>Congratulations!</h1>
                                  <img src='https://s3-us-west-2.amazonaws.com/ziprecruiter-hackathon/javascriptBadge.png' width="200" />
                                  <h5><a href="http://www.blockchain.info" target="_blank">You've earned $1.00</a> and a new Javascript badge for passing the FizzBuzz challenge. <br/> <br/>We will send you new challenges from our partners soon!</h5>
                              </div>
                            </div>
                        </div>
                  </Modal>
                </form>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

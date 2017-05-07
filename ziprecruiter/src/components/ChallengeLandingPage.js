import React from 'react';
import ReactCountdownClock from 'react-countdown-clock'
import Modal from 'react-modal'
export default class ChallengeLandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	showModal: false,
    	loading: false,
    	hostedURL: '',
    	repoLink: '',
    	showSuccess: false
    }
  }
  submitCode(e) {
	e.preventDefault();
	this.setState({
		loading: true
	});
	  setTimeout(() => {
	  this.setState({
	    loading: false,
	    showModal: false,
	    showSuccess: true
	  });
	}, 3000);
  }
  updateModalStatus() {
  	let { showModal } = this.state
  	this.setState({
  		showModal: !showModal,
  	});
  	setTimeout(() => {
  	  this.setState({
  	    hostedURL: 'https://ziprecruiter-hackathon.firebaseapp.com',
  	    repoLink: 'https://github.com/cazinge/ziprecruiter-hackathon.git',
  	  });
  	}, 3000);
  }
  render() {
  	let { showModal, repoLink, hostedURL, loading, showSuccess } = this.state
  	const customStyles = {
  	  content : {
  	    top                   : '50%',
  	    left                  : '50%',
  	    right                 : 'auto',
  	    bottom                : 'auto',
  	    marginRight           : '-50%',
  	    transform             : 'translate(-50%, -50%)',
  	    width                 : '70vw'
  	  }
  	};
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
    return (
      <div>
  	      <div className="green">
  			<div className="container">
  				<div className="row">
  					<div className="col s12 center white-text">
  						<h1>Visualize Data from the Bureau of Labor Statistics</h1>
  						<a href="#" className="btn white teal-text">Download Files</a>
  						<br/><br/>
  					</div>
  				</div>
  			</div>
  		    </div>
  			<div className="container">
  				<div className="row">
  					<div className="col s5 center" style={{ marginBottom: '130px' }}>
						<ReactCountdownClock
							seconds={86400}
	                     	color="#43a047"
	                     	alpha={0.9}
	                     	size={150}
						/>
  					</div>
  					<div className="col s6">
						<p style={{fontSize: '100px', margin: 0, color: "#43a047", lineHeight: "80px", marginTop: "30px" }}>$1,000</p><br/>
						<p style={{ margin: 0, fontSize: '20px', textIndent: '45px', color: '#43a047' }}>Get your share of the bounty!</p>


  					</div>
  				</div>
  			</div>
  			<div style={{background: '#fff'}}>
	  				<div className="container black-text">
		  				<div className="row">
		  					<div className="col s12">
		  						<h2>Directions:</h2>
		  						<p style={{ marginBottom: '40px' }}>
		  							Create a Webpage using HTML, Javascript, and CSS Visualizing some form of interesting job statistics from the last year from the given data. Make the webpage interactive and display your data dynamically using React.
		  						</p>
		  						<p className="center">
		  							<span onClick={this.updateModalStatus.bind(this)}className="btn blue white-text">Submit Project</span>
		  						</p>
		  						<br/><br/><br/>
		  					</div>
		  				</div>
	  				</div>
  			</div>
  			<Modal
  			  isOpen={showModal  || showSuccess}
  			  style={customStyles}
  			  contentLabel="Submit"
  			>

			{ loadingIndicator }
			<div className={!showSuccess ? 'hide' : 'center' }>
				<h5>Thanks Mike, we'll update you on your submission soon!</h5>
			</div>
            <form className={loading || showSuccess ? 'hide' : ''} onSubmit={this.submitCode.bind(this)}>
	            <h5 className="center">Upload Completed Project</h5>
				<div className="row">
					<div className="col s6">
						<input type="text" value={repoLink} placeholder="Git Repo Link" />
					</div>
					<div className="col s6">
						<div className="">
							<input type="text" value={hostedURL} placeholder="Hosted URL Link" />
						</div>
					</div>
					<div className="col s12">
						<input type="submit" className="btn green white-text right" value="Sumbit for Review" />
					</div>
				</div>
            </form>
  			</Modal>
      </div>
    );
  }
}

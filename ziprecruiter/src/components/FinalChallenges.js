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
    let customStyles = {
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

    return (
      <div className="card" style={{"margin":"25px"}}>
        <div className="challenge">
          <h5>Unique Binary Search Trees</h5>
          <div className="side-scroll">
            <div className="card item">
              <img src="http://www.worldnewsradio.today/images/cache/600x400/crop/images%7Ccms-image-000001732.png" alt="" width="250px" height="125px"  />
            </div>
            <div className="card item">
              <img src="http://www.worldnewsradio.today/images/cache/600x400/crop/images%7Ccms-image-000001732.png" alt="" width="250px" height="125px"  />
            </div>
            <div className="card item">
              <img src="http://www.worldnewsradio.today/images/cache/600x400/crop/images%7Ccms-image-000001732.png" alt="" width="250px" height="125px"  />
            </div>
            <div className="card item">
              <img src="http://www.worldnewsradio.today/images/cache/600x400/crop/images%7Ccms-image-000001732.png" alt="" width="250px" height="125px"  />
            </div>
            <div className="card item">
              <img src="http://www.worldnewsradio.today/images/cache/600x400/crop/images%7Ccms-image-000001732.png" alt="" width="250px" height="125px"  />
            </div>
            <div className="card item">
              <img src="http://www.worldnewsradio.today/images/cache/600x400/crop/images%7Ccms-image-000001732.png" alt="" width="250px" height="125px"  />
            </div>
          </div>
        </div>
        <div className="challenge">
          <h5>Design a Database Schema</h5>
          <div className="side-scroll">
            <div className="card item">
              <img src="http://www.worldnewsradio.today/images/cache/600x400/crop/images%7Ccms-image-000001732.png" alt="" width="250px" height="125px"  />
            </div>
            <div className="card item">
              <img src="http://www.worldnewsradio.today/images/cache/600x400/crop/images%7Ccms-image-000001732.png" alt="" width="250px" height="125px"  />
            </div>
            <div className="card item">
              <img src="http://www.worldnewsradio.today/images/cache/600x400/crop/images%7Ccms-image-000001732.png" alt="" width="250px" height="125px"  />
            </div>
            <div className="card item">
              <img src="http://www.worldnewsradio.today/images/cache/600x400/crop/images%7Ccms-image-000001732.png" alt="" width="250px" height="125px"  />
            </div>
            <div className="card item">
              <img src="http://www.worldnewsradio.today/images/cache/600x400/crop/images%7Ccms-image-000001732.png" alt="" width="250px" height="125px"  />
            </div>
            <div className="card item">
              <img src="http://www.worldnewsradio.today/images/cache/600x400/crop/images%7Ccms-image-000001732.png" alt="" width="250px" height="125px"  />
            </div>
          </div>
        </div>
        <div className="challenge">
          <h5>Visualize Data from the Bureau of Labor Statistics</h5>
          <div className="side-scroll">
            <div className="card item">
              <img src="https://static01.nyt.com/images/2012/10/05/business/economy/economix-05august/economix-05august-blog480.jpg" alt="" width="250px" height="125px" />
            </div>
            <div className="card item">
              <img src="http://www.worldnewsradio.today/images/cache/600x400/crop/images%7Ccms-image-000001732.png" alt="" width="250px" height="125px"  />
            </div>
            <div className="card item">
              <img src="https://cdn-images-1.medium.com/max/623/0*Gn8X7cQuHbVXz175.jpg" alt="" width="250px" height="125px"  />
            </div>
            <div className="card item">
              <img src="https://2.bp.blogspot.com/-8QNXkTzyH1c/U6cO8LCIa4I/AAAAAAAAITs/2xYU5DKT0iA/s1600/unemployment-labor-force-participation-rate.gif" alt="" width="250px" height="125px"  />
            </div>
            <div className="card item" onClick={this.openModal.bind(this)}>
              <img src="https://www.bls.gov/careeroutlook/2014/images/dod_educationpays.jpg" alt="" width="250px" height="125px"  />
            </div>
            <div className="card item">
              <img src="https://docshawn.files.wordpress.com/2012/07/screen-shot-2012-06-25-at-5-10-23-pm-thumb-615x400-91130.png?w=492&h=320" alt="" width="250px" height="125px"  />
            </div>
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
              <div className="container" style={{"position": "relative"}}>
                  <div className="row">
                    <div className="col s12 center">
                      <img src="https://www.bls.gov/careeroutlook/2014/images/dod_educationpays.jpg" alt="" width="625px" height="275px"  />
                    </div>
                    <div className="col s6 center" style={{"marginTop": "15px"}}>
                        <Link to='/user' className="waves-effect waves-light btn-large new-challenge">Accept User's Submission</Link>
                    </div>
                    <div className="col s6 center" style={{"marginTop": "15px"}}>
                        <Link to='/user' className="waves-effect waves-light btn-large new-challenge red">Decline User's Submission</Link>
                    </div>
                    <div className="col s12 center" style={{"marginTop": "15px"}}>
                        <Link to='/user' className="waves-effect waves-light btn-large new-challenge blue">View Code</Link>
                    </div>
                  </div>
              </div>
        </Modal>
      </div>
    );
  }
}

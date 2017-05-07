import React from 'react';
import '../styles/ViewChallenges.css';


export default class Profile extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
      	<div className="row" style={{ marginTop: '30px', }}>
      		<div className="col s3">
				<img style={{ borderRadius: '50%', width: '160px' }} src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAiQAAAAJDhlZDAwYzVmLTNlNzEtNGFlNC04YTE0LTg3OTJhNmFlMmViYQ.jpg" alt=""/>
      		</div>
      		<div className="col s9">
				<h3 style={{ marginTop: '10px' }}>Mike Gnanakone</h3>
				<h5>Torrance, CA</h5>
				<h5>Frontend Developer</h5>
      		</div>
      	</div>

        <div className="row">
    			<div className="col center s4">
    				<img width="150" src="https://s3-us-west-2.amazonaws.com/ziprecruiter-hackathon/javascriptBadge.png" alt=""/>
    				<h5><i>Javascript</i></h5>
    			</div>
    			<div className="col center s4">
    				<img width="150" src="https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/057/thumb/EGH_StyleCSSApp_Final.png?1491879992" alt=""/>
    				<h5 style={{ marginTop: '28px' }}><i>CSS</i></h5>
    			</div>
    			<div className="col center s4">
    				<img width="150" src="https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/014/full/course_image.png?1457454881" alt=""/>
    				<h5 style={{ marginTop: '25px' }}><i>React Native</i></h5>
    			</div>
      	</div>

        <div className="card" style={{"margin":"25px"}}>
          <div className="challenge">
            <h5>Projects:</h5>
            <div className="side-scroll">
              <div className="card item">
                <img src="https://hivdb.stanford.edu/images/schema.gif" alt="" width="250px" height="125px"  />
              </div>
              <div className="card item">
                <img src="https://www.bls.gov/careeroutlook/2014/images/dod_educationpays.jpg" alt="" width="250px" height="125px"  />
              </div>
              <div className="card item">
                <img src="https://raw.githubusercontent.com/cazinge/ziprecruiter-hackathon/master/ziprecruiter/src/img/img2.png" alt="" width="250px" height="125px"  />
              </div>
            </div>
          </div>
        </div>

        <div className="col s12 center" style={{"marginTop": "15px"}}>
            <a href='#' className="waves-effect waves-light btn-large new-challenge blue">Schedule Interview</a>
        </div>


      </div>
    );
  }
}

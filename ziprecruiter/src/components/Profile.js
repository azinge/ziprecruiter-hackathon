import React from 'react';

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
      	<h4>Badges:</h4>
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
      	<h4>Projects:</h4>
      	
      </div>
    );
  }
}

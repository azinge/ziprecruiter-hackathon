import React from 'react';
import { Link } from 'react-router';

export default class ChallengeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	showJSJobs: false,
    }
  }

  render() {
  	let { showJSJobs } = this.state
  	let spaceX = <div className="card" style={{borderRadius: '10px', border: '1px solid #c0c0c0', padding: '5px 10px', height: "300px"}}>
						<p className="center">
							<img src="https://smhttp-ssl-48567.nexcesscdn.net/media/catalog/product/cache/1/image/700x700/9df78eab33525d08d6e5fb8d27136e95/s/p/spacex_flag.png" width="100" alt=""/><br/>
						    <span className="badge" style={{fontWeight: '300', fontSize: '0.8rem', color: 'white', background: '#26a69a', borderRadius: '2px'}}>$5,000</span>
						</p>

						<p><b>Create a Rocket in JS</b></p>
						<p>Can you build a rocket in Javascript? Free trip to Mars for the winners!</p>
						 <a href="#" className="btn blue white-text right">Enter</a>
					</div>
	let homeDepot = <div className="card" style={{borderRadius: '10px', border: '1px solid #c0c0c0', padding: '5px 10px', height: "300px"}}>
				<p className="center">
					<img src="http://vignette4.wikia.nocookie.net/logopedia/images/5/51/480px-The_Home_Depot.png/revision/latest?cb=20140803144653" width="100" alt=""/><br/>
				    <span className="badge" style={{fontWeight: '300', fontSize: '0.8rem', color: 'white', background: '#26a69a', borderRadius: '2px'}}>$1,000</span>
				</p>

				<p><b>Visualize SKU Data</b></p>
				<p>We have a lot of SKU data, can you help us make it look pretty?</p>
				 <a href="#" className="btn blue white-text right">Enter</a>
			</div>
	let main = <div className="card" style={{borderRadius: '10px', border: '1px solid #c0c0c0', padding: '5px 10px', height: "300px"}}>
				<p className="center">
					<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Bureau_of_labor_statistics_logo.svg/1169px-Bureau_of_labor_statistics_logo.svg.png" width="100" alt=""/><br/>
				    <span className="badge" style={{fontWeight: '300', fontSize: '0.8rem', color: 'white', background: '#26a69a', borderRadius: '2px'}}>$1,000</span>
				</p>

				<p><b>Visualize Data from the Bureau of Labor Statistics</b></p>
			   	<p>Visualize last year's job statistics using HTML, CSS, and Javascript!</p>
				<Link to='/challengelanding' className="btn blue white-text right">Enter</Link>
			</div>
	let walMart = <div className="card" style={{borderRadius: '10px', border: '1px solid #c0c0c0', padding: '5px 10px', height: "300px"}}>
					<p className="center">
						<img src="http://www.freeiconspng.com/uploads/walmart-logo-png-5.png" width="100" alt=""/><br/>
					    <span className="badge" style={{fontWeight: '300', fontSize: '0.8rem', color: 'white', background: '#26a69a', borderRadius: '2px'}}>$2,500</span>
					</p>

					<p><b>Optimize our DB</b></p>
					<p>Take in our inventory in JSON, you write a database schema for it!</p>
					 <a href="#" className="btn blue white-text right">Enter</a>
				</div>
	let mcDonalds = <div className="card" style={{borderRadius: '10px', border: '1px solid #c0c0c0', padding: '5px 10px', height: "300px"}}>
					<p className="center">
						<img src="http://vignette2.wikia.nocookie.net/logopedia/images/9/9f/New_mcdonalds_red_logo.png/revision/latest?cb=20141006191725" width="100" alt=""/><br/>
					    <span className="badge" style={{fontWeight: '300', fontSize: '0.8rem', color: 'white', background: '#26a69a', borderRadius: '2px'}}>$500</span>
					</p>

					<p><b>What's on the menu?</b></p>
					<p>Take last month's sales, and figure out the best menu for us!</p>
					 <a href="#" className="btn blue white-text right">Enter</a>
				</div>
	let ge = <div className="card" style={{borderRadius: '10px', border: '1px solid #c0c0c0', padding: '5px 10px', height: "300px"}}>
					<p className="center">
						<img src="http://vignette4.wikia.nocookie.net/logopedia/images/1/19/500px-General_Electric_logo_svg.png/revision/latest?cb=20101017002729" width="100" alt=""/><br/>
					    <span className="badge" style={{fontWeight: '300', fontSize: '0.8rem', color: 'white', background: '#26a69a', borderRadius: '2px'}}>$9,000</span>
					</p>

					<p><b>Where in the world?</b></p>
					<p>Given some weather data, find out the optimal place to install wind turbines.</p>
					 <a href="#" className="btn blue white-text right">Enter</a>
				</div>
	let facebook = <div className="card" style={{borderRadius: '10px', border: '1px solid #c0c0c0', padding: '5px 10px', height: "300px"}}>
					<p className="center">
						<img src="https://www.seeklogo.net/wp-content/uploads/2016/09/facebook-icon-preview-1-400x400.png" width="100" alt=""/><br/>
					    <span className="badge" style={{fontWeight: '300', fontSize: '0.8rem', color: 'white', background: '#26a69a', borderRadius: '2px'}}>$1,500</span>
					</p>

					<p><b>Climb the Wall?</b></p>
					<p>Create a mobile version of the Facebook wall with React Native</p>
					 <a href="#" className="btn blue white-text right">Enter</a>
				</div>
	let google = <div className="card" style={{borderRadius: '10px', border: '1px solid #c0c0c0', padding: '5px 10px ', height: "300px"}}>
					<p className="center">
						<img src="https://www.seeklogo.net/wp-content/uploads/2015/09/google-favicon-vector-400x400.png" width="100" alt=""/><br/>
					    <span className="badge" style={{fontWeight: '300', fontSize: '0.8rem', color: 'white', background: '#26a69a', borderRadius: '2px'}}>$10,000</span>
					</p>

					<p><b>It's getting hot in here</b></p>
					<p>Use energy usage data from our datacenter to write a model for our AC!</p>
					 <a href="#" className="btn blue white-text right">Enter</a>
				</div>
	let uber = <div className="card" style={{borderRadius: '10px', border: '1px solid #c0c0c0', padding: '5px 10px', height: "300px"}}>
					<p className="center">
						<img src="http://images.gawker.com/riypydu9cmvmpnmtcmqw/c_scale,fl_progressive,q_80,w_800.png" width="100" alt=""/><br/>
					    <span className="badge" style={{fontWeight: '300', fontSize: '0.8rem', color: 'white', background: '#26a69a', borderRadius: '2px'}}>$500</span>
					</p>

					<p><b>Dude, where's my car?</b></p>
					<p>Use data from our drivers to visualize their cars in real-time using WebSockets</p>
					 <a href="#" className="btn blue white-text right">Enter</a>
				</div>
	let cardArray = [spaceX, homeDepot, main, walMart, mcDonalds, ge, facebook, google, uber]
	let javascriptJobs = [spaceX, main, walMart, mcDonalds]
    return (
      <div className="container">
      		<div className="row">
				<div className="col s12">
					<ul>
					  <li><span className="badge">Python</span></li>
					  <li><span className="badge">C++</span></li>
					  <li><span className="badge">PHP</span></li>
					  <li><span className="badge">Java</span></li>
					  <li><span className="badge">Perl</span></li>
					  <li><span className="badge"
					  	style={showJSJobs ? {fontWeight: '300', fontSize: '0.8rem', color: 'white', background: '#26a69a', borderRadius: '2px'} : {}}
					  	onClick={() => this.setState({
					  		showJSJobs: !showJSJobs
					  	})}
					  	>
					  		JS
					  	</span>
					  </li>
					  <li><span className="badge" onClick={() => this.setState({
					  		showJSJobs: !showJSJobs
					  	})} style={!showJSJobs ? {fontWeight: '300', fontSize: '0.8rem', color: 'white', background: '#26a69a', borderRadius: '2px'} : {}}>All</span></li>
					</ul>
				</div>
      		</div>
			<div className={showJSJobs ? 'row' : 'hide'}>
				{javascriptJobs.map(j => {
					return (
						<div className="col s4 card-container">
							{j}
						</div>
					)
				})}
			</div>
			<div className={!showJSJobs ? 'row' : 'hide'}>
				{cardArray.map(j => {
					return (
						<div className="col s4 card-container">
							{j}
						</div>
					)
				})}
			</div>
		</div>
    );
  }
}


import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';

import Registration from './components/Registration';
import ViewChallenges from './components/ViewChallenges';
import FinalChallenges from './components/FinalChallenges';
import NewChallenge from './components/NewChallenge';
import ChallengeLandingPage from './components/ChallengeLandingPage';
import ChallengeList from './components/ChallengeList';
import User from './components/User';
import './index.css';

const Outer = (props) => <div><Links />{props.children}</div>;
const Contact = () => <div><h1>Contact</h1></div>;


const Links = () =>
  <nav>
    <div className="nav-wrapper white" style={{"padding": "0px 30px"}}>
      <img src="https://www.ziprecruiter.com/zrs/092371be/img/logos/ziprecruiter-blacktext.svg" width="155" height="34" style={{"marginTop": "15px"}}/><a href="#" className="brand-logo left" style={{"paddingLeft":"3px", "color":"#343e45", "fontSize": "1.4rem"}}>for Developers</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="/newchallenge">Create New Challenge</Link></li>
        <li><Link to="/finalchallenges">View Challenges</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    </div>
  </nav>



class App extends React.Component {
  render(){
    return (
      <Router history={ hashHistory }>
        <Route path="/" component={Outer}>
        <Route path="register" component={Registration}></Route>
        <Route path="newchallenge" component={NewChallenge}></Route>
        <Route path="reviewchallenges" component={ViewChallenges}></Route>
        <Route path="finalchallenges" component={FinalChallenges}></Route>
        <Route path="challengelist" component={ChallengeList}></Route>
        <Route path="challengelanding" component={ChallengeLandingPage}></Route>
        <Route path="user" component={User}></Route>
        </Route>
      </Router>
    );
  }
}

export default App;
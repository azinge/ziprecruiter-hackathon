
import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';
import Registration from './components/Registration';
import './index.css';
const Outer = (props) => <div><Links />{props.children}</div>;
const Contact = () => <div><h1>Contact</h1></div>;


const Links = () =>
  <nav>
    <div className="nav-wrapper white" style={{"padding": "0px 30px"}}>
      <img src="https://www.ziprecruiter.com/zrs/092371be/img/logos/ziprecruiter-blacktext.svg" width="155" height="34" style={{"marginTop": "15px"}}/><a href="#" className="brand-logo left" style={{"paddingLeft":"3px", "color":"#343e45", "fontSize": "1.4rem"}}>for Developers</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="badges.html">Challenges</a></li>
        <li><a href="sass.html">My Profile</a></li>
      </ul>
    </div>
  </nav>



class App extends React.Component {
  render(){
    return (
      <Router history={ hashHistory }>
        <Route path="/" component={Outer}>
        <Route path="register" component={Registration}></Route>
        <Route path="contact" component={Contact}></Route>
        </Route>
      </Router>
    );
  }
}

export default App;
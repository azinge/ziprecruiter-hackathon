
import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';
import Registration from './components/Registration'
const Outer = (props) => <div><Links />{props.children}</div>;
const Contact = () => <div><h1>Contact</h1></div>;


const Links = () =>
  <nav>
    <Link to="/">Home</Link> 
    <Link to="/register">Register</Link>
    <Link to="/contact">Contact</Link>
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
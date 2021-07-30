import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import DisplayKeyboard from './components/DisplayKeyboard';
import Home from './Home';
import Account from './components/Account';
import DisplayItem from './components/DisplayItem';
import SocialMedia from './components/SocialMedia';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      keyboards: []
    }
  }
  
  render() {
    return (
      <div className="KSApp">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/keyboards"><DisplayKeyboard /></Route>
          <Route path="/account"><Account /></Route> 
          <Route path="/keyboardlisting"><DisplayItem /></Route>
        </Switch>
      </Router>
        <SocialMedia />
        <p style={{textAlign: 'center'}}>© 2021 Christopher Jose</p>
      </div>
      
    );
  }
}

export default App

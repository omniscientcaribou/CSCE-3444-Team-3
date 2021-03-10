import logo from './logo.svg';
import './App.css';
import Home from './Home';
import SideBar from './SideBar';
import Pay from './Pay';
import Order from './Order';
import Manager from './Manager';
import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {const period = setInterval(() => {
        setSeconds(seconds => seconds + 1);
    }, 3000);
    return() => clearInterval(period);
  }, []);
  console.log(seconds);
  return (
    <Router>
      <div className="App">
        <div className="App-Header">
          Waitstaff
        </div>
        <div className="ContentView">
          <Switch>
            <Route exact path="/">
              <Home seconds={seconds}/>
            </Route>
            <Route exact path="/pay">
              <Pay seconds={seconds}/>
            </Route>
            <Route exact path="/manager">
              <Manager seconds={seconds}/>
            </Route>
            <Route exact path="/order">
              <Order seconds={seconds}/>
            </Route>
          </Switch>
        </div>
        <div className="Text-Box">

        </div>
        <header className="SideBar">
                <SideBar />
        </header>
      </div>
    </Router>
  );
}

export default App;

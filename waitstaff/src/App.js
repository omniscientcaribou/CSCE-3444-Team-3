
import './App.css';
import Home from './Home';
import SideBar from './SideBar';
import Pay from './Pay';
import Order from './Order';
import Manager from './Manager';
import SplitBill from './SplitBill';
import Cash from './Cash';
import Success from './Success';
import SplitSuccess from './SplitSuccess';
import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//main app that contains the content view, sidebar and header
function App() {
  //creates the refresh rate for the entire app
  const [refresh, setRefresh] = useState(0);
  useEffect(() => {const period = setInterval(() => {
        setRefresh(refresh => refresh + 1);
    }, 10000);
    return() => clearInterval(period);
  }, []);
  //app is mostly used to route around the app
  //the swtich controlls the main content view between home, order, manager...etc
  //sidebar and header outside of the switch
  return (
    <Router>
      <div className="App">
        <div className="App-Header">
          Software Cafe
        </div>
        <div className="Content-View">
          <Switch>
            <Route exact path="/">
              <Home seconds={refresh}/>
            </Route>
            <Route exact path="/pay">
              <Pay seconds={refresh}/>
            </Route>
            <Route exact path="/manager">
              <Manager seconds={refresh} />
            </Route>
            <Route exact path="/order">
              <Order seconds={refresh}/>
            </Route>
            {////////////////////////////////* *///////////////////////////////////
            } 
            <Route exact path="/Cash">
              <Cash seconds={refresh}/>
            </Route>
            <Route exact path="/SplitBill">
              <SplitBill seconds={refresh} />
            </Route>

            <Route path='/Success'>
              <Success seconds={refresh}/>
            </Route>
            <Route path='/SplitSuccess'>
              <SplitSuccess seconds={refresh}/>
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

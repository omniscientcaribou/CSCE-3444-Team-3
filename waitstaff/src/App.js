
import './App.css';
import Home from './Home';
import SideBar from './SideBar';
import Pay from './Pay';
import Order from './Order';
import Manager from './Manager';
import BeverageInfo from './BeverageInfo';
import SplitBill from './SplitBill';
import Cash from './Cash';
import KitchenSuccess from './KitchenSuccess';
import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  const [refresh, setRefresh] = useState(0);
  useEffect(() => {const period = setInterval(() => {
        setRefresh(refresh => refresh + 1);
    }, 10000);
    return() => clearInterval(period);
  }, []);
  //console.log(refresh);
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
            <Route exact path="/BeverageInfo">
              <BeverageInfo seconds={refresh}/>
            </Route>
            <Route exact path="/KitchenSuccess">
              <KitchenSuccess seconds={refresh}/>
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

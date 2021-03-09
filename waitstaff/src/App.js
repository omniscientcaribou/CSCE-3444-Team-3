import logo from './logo.svg';
import './App.css';
import Table from './Table';
import React, { useState, useEffect } from 'react';

function App() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {const period = setInterval(() => {
        setSeconds(seconds => seconds + 1);
    }, 3000);
    return() => clearInterval(period);
  }, []);
  console.log(seconds);
  return (
    <div className="App">
      <div className="Tables">
        {/*<div style={{clear: 'both'}}>*/}
        <Table ID="1" Seconds={seconds}/>
        <Table ID="2" Seconds={seconds}/>
        <Table ID="3" Seconds={seconds}/>

        <Table ID="4" Seconds={seconds}/>
        <Table ID="5" Seconds={seconds}/>
        <Table ID="6" Seconds={seconds}/>

        <Table ID="7" Seconds={seconds}/>
        <Table ID="8" Seconds={seconds}/>
        <Table ID="9" Seconds={seconds}/>

        <Table ID="10" Seconds={seconds}/>
        <Table ID="11" Seconds={seconds}/>
        <Table ID="12" Seconds={seconds}/>
        <Table ID="13" Seconds={seconds}/>
        <Table ID="14" Seconds={seconds}/>
        <Table ID="15" Seconds={seconds}/>
        <Table ID="16" Seconds={seconds}/>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

    </div>
  );
}

export default App;

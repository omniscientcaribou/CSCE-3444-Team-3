import logo from './logo.svg';
import './App.css';
import Table from './Table';

function App() {
  return (
    <div className="App">
      <div className="Tables">
        {/*<div style={{clear: 'both'}}>*/}
        <Table ID="1"/>
        <Table ID="2"/>
        <Table ID="3"/>

        <Table ID="4"/>
        <Table ID="5"/>
        <Table ID="6"/>

        <Table ID="7"/>
        <Table ID="8"/>
        <Table ID="9"/>

        <Table ID="10"/>
        <Table ID="11"/>
        <Table ID="12"/>
        <Table ID="13"/>
        <Table ID="14"/>
        <Table ID="15"/>
        <Table ID="16"/>
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

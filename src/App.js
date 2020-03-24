import React from 'react';
// import logo from './logo.svg';
import './App.css';
import UserGreeting from './UserGreeting';
import NameList from './NameList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserGreeting />
        <NameList />
      </header>
    </div>
  );
}

export default App;

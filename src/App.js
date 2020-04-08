import React from 'react';
import './App.css';
import Header from './component/Header';
import Addfriends from './component/AddFriends/Addfriends';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Addfriends></Addfriends>
    </div>
  );
}

export default App;

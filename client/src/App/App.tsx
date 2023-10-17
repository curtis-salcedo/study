import React, { useEffect } from 'react';
import './App.css';

import AppBar from '../components/Header/Header';
import Main from '../pages/Main/Main';

function App() {

  return (
    <div className="App">
      <AppBar />
      <Main />
    </div>
  );
}

export default App;

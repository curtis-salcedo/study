import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import App from './App/App';
import Main from './pages/OldMain/Main';

import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();

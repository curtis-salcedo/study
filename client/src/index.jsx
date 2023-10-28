import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { DataProvider } from './utilities/DataContext';


import App from './App/App';
import Main from './pages/Main/Main';

import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <React.StrictMode>
    <DataProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </Router>
    </DataProvider>
  </React.StrictMode>
);

// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { DataProvider } from './utilities/DataContext';


import App from './app/App';
import Main from './pages/Main/Main';

import './index.css';

import store from './app/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <DataProvider>
        <Router>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/main" element={<Main />} />
          </Routes>
        </Router>
      </DataProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
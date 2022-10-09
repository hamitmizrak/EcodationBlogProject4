import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <React.Fragment>
      <Header/>
      <Main/>
      <Footer/>
    </React.Fragment>

    {/*
     <>
      <App />
    </> 
    */}
  </React.StrictMode>
);


reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

//Employee added
import Employee from "./Employee";
import OtherLanguage from "./i18n/OtherLanguage";

//Root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <React.Fragment>
          <Employee />
      </React.Fragment>

  </React.StrictMode>
);//end render

reportWebVitals();

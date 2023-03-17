import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './containers/App';
//import Card from './Card';
import reportWebVitals from './reportWebVitals';
//import {robots} from './robots';
//import CardList from './CardList';
//import './tachyons';
//<link rel="stylesheet" href="https://unpkg.com/tachyons@4/css/tachyons.min.css"></link>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
); 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
 
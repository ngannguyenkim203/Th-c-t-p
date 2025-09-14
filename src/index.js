import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import colors from '../src/constants/colors';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; //dùng để xử lý menu dropdown avatar
// import 'https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;700&display=swap'

Object.entries(colors).forEach(([key, value]) => {
  document.documentElement.style.setProperty(key, value);
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

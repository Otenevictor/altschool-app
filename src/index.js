import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from './AltExams/ErrorBoundary';
import reportWebVitals from './reportWebVitals';
import { HelmetProvider } from 'react-helmet-async';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
  <BrowserRouter>
  <React.StrictMode>
    <HelmetProvider>
    <App />
    </HelmetProvider>
  </React.StrictMode>
  </BrowserRouter>
  </ErrorBoundary>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

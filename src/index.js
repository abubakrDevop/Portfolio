import React from 'react';
import ReactDOM from 'react-dom/client';
import {createGlobalStyle} from "styled-components"
import App from './App';

const Global = createGlobalStyle `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global/>
    <App />
  </React.StrictMode>
);



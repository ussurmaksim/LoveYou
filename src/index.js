import React from "react";
import * as ReactDOMClient from "react-dom/client";
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/main.css'

const app = document.querySelector('#root');
const root = ReactDOMClient.createRoot(app);
root.render(<App />);

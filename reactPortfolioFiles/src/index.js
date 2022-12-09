import React from 'react';
//import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as ReactDOM from 'react-dom/client'
import { createStandaloneToast } from '@chakra-ui/toast'

const { ToastContainer, toast } = createStandaloneToast()

// render the ToastContainer in your React root
const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <>
    <App />
    <ToastContainer />
  </>,
)




/*
const root = () => { ReactDOM.createRoot(document.getElementById('root'));
return(
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
));
}

*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

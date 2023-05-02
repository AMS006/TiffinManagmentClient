import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import axios from 'axios'
import {Provider} from 'react-redux'
import {store} from './redux/store'
import {BrowserRouter} from 'react-router-dom'




const root = ReactDOM.createRoot(document.getElementById('root'));
axios.defaults.withCredentials = true
if(localStorage.providerToken){
  const {providerToken} = JSON.parse(localStorage.providerToken)
  axios.defaults.headers.common["Authorization"] = `Bearer ${providerToken}`
}
else if(localStorage.userToken){
  const {userToken} = JSON.parse(localStorage.userToken)
  axios.defaults.headers.common["Authorization"] = `Bearer ${userToken}`
}
root.render(
    <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </Provider>
);



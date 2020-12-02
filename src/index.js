import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'mobx-react'
import ProfileStore from './stores/ProfileStore';
import Profile from './stores/Profile';

const profile = new Profile()
// const gigStore = new GigStore()
const profileList= new ProfileStore()
const stores = {profileList,profile}


ReactDOM.render(
  <Provider {...stores} >
  <App />
</Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

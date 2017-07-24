import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store.js';
import App from './components/App.js';
import './styles/main.styl';

ReactDOM.render(
	<Provider store={store}>
    	<App />
  	</Provider>,
  	document.getElementById('root')
);

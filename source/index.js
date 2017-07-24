import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store.js';
// import { createStore } from 'redux'
import App from './components/App.js';
// import { city } from './reducers'

import './styles/main.styl';

// let store = createStore(
// 	city,
// 	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )

ReactDOM.render(
	<Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

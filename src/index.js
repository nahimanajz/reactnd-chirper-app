import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import thunk from 'redux-thunk';
import logger from './middleware/logger';


const store = createStore(reducer, applyMiddleware(thunk, logger));
//const store = createStore(reducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root')
)
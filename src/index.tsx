import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import adminReducer from './store/reducers/admin';
import authReducer from './store/reducers/auth';
import distillerReducer from './store/reducers/userDistillery';
import userReducer from './store/reducers/userPatron';

import App from './App';

const rootReducer = combineReducers({
  auth: authReducer,
  admin: adminReducer,
  distiller: distillerReducer,
  user: userReducer,
});

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
));

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

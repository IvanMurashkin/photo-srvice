import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducers/index';
import { ConnectedRouter } from 'connected-react-router';
import VK from 'vk-openapi';
import './index.css';
import './assets/albums-icon.png';
import App from './App';

export const history = createBrowserHistory();

const store = createStore(
    createRootReducer(history),
    compose(
        applyMiddleware(
            routerMiddleware(history),
            thunkMiddleware
        )
    )
);

VK.init({
    apiId: 7064360
});

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root'));
        
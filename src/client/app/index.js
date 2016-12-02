import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import App from './App.js';
require('./../style.css');

let store = createStore(rootReducer, {}, window.devToolsExtension ? window.devToolsExtension() : f => f)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'
import {Provider} from 'react-redux'
import App from './App';



const create_store_with_middleware = applyMiddleware(thunk)(createStore)
ReactDOM.render(<Provider store={create_store_with_middleware(rootReducer)}>
    <App />
    </Provider>, document.getElementById('root'));

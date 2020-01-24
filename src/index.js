import * as serviceWorker from './serviceWorker';
import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";


let rerenderEntiretree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} store={store} dispatch={store.dispatch.bind(store)} />
        </BrowserRouter>, document.getElementById('root'));

}

rerenderEntiretree(store.getState());

store.subscribe(rerenderEntiretree);



serviceWorker.unregister();


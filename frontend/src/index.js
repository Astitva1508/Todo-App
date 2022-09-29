import React from 'react';
import  ReactDOM  from 'react-dom';
import App from './components/app'
import { Provider } from 'react-redux';
import store from './store';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Provider>
);

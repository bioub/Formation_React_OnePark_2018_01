import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './components/App';
import './index.css';
import { configureStore } from './store';

/* istanbul ignore next */
const store = configureStore();

/* istanbul ignore next */
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));



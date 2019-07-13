import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let mountNode = document.getElementById('root');
render(<App />, mountNode);

registerServiceWorker();

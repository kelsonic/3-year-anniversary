import React from 'react';
import ReactDOM from 'react-dom';
import 'sanitize.css/sanitize.css';
import './globalStyles.css';
import App from './screens/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

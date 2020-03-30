import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import Store from '@src/stores';
// import importJSON from '@src/libs/XHRjson';


(async () => {

  // const exConfig = await importJSON('/config.json');
  // Store.config = {...Store.config, ...exConfig};

  ReactDOM.render(<App />, document.getElementById('root'));
  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  // serviceWorker.unregister();
  serviceWorker.register();
})();



import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configFromJSON from '@src/libs/config/fromJSON';
import AppGlobal from '@src/AppGlobal';


(async () => {
  const config = await configFromJSON('/config.json', {
    api: 'http://demo7618313.mockable.io/mock'
  });

  AppGlobal.config = config;

  ReactDOM.render(<App />, document.getElementById('root'));

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  // serviceWorker.unregister();
  serviceWorker.register();
})();



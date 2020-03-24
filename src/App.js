import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Config from '@src/libs/useCHState';
import ConfigReducer from '@src/reducers';

const App = () => {

  return ( 
    <Config.Provider initState={{
      config: {
        appName: 'demo'
      }
    }} reducer={ConfigReducer}>
    <BrowserRouter>
      <Suspense fallback={<div>loading...</div>}>
        <Switch>
          <Route exact path="/" component={lazy(() => import('@src/pages/index'))}></Route>
        </Switch>
      </Suspense>
    </BrowserRouter>
    </Config.Provider>
  )
}

export default App;

import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Context from '@src/libs/useContextReducer';
import Reducer from '@src/reducers';
import Store from '@src/stores';
import PageSpin from '@src/components/pageSpin';

const LoginPage = lazy(() => import('@src/pages/login'));
const AdminPages = lazy(() => import('@src/pages/admin'));

const App = () => {
  
  return (
    <Context.Provider initState={Store} reducer={Reducer}>
      <BrowserRouter>
        <Suspense fallback={<PageSpin />}>
          <Context.Consumer>
            {([{ auth }]) => {
              return (
                <Switch>
                  <Route exact path="/">
                    {auth.signined ? <Redirect to="/admin" /> : <Redirect to="/login" />}
                  </Route>
                  <Route path="/login">
                    {auth.signined ? <Redirect to="/" /> : <LoginPage />}
                  </Route>
                  <Route path="/admin">
                    {!auth.signined ? <Redirect to="/login" /> : <AdminPages />}
                  </Route>
                  {/* <Route exact path="/demo" component={lazy(() => import('@src/pages/index'))}></Route> */}
                </Switch>
              )
            }}
          </Context.Consumer>
        </Suspense>
      </BrowserRouter>
    </Context.Provider>
  )
}

export default App;

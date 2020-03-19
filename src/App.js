import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppGlobal from '@src/AppGlobal';

const ConfigContext = React.createContext();
AppGlobal.context = {
  config: ConfigContext
}

const App = () => {

  return <ConfigContext.Provider value={AppGlobal.config}><Router>
    <Suspense fallback={<div>loading...</div>}>
      <Switch>
        <Route path="/index" component={lazy(() => import('@src/pages/index'))}></Route>
        <Route path="/admin" component={lazy(() => import('@src/pages/admin'))}></Route>
      </Switch>
    </Suspense>
  </Router></ConfigContext.Provider>
}

// const App = () => {
//   return (<div className="App">
//     <Button type="primary">Button</Button>
//   </div>)
// }

export default App;

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

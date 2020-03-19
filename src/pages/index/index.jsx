import React, {  } from 'react';
import { Link, Route, Switch, useRouteMatch, useParams } from 'react-router-dom';

const IndexPage = () => {

  let { path, url } = useRouteMatch();
  console.log(path, url);

  return <div>
    <h1>Index Page</h1>
    <ul>
      <li><Link to={`${url}/about`}>关于</Link></li>
    </ul>
    <Switch>
      <Route path={`${path}/:subPage`}>
        <SubPage />
      </Route>
    </Switch>
  </div>
}

const SubPage = () => {

  let { subPage } = useParams();
  console.log(subPage);

  return <p>
    {subPage}
  </p>
}

export default IndexPage;
import React from 'react';
import {Router, Route, Redirect, Switch} from 'react-router-dom'
import { homeRoute, performancesRoute } from './Config/Navigation/routes';
// Components
import TopNav from './Components/NavBar/Navbar'
import Home from './Pages/Home/Home';
import Performances from './Pages/Perfomances/Perfomances'
import PageNotFound from './Pages/404/404';

import history from './Config/history'
import './Root.scss';

export default function Root() {
  return (
    <Router history = {history}>
      <div className = 'root'>
        <TopNav/>
        <Switch>
          <Route exact path ={homeRoute} component = {Home} />
          <Route exact path ={performancesRoute} component = {Performances} />
          {/* <Redirect to {PageNotFound} /> */}
        </Switch>
      </div>
    </Router>
  );
}


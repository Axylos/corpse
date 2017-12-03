import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CorpseNav from './corpse_nav';
import routeLocations from '../route_locations';
import About from './main/about';


const Router = () => {
  function renderRoutes() {
    return routeLocations.filter(location => location.component).map(location => (
      <Route key={location.url} exact path={location.url} component={location.component} />
    ));
  }

  return (
    <BrowserRouter>
      <div className="content">
        {renderRoutes()}
        <Route path="/about/:id" component={About} />
        <Route path="/" component={CorpseNav} />
      </div>
    </BrowserRouter>
  );
};


export default Router;

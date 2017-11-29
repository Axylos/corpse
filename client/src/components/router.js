import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CorpseNav from './corpse_nav';
import routeLocations from '../route_locations';


class Router extends Component {
  constructor(){
    super();
    this.renderRoutes = this.renderRoutes.bind(this);
  }
  renderRoutes(){
    return routeLocations.filter(location => location.component).map(location => (
      <Route key={location.url} exact path={location.url} component={location.component} />
    ))
  }
  render(){
    return (
      <BrowserRouter>
        <div>
          {this.renderRoutes()}
          <Route path="/" component={CorpseNav} />
        </div>
      </BrowserRouter>
    )
  }
}


export default Router;

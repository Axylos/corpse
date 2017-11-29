import React, { Component } from 'react';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import FontIcon from 'material-ui/FontIcon';
import routeLocations from '../route_locations';

class CorpseNav extends Component {
  constructor(){
    super();
    this.renderNavItems = this.renderNavItems.bind(this);
    this.navigate = this.navigate.bind(this);
    this.getSelected = this.getSelected.bind(this);
  }

  navigate(location){
    this.props.history.push(location);
  }

  renderNavItems(){
    return routeLocations.map(item => {
      const icon = <FontIcon className="material-icons">{item.icon}</FontIcon>
      return (
        <BottomNavigationItem onClick={() => this.navigate(item.url)}
          label={item.label} icon={icon} key={item.label} />
      )
    })
  }

  getSelected(){
    return routeLocations.findIndex(item => item.url === this.props.location.pathname)
  }

  render() {
    return (
      <BottomNavigation selectedIndex={this.getSelected()}>
        { this.renderNavItems() }
      </BottomNavigation>
    );
  }
}


export default CorpseNav;

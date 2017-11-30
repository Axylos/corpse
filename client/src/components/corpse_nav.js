import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import FontIcon from 'material-ui/FontIcon';
import routeLocations from '../route_locations';


class CorpseNav extends Component {
  constructor() {
    super();
    this.renderNavItems = this.renderNavItems.bind(this);
    this.navigate = this.navigate.bind(this);
    this.getSelected = this.getSelected.bind(this);
  }

  getSelected() {
    return routeLocations.findIndex(item => item.url === this.props.location.pathname);
  }

  navigate(location) {
    this.props.history.push(location);
  }

  renderNavItems() {
    return routeLocations.map((item) => {
      const icon = <FontIcon className="material-icons">{item.icon}</FontIcon>;
      return (
        <BottomNavigationItem
          onClick={() => this.navigate(item.url)}
          label={item.label}
          icon={icon}
          key={item.label}
        />
      );
    });
  }

  render() {
    const style = {
      bottom: 0,
      flexWrap: 'wrap',
      height: 'auto',
      paddingBottom: '10px',
      position: 'fixed',
      minHeight: '56px',
      width: '100vw',
    };
    return (
      <BottomNavigation style={style} selectedIndex={this.getSelected()}>
        { this.renderNavItems() }
      </BottomNavigation>
    );
  }
}

CorpseNav.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};


export default CorpseNav;

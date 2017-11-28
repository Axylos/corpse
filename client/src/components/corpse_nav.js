import React, { Component } from 'react';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import FontIcon from 'material-ui/FontIcon';

const homeIcon = <FontIcon className="material-icons">home</FontIcon>;
const strangerIcon = <FontIcon className="material-icons">live_help</FontIcon>;
const friendIcon = <FontIcon className="material-icons">group</FontIcon>;
const resourcesIcon = <FontIcon className="material-icons">link</FontIcon>;
const peruseIcon = <FontIcon className="material-icons">search</FontIcon>;
const bestIcon = <FontIcon className="material-icons">star</FontIcon>;
const contactIcon = <FontIcon className="material-icons">email</FontIcon>;
const aboutIcon = <FontIcon className="material-icons">info</FontIcon>;

class CorpseNav extends Component {
  render() {
    return (
      <BottomNavigation>
        <BottomNavigationItem label="Home" icon={homeIcon} />
        <BottomNavigationItem label="Write With Strangers" icon={strangerIcon} />
        <BottomNavigationItem label="Write With Friends" icon={friendIcon} />
        <BottomNavigationItem label="Resources" icon={resourcesIcon} />
        <BottomNavigationItem label="Peruse The Poems" icon={peruseIcon} />
        <BottomNavigationItem label="Best Of" icon={bestIcon} />
        <BottomNavigationItem label="Contact" icon={contactIcon} />
        <BottomNavigationItem label="About" icon={aboutIcon} />
      </BottomNavigation>
    );
  }
}


export default CorpseNav;

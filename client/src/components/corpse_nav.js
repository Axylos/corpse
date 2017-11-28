import React, { Component } from 'react';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import FontIcon from 'material-ui/FontIcon';

const hiIcon = <FontIcon className="material-icons">favorite</FontIcon>;

const CorpseNav = props =>
  (
    <BottomNavigation>
      <BottomNavigationItem label="Hi there" icon={hiIcon} />
    </BottomNavigation>
  );

export default CorpseNav;

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import Router from './components/router';


const App = (props, context) =>
  (
    <MuiThemeProvider>
      <div className="App">
        <Router />
      </div>
    </MuiThemeProvider>
  );


export default App;

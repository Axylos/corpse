import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import CorpseNav from './components/corpse_nav';
import Home from './components/main/home';
import About from './components/main/about';

const App = (props, context) =>
  (
    <MuiThemeProvider>
      <div className="App">
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </div>
        </BrowserRouter>
        <CorpseNav />
      </div>
    </MuiThemeProvider>
  );


export default App;

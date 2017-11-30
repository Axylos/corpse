import React from 'react';
import { Link } from 'react-router-dom';

const Home = () =>
  (
    <div className="home">
      <h2>Exquisite Corpse Factory</h2>
      <p>Collaborative Poetry Tool</p>
      <div className="home-links">
        <Link to="/strangers" >Write With Strangers</Link>
        <Link to="/friends" >Write With Friends</Link>
      </div>
      <Link to="/about/1" >What is an Exquisite Corpse?</Link>
    </div>
  );

export default Home;

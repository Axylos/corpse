import React from 'react';
import SignInComponent from '../auth/SignIn';

const Home = props =>
  (
    <div>
      <SignInComponent />
      <h2>Exquisite Corpse Factory</h2>
      <p>Collaborative Poetry Tool</p>
    </div>
  );

export default Home;

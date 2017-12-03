import React from 'react';
// import { connect } from 'react-redux';
import { OAuthSignInButton } from 'redux-auth/';

const SignInComponent = props =>
  (
    <div>
      <OAuthSignInButton />
    </div>
  );

export default SignInComponent;

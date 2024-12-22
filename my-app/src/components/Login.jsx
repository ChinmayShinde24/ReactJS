import React from 'react';

function Login(props) {
  return (
    <div>
      <h1>Login</h1>
      <p>Welcome, {props.userDetails.name + ' ' + props.userDetails.surname}</p>
    </div>
  );
}

export default Login;

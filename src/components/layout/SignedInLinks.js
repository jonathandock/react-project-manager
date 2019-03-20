import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
  return (
    <ul className="right">
      <li><NavLink to="/create">New project</NavLink></li>
      <li><NavLink to="/">Log out</NavLink></li>
      <li><NavLink to="/" className="btn btn-floating grey lighten-1">JD</NavLink></li>
    </ul>
  )
}

export default SignedInLinks;
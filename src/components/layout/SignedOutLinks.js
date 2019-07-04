import React from "react";
import { NavLink, Link } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <ul className='right'>
      <li>
        <Link to='/signup'>Sign up</Link>
      </li>
      <li>
        <NavLink to='/signin'>Login</NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLinks;

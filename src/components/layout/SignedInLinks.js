import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

const SignedInLinks = props => {
  // Won't use `this.props` to `signOut` because `signOut` is a function.

  return (
    <div>
      <ul className='right'>
        <li>
          <NavLink to='/create'>New Project</NavLink>
        </li>
        <li>
          {/* Won't use `Navbar` due to not go to anywhere */}
          <a onClick={props.signOut}>Log Out</a>
        </li>
        <li>
          <NavLink to='/' className='btn btn-floating'>
            {props.profile.initials}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

// props of above return
const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignedInLinks);

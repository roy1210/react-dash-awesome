import React from "react";
import { Link } from "react-router-dom";
import SignedOutLinks from "./SignedOutLinks";
import SignedInLinks from "./SignedInLinks";
import { connect } from "react-redux";

const Navbar = props => {
  const { auth, profile } = props;
  const links = auth.uid ? (
    <SignedInLinks profile={profile} />
  ) : (
    <SignedOutLinks />
  );
  return (
    <nav className='nav-wrapper teal darken-2'>
      <div className='container'>
        <Link to='/' className='brand-logo'>
          DashAwesome
        </Link>
        {links}
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  // console.log(state);
  return {
    auth: state.firebase.auth,
    // set `useFirestoreForProfile` in index.js
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(Navbar);

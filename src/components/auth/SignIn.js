import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      // e got many of props
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    // to avoid default moving for form. Not going to page being re-flesh
    e.preventDefault();
    // console.log(this.state);
    this.props.signIn(this.state);
  };

  render() {
    const { authError, auth } = this.props;

    // Redirect to top page once login
    if (auth.uid) return <Redirect to='/' />;

    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit} className='white'>
          <h5 className='grey-text text-darken-3'>Login</h5>
          <div className='input-field'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' onChange={this.handleChange} />
          </div>

          <div className='input-field'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' onChange={this.handleChange} />
          </div>
          <div className='input-field'>
            <button className='btn pink lighten-1 z-depth-0'>LOGIN</button>
            <div className='black-text'>
              <p>=Guest user=</p>
              <p>Email: guest@user.com</p>
              <p>Password: 123456</p>
            </div>
            <div className='red-text center'>
              {authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

// `authError` will use as props in `const` in above
const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);

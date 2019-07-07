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
        <div className='row' style={{ marginTop: "1em" }}>
          <div className='card teal'>
            <div className='card-content white-text'>
              <span className='card-title'>It's great to see you!</span>
              <p>
                This is a simple project dashboard tool with authentication and
                cloud functions.
              </p>
              <p>
                It's made with React.js, Redux-thunk, Firebase, and Cloud
                Firestore.
              </p>
              <p>
                Please feel free to post any project or sign up to try this app.
              </p>
            </div>
          </div>
        </div>
        <form
          onSubmit={this.handleSubmit}
          className='white'
          style={{ marginTop: "0em" }}
        >
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

            <div className='red-text center'>
              {authError ? <p>{authError}</p> : null}
            </div>
            <p>=Guest user=</p>
            <p>Email: guest@user.com</p>
            <p>Password: 123456</p>
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

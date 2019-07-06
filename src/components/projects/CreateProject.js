import React, { Component } from "react";
import { connect } from "react-redux";
import { createProject } from "../../store/actions/projectActions";
import { Redirect } from "react-router-dom";

class CreateProject extends Component {
  state = {
    title: "",
    content: ""
  };

  handleChange = e => {
    this.setState({
      // e got many of props
      [e.target.id]: e.target.value
    });
  };

  // preventDefault: to avoid default moving for form. Not going to page being re-flesh
  handleSubmit = e => {
    e.preventDefault();
    this.props.createProject(this.state);
    this.props.history.push("/");
  };

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />;

    return (
      <div>
        <div className='container'>
          <form onSubmit={this.handleSubmit} className='white'>
            <h5 className='grey-text text-darken-3'>Create new project</h5>
            <div className='input-field'>
              <label htmlFor='title'>Title</label>
              <input type='text' id='title' onChange={this.handleChange} />
            </div>

            <div className='input-field'>
              <label htmlFor='content'>Project Content</label>
              <textarea
                id='content'
                className='materialize-textarea'
                onChange={this.handleChange}
              />
            </div>
            <div className='input-field'>
              <button className='btn pink lighten-1 z-depth-0'>Create</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};
// createProject(1st): object naming
// createProject(project): it is action creator. imported function
// Work with handleSubmit (passing this.state)
const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProject);

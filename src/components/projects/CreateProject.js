import React, { Component } from "react";
import { connect } from "react-redux";
import { createProject } from "../../store/actions/projectActions";

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
  };

  render() {
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

// createProject(1st): object naming
// createProject(project): it is action creator. imported function
// Work with handleSubmit (passing this.state)
const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project))
  };
};

// first arg of connect is mapStateToProps
export default connect(
  null,
  mapDispatchToProps
)(CreateProject);

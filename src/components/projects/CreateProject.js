import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createProject } from '../../store/actions/projectActions';

class CreateProject extends Component {

  state = {
    title: '',
    content: ''
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createProject(this.state);
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <h5>Create project</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" onChange={this.handleInputChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Project content</label>
            <textarea className="materialize-textarea" name="content" id="content" onChange={this.handleInputChange} ></textarea>
          </div>
          <div className="input-field">
            <button className="btn">Create</button>
          </div>
        </form>
      </div>
    )
  }
}

/**
 * We add some dispatch actions to our component
 * The createProject property in props will take a project as param
 * Then we dispatch the action to the store through the 'createProject' action from store/action/projectActions.js
 * with the new project as param
 * @param {*} dispatch 
 */
const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(null, mapDispatchToProps)(CreateProject);

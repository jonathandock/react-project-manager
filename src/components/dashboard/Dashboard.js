import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProjectList from '../projects/ProjectList';
import Notifications from './Notifications';

class Dashboard extends Component {
  
  render() {

    const { projects } = this.props;

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects}/>
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}

/**
 * State is rootReducer with project property
 * corresponding to the projectReducer
 * In the projectReducer, there is a initState with the property projects
 * Here we map the state of projectReducer to props of the dashbardComponent
 * @param {*} state 
 */
const mapStateToProps = (state) => {
  return {
    projects: state.project.projects
  }
}

export default connect(mapStateToProps)(Dashboard);
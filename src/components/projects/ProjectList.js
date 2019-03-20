import React from 'react';

import ProjectSummary from './ProjectSummary';

const ProjectList = ({ projects }) => {
  
  return (
    <div className="section project-list">
      {
        // Check if we have projects with 'projects && ...'
        projects && projects.map(project => {
          return (
            <ProjectSummary project={project} key={project.id} />
          )
        })
      }
    </div>
  )
}

export default ProjectList;
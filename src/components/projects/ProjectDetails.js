import React from 'react'

const ProjectDetails = (props) => {

  const id = props.match.params.id;

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project title</span>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt vero ex ea tenetur, soluta similique magni iste dolor veritatis. Fugit quisquam quae eveniet, amet sint velit sit odio repellat ea!</p>
        </div>
        <div className="card-action grey-text">
          <div>Posted by JD</div>
          <div>3rd September, 2pm</div>
          <div>Project id: {id}</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails

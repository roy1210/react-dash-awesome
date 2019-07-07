import React from "react";
import moment from "moment";

const ProjectSummary = ({ project }) => {
  return (
    <div className='card z-depth-0 project-summary' style={{ opacity: "0.95" }}>
      <div className='card-content grey-text-darken-3'>
        <span className='card-title black-text'>{project.title}</span>
        <p className='grey-text'>
          Posted by {project.authorFirstName} {project.authorLastName}
        </p>
        <p className='grey-text'>
          {moment(project.createdAt.toDate()).calendar()}
        </p>
      </div>
    </div>
  );
};

export default ProjectSummary;

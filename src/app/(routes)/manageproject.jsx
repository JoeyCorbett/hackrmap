// src/manageProject.js
import React from 'react';
import ProjectCard from '../components/projectCard';

const ManageProject = () => {
  return (
    <div className="flex flex-wrap gap-4 p-[2%]">
      <div className="w-1/2 p-2"> {/* Adjust the width to take half of the container */}
        <ProjectCard />
      </div>
      <div className="w-1/2 p-2"> {/* Adjust the width to take half of the container */}
        <ProjectCard />
      </div>
      {/* Add more cards as needed */}
      <div className="w-1/2 p-2">
        <ProjectCard />
      </div>
      <div className="w-1/2 p-2">
        <ProjectCard />
      </div>
    </div>
  );
};

export default ManageProject;

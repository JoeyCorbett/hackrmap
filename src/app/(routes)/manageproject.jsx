// src/manageProject.js
import React from "react";
import ProjectCard from "../components/projectCard";
import NavBar from "../components/navbar";
import { projectsArr } from "../components/projects";
import { Search } from "lucide-react";

const ManageProject = () => {
  return (
    <div className="flex">
      <NavBar />
      <div className="flex flex-col w-full p-4">
        {/* Search Bar */}
        <div className="relative mb-6 w-full max-w-3xl mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
          <input
            className="w-full rounded-full border border-gray-300 bg-gray-100 p-2 pl-10 text-gray-700 placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
            type="search"
            placeholder="Search..."
          />
        </div>
        
        {/* Project Cards */}
        <div className="flex flex-wrap gap-6 justify-center">
          {projectsArr?.map((item) => (
            <div className="relative w-full md:w-[90%] lg:w-1/2 xl:w-[45%]">
              <ProjectCard
                id={item.id}
                date={item.lastUpdated}
                label={item.name}
                description={item.specialRequirements}
                techStacks={item.preferredTools}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageProject;

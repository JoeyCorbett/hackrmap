import React, { useState } from "react";
import ProjectCard from "../components/projectCard";
import Navbar2 from "../components/navbar2";
import { projectsArr } from "../components/projects";
import { Search } from "lucide-react";
import ProjectPanel from "../components/projectPanel"; // Import ProjectPanel

const ManageProject = () => {
  const [isProjectPanelOpen, setIsProjectPanelOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  const handleProjectClick = (project) => {
    setActiveProject(project);
    setIsProjectPanelOpen(true);
  };

  const handleClosePanel = () => {
    setIsProjectPanelOpen(false);
    setActiveProject(null);
  };

// Filter projects based on search query
const filteredProjects = projectsArr.filter((project) => {
  const labelMatch = project.data.label && typeof project.data.label === 'string' && project.data.label.toLowerCase().includes(searchQuery.toLowerCase());
  const goalsMatch = project.data.projectGoals && typeof project.data.projectGoals === 'string' && project.data.projectGoals.toLowerCase().includes(searchQuery.toLowerCase());
  const tracksMatch = project.tracks && project.tracks.some((track) => typeof track === 'string' && track.toLowerCase().includes(searchQuery.toLowerCase()));
  const toolsMatch = project.data.preferredTools && project.data.preferredTools.some((tool) => typeof tool === 'string' && tool.toLowerCase().includes(searchQuery.toLowerCase()));
  const challengesMatch = project.data.sponsorChallenges && project.data.sponsorChallenges.some((challenge) =>
    challenge.challenge && typeof challenge.challenge === 'string' && challenge.challenge.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return labelMatch || goalsMatch || tracksMatch || toolsMatch || challengesMatch;
});
  
  return (
    <div className="flex">
      <Navbar2 />

      <div className="flex flex-col w-full p-4">
        {/* Search Bar */}
        <div className="relative mb-6 w-full max-w-3xl mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
          <input
            className="w-full rounded-full border border-gray-300 bg-gray-100 p-2 pl-10 text-gray-700 placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
            type="search"
            placeholder="Search..."
            value={searchQuery} // Controlled input
            onChange={(e) => setSearchQuery(e.target.value)} // Update search query
          />
        </div>

        {/* Project Cards */}
        <div className="flex flex-wrap gap-6 justify-center">
          {filteredProjects.map((item) => (
            <div
              key={item.id}
              className="relative w-full md:w-[90%] lg:w-1/2 xl:w-[45%]"
            >
              <ProjectCard
                id={item.id}
                project={item}
                projectGoals={item.projectGoals || []}
                date={item.data.lastUpdated}
                numTeammates={item.data.numTeammates}
                hackathonLengths={item.data.hackathonLengths}
                skillLevels={item.data.skillLevels}
                tracks={item.tracks}
                preferredTools={item.data.preferredTools || []}
                onClick={() => handleProjectClick(item)} // Pass the click handler
              />
            </div>
          ))}
        </div>
      </div>

      {/* Project Panel */}
      {isProjectPanelOpen && activeProject && (
        <ProjectPanel
          project={activeProject}
          onClose={handleClosePanel}
        />
      )}
    </div>
  );
};

export default ManageProject;

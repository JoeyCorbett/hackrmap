import React from 'react';
import { X } from 'lucide-react';

const ProjectCard = ({ id, projectGoals, lastUpdated, numTeammates, skillLevels, hackathonLengths, tracks, preferredTools, onClick }) => {
    const handleDeleteProject = async (id) => {
        const response = await fetch(`https://localhost:3001/delete/${id}`, {
            method: 'DELETE',
        });
        if (response.ok) {
            console.log('Project deleted');
        } else {
            console.log('Error deleting project');
        }
    };

    return (
        <div
            className="flex flex-col p-4 hover:scale-105 transition-transform ease-in-out duration-300 cursor-pointer"
            onClick={onClick}
        >
            <article className="hover:animate-background rounded-lg bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-lg transition hover:bg-[length:400%_400%] hover:shadow-xl hover:[animation-duration:_4s]">
                <div className="flex flex-col rounded-lg bg-white p-5 relative shadow-md">
                    
                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteProject(id);
                        }}
                        className="absolute top-2 right-2 p-1 text-black transition-transform hover:scale-110"
                    >
                        <X />
                    </button>

                    <div className="flex flex-col gap-1 mb-3">
                        <div className="text-slate-800 text-lg" > {lastUpdated} </div>
                        <h1 className="text-xl font-bold text-gray-900 leading-tight">
                            {tracks}
                        </h1>
                        <h3 className="text-lg text-gray-700 leading-tight">
                            {projectGoals}
                        </h3>
                    </div>

                    <div className="text-gray-700 mb-3">
                        <h4 className="font-semibold text-md mb-0.5 leading-tight">
                            Teammates: <span className="font-normal">{numTeammates}</span>
                        </h4>
                        <h4 className="font-semibold text-md mb-0.5 leading-tight">
                            Skill Level: <span className="font-normal">{skillLevels ? skillLevels : 'N/A'}</span>
                        </h4>
                        <h4 className="font-semibold text-md mb-0.5 leading-tight">
                            Hackathon Length: <span className="font-normal">{hackathonLengths || 'N/A'}</span>
                        </h4>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {preferredTools.map((tech, index) => (
                            <span key={index} className="text-xs whitespace-nowrap rounded-full bg-yellow-100 border border-yellow-300 px-3 py-1 text-yellow-600 shadow-sm hover:bg-yellow-200 transition duration-200">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </article>
        </div>
    );
};

export default ProjectCard;

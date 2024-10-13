import React from 'react';
import { X } from "lucide-react";

const ProjectCard = ({ id, date, label, description, techStacks }) => {

    const handleDeleteProject = async (id) => {
        const response = await fetch(`https://localhost3001/delete/${id}`);
        if (response.ok) {
            console.log('Project deleted');
        } else {
            console.log('Error deleting project');
        }
    };

    return (
        <div className="flex flex-col p-2 hover:scale-105 transition-transform ease-in-out duration-300">
            <article className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
                <div className="flex flex-col rounded-[10px] bg-white p-4 sm:p-6 relative">
                    <div datetime={date} className="block text-base text-gray-500">
                        {date}
                    </div>
                    <button type="button" onClick={() => handleDeleteProject(id)} className="absolute top-2 right-2 text-black">
                        <X />
                    </button>

                    <a href="#" className="flex flex-col gap-0">
                        <h1 className="text-[2rem] font-medium text-gray-900">
                            {label}
                        </h1>
                        <h3 className="text-xl pb-2">
                            {description}
                        </h3>
                    </a>

                    <div className="flex flex-wrap gap-1">
                        {techStacks.map((tech, index) => (
                            <span key={index} className="text-lg whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-purple-600">
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

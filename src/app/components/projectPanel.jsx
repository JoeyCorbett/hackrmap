import React, { useEffect, useState } from 'react';
import { X } from "lucide-react";

// Project Panel is for the corresponding graph

const ProjectPanel = ({ project, onClose }) => {

    const [slideIn, setSlideIn] = useState(false);

    useEffect(() => {
        setSlideIn(true);
        return () => setSlideIn(false); // Cleanup when the component unmounts
    }, []);

    if (!project) return null;

    return (
        <div
            className={`fixed top-0 right-0 h-full w-1/2 bg-white shadow-lg p-4 overflow-auto transition-transform duration-500 ease-in-out z-50 ${
                slideIn ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
            <button onClick={onClose} className="mb-2 p-1 rounded hover:bg-gray-200">
                <X />
            </button>

            {/* Display the last updated date */}
            <div className="text-lg text-slate-900 mb-2">Last Updated: {project.lastUpdated}</div>

            <h2 className="font-bold text-4xl mb-4">Project Goals</h2>
            <p className="mb-2">
                {Array.isArray(project.projectGoals) && project.projectGoals.length > 0
                    ? project.projectGoals.join(', ')
                    : 'No goals specified.'}
            </p>

            
        </div>
    );
};

export default ProjectPanel;

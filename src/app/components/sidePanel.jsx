import React from 'react';
import { X } from "lucide-react";

const SidePanel = ({ node, onClose }) => {
  if (!node) return null; 

  return (
    <div className="bg-white fixed right-0 top-0 w-1/2 h-full shadow-lg p-4 overflow-auto">
      <button onClick={onClose} className="mb-2 p-1 rounded hover:bg-gray-200">
        <X />
      </button>
      <h2 className="font-bold text-4xl mb-4">{node.data.label}</h2>
      <p className="mb-2">
        {`I have some ideas for you on how to create a ${node.data.label} for a team of ${node.data.numTeammates}.`}
      </p>
      <p className="mb-4">
        {`Here are the suggestions to develop your ${node.data.label}:`}
      </p>

      <ol className="list-decimal list-inside space-y-2">
        {node.data.description.map((item, index) => (
          <li key={index} className="capitalize">
            {item}
          </li>
        ))}
      </ol>

      {/* Add resources if any are available */}
      {node.data.resources && node.data.resources.length > 0 && (
        <div className="mt-10">
          <h3 className="font-semibold text-xxl mb-2">Resources for reference:</h3>
          <ul className="list-disc list-inside space-y-1">
            {node.data.resources.map((resource, index) => (
              <li key={index} className="text-blue-600 hover:underline">
                <a href={resource.link} target="_blank" rel="noopener noreferrer">
                  {resource.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SidePanel;

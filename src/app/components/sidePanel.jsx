// SidePanel.js
import React from 'react';

const SidePanel = ({ node, onClose }) => {
  if (!node) return null; 

  return (
    <div className="fixed right-0 top-0 w-1/2 h-full bg-gray-200 shadow-lg p-4">
      <button onClick={onClose} className="mb-2">Close</button>
      <h2 className="font-bold">{node.label}</h2>
      <p>{node.description}</p>
    </div>
  );
};

export default SidePanel;

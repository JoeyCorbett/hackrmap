// EDIT THIS FILEEE
import React from 'react';
import { X } from "lucide-react";

const ProjectPanel = ({ node, onClose }) => {
  if (!node) return null; 

  return (

    <div className="bg-white fixed right-0 top-0 w-1/2 h-full shadow-lg p-4">

      <button onClick={onClose} className="mb-2"><X /></button>
      <h2 className="font-bold">{node.label}</h2>
      <p>{node.description}</p>
    </div>
  );
};

export default SidePanel;

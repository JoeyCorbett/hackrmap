import React, { memo } from "react";
import { Handle, Position } from "@xyflow/react";

// CustomNode Component
const CustomNode = memo(({ data, isConnectable, onClick }) => {
  const handleNodeClick = (e) => {
    e.stopPropagation(); // Prevent click event from propagating
    onClick(data); // Call the parent function to set the active node
  };

  return (
    <>
      <Handle
        type="target"
        position={Position.Top}
        style={{ background: "#555" }}
        isConnectable={isConnectable}
      />
      <button
        className="flex flex-col p-2 bg-gray-200 rounded shadow hover:bg-gray-300"
        onClick={handleNodeClick} // Handle click event
      >
        <span className="font-bold cursor-pointer">{data.label}</span> {/* Display the label */}
      </button>
      <Handle
        type="source"
        position={Position.Right}
        id="a"
        style={{ top: 10, background: "#555" }}
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="b"
        style={{ bottom: 10, top: "auto", background: "#555" }}
        isConnectable={isConnectable}
      />
    </>
  );
});

export default CustomNode;

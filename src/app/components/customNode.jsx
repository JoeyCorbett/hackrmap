import React, { memo, useState } from "react";
import { Handle, Position } from "@xyflow/react";
import SidePanel from "./sidePanel"; // Ensure this path is correct

// CustomNode Component
const CustomNode = memo(({ data, isConnectable, onClick }) => {
  const handleNodeClick = (e) => {
    e.stopPropagation(); // Prevent handle click event from propagating
    onClick(data); // Call the parent function to set the active node
  };

  console.log('11111111111111', data)

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
        <span className="font-bold cursor-pointer">{data.label}</span>
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

// NodeContainer Component
const NodeContainer = ({ nodes }) => {
  const [activeNode, setActiveNode] = useState(null); // State to manage the active node

  const handleNodeClick = (node) => {
    console.log("Node Clicked:", node);
    setActiveNode(node); // Set the active node
  };

  const closePanel = () => {
    setActiveNode(null); // Close the side panel
  };

  return (
    <div className="flex">
      <div className="flex-1">
        {nodes?.map((node) => (
          <CustomNode
            key={node.id}
            data={node}
            
            isConnectable={true}
            onClick={handleNodeClick} // Pass the click handler
          />
        ))}
      </div>
      {/* Render the side panel with the active node */}
      {activeNode && <SidePanel node={activeNode} onClose={closePanel} />}
    </div>
  );
};

export default CustomNode;

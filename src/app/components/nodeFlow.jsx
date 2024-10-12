import React, { useState } from "react";
import CustomNode from "./customNode"; // Ensure this path is correct
import SidePanel from "./sidePanel"; // Ensure this path is correct

const NodeFlow = ({ nodes }) => {
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

export default NodeFlow;

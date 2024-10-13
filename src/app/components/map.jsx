import React, { useState, useCallback } from 'react';
import {
  ReactFlow,
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import { SquarePlus } from 'lucide-react'; // Icon for the Add Node button

import { initialNodes } from './initialNodes'; // Initial nodes data
import { initialEdges } from './edges'; // Initial edges data
import CustomNode from './customNode'; // Custom node component
import SidePanel from './sidePanel'; // Side panel for node details

const rfStyle = {
  backgroundColor: '#111827', // Background color for the ReactFlow canvas
};

const Map = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const [activeNode, setActiveNode] = useState(null);

  const onNodesChange = useCallback((changes) => setNodes((nds) => applyNodeChanges(changes, nds)), []);
  const onEdgesChange = useCallback((changes) => setEdges((eds) => applyEdgeChanges(changes, eds)), []);
  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);
  
  const onNodeClick = useCallback((event, node) => {
    setActiveNode(node); // Set active node for the side panel
  }, []);
  
  const closePanel = () => {
    setActiveNode(null);
  };

  const onAddNode = () => {
    // Create a new node with a unique id and random position
    const newNode = {
      id: `${nodes.length + 1}`,
      data: { label: `Node ${nodes.length + 1}` },
      position: { x: Math.random() * 400, y: Math.random() * 400 },
    };
    setNodes((nds) => [...nds, newNode]); // Add the new node to the existing nodes
  };

  return (
    <main className="h-screen w-screen relative">
      {/* Button to add a new node */}
      <div className='absolute inline-block group'>
        <button
          onClick={onAddNode}
          style={{ position: 'relative', top: 27, right: -50, zIndex: 10 }} // Adjust positioning here
        >
          <SquarePlus size={44} color="#ffffff" strokeWidth={0.6} /> {/* The plus icon */}
        </button>
        {/* Tooltip for the button */}
        <span className="z-10 left-10 right-50 transform -translate-x-1/2 translate-y-full mt-2 opacity-0 group-hover:opacity-100 bg-black text-white text-xs py-1 px-2 rounded transition-opacity duration-300">
          Add a Node
        </span>
      </div>

      {/* React Flow component */}
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={{ customNode: CustomNode }} // Register custom node type
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
        fitView
        fitViewOptions={{ padding: 0.5 }}
        style={rfStyle} // Apply styles
      >
        <Background />
        <Controls />
      </ReactFlow>

      {/* Side panel for active node */}
      {activeNode && (
        <div>
          <SidePanel node={activeNode} onClose={closePanel} />
        </div>
      )}
    </main>
  );
};

export default Map;

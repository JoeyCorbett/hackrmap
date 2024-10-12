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

import { initialNodes } from './initialNodes';
import { initialEdges } from './edges';
import CustomNode from './customNode'; // Import CustomNode directly
import SidePanel from './sidePanel';

const rfStyle = {
  backgroundColor: '#fafafa',
  border: '1px solid #e0e0e0',
};

const Map = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const [activeNode, setActiveNode] = useState(null);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const onNodeClick = useCallback((event, node) => {
    console.log('Node clicked:', node);
    setActiveNode(node);
  }, []);

  const closePanel = () => {
    setActiveNode(null);
  };

  return (
    <div className="flex-1 flex flex-col">
      <header className="bg-white shadow-md p-4">
        <h1 className="text-xl font-bold text-gray-800">Generate Your Project Roadmap</h1>
      </header>

      <main className="flex-1 p-6 bg-gray-100 space-y-8 relative"> {/* Added relative positioning */}
        <div className="bg-white p-6 rounded-lg shadow-lg" style={{ height: '600px' }}>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Visual Roadmap with Sub-Flows</h2>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={{ customNode: CustomNode }}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onNodeClick={onNodeClick}
            fitView
            style={rfStyle}
          >
            <Background />
            <Controls />
          </ReactFlow>
        </div>
        {activeNode && (
          <div className="">
            <SidePanel node={activeNode} onClose={closePanel} />
          </div>
        )}
      </main>
    </div>
  );
};

export default Map;
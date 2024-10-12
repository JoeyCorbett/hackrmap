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

import { initialNodes } from './nodes';
import { initialEdges } from './edges';
import memo from './customNode';

const rfStyle = {
  backgroundColor: '#fafafa',
  border: '1px solid #e0e0e0', // Added border for better distinction
};

const Map = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

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

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-gray-800 text-gray-200 flex flex-col">
        <div className="text-xl font-bold p-4 bg-gray-900 text-center">Project Scoping Tool</div>
        <nav className="flex-1 px-4 py-2 space-y-2">
          <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">Dashboard</a>
          <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">Manage Projects</a>
          <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">Settings</a>
        </nav>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-md p-4">
          <h1 className="text-xl font-bold text-gray-800">Generate Your Project Roadmap</h1>
        </header>

        <main className="flex-1 p-6 bg-gray-100 space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-lg" style={{ height: '600px' }}>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Visual Roadmap with Sub-Flows</h2>
            <ReactFlow
              nodes={nodes}
              edges={edges}
              nodeTypes={{ default: memo }}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              fitView
              style={rfStyle}
            >
              <Background />
              <Controls />
            </ReactFlow>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Map;

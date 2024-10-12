import React, { useState, useCallback } from 'react';
import { generateRoadmap } from '../../services/openAiService'; // Correct import

// ReactFlow imports
import {
  ReactFlow,
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

// Initial nodes and edges for ReactFlow
const initialNodes = [
  {
    id: '1',
    data: { label: 'Start of Roadmap' },
    position: { x: 0, y: 0 },
    type: 'input',
  },
];

const initialEdges = [];

const Dashboard = () => {
  const [roadmap, setRoadmap] = useState(''); // For the generated roadmap from OpenAI
  const [loading, setLoading] = useState(false); // Loading state

  // ReactFlow state for nodes and edges
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  // ReactFlow handlers for changes and connections
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

  // Handle the roadmap generation using OpenAI
  const handleGenerateRoadmap = async () => {
    setLoading(true);
    try {
      const prompt = `Generate a roadmap based on the provided project details.`; // Modify the prompt as needed
      const generatedRoadmap = await generateRoadmap(prompt); // Call your OpenAI function

      // Update roadmap text and add new nodes to the flow
      setRoadmap(generatedRoadmap);

      // Create new nodes based on the roadmap (for example purposes, using a placeholder)
      const newNodes = generatedRoadmap
        .split('\n') // Assuming roadmap is split by new lines
        .map((step, index) => ({
          id: (index + 2).toString(), // Unique node id
          data: { label: step }, // Label is the step text
          position: { x: 100 * (index + 1), y: 100 * (index + 1) },
        }));
      
      // Update nodes with the newly generated roadmap steps
      setNodes((nds) => [...nds, ...newNodes]);
    } catch (error) {
      setRoadmap('Error generating roadmap');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-gray-200 flex flex-col">
        <div className="text-xl font-bold p-4 bg-gray-900 text-center">Project Scoping Tool</div>
        <nav className="flex-1 px-4 py-2 space-y-2">
          <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">Dashboard</a>
          <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">Manage Projects</a>
          <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">Settings</a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-md p-4">
          <h1 className="text-xl font-bold text-gray-800">Generate Your Project Roadmap</h1>
        </header>

        {/* Content Area */}
        <main className="flex-1 p-6 bg-gray-100 space-y-8"> {/* Added space between sections */}
          {/* Button to Generate Roadmap */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center mb-8">
            <button
              onClick={handleGenerateRoadmap}
              className="w-full bg-blue-600 text-white py-4 px-8 rounded-md text-lg font-bold hover:bg-blue-700 mb-8"
            >
              {loading ? 'Generating...' : 'Generate Roadmap'}
            </button>
          </div>

          {/* Generated Roadmap Text */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Generated Roadmap</h2>
            <div className="mt-4 text-lg">
              {loading ? (
                <p>Loading roadmap...</p>
              ) : (
                <pre className="text-gray-800 whitespace-pre-wrap text-xl">
                  {roadmap || 'No roadmap generated yet.'}
                </pre>
              )}
            </div>
          </div>

          {/* Visual Roadmap using ReactFlow */}
          <div className="bg-white p-6 rounded-lg shadow-lg" style={{ height: '400px' }}>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Visual Roadmap</h2>
            <ReactFlow
              nodes={nodes}
              onNodesChange={onNodesChange}
              edges={edges}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              fitView
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

export default Dashboard;
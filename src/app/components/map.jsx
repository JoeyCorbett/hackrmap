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
  backgroundColor: '#111827'
};

const Map = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const [activeNode, setActiveNode] = useState(null);

  const onNodesChange = useCallback((changes) => setNodes((nds) => applyNodeChanges(changes, nds)), []);
  const onEdgesChange = useCallback((changes) => setEdges((eds) => applyEdgeChanges(changes, eds)), []);
  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

  const onNodeClick = useCallback((event, node) => {
    setActiveNode(node);
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

    setNodes((nds) => [...nds, newNode]);
  };

  console.log("++++++++++++++++++", activeNode)
  
  return (
      <main className="h-screen w-screen relative"> {/* Added relative positioning */}
          {/* {nodes.length === 0 && <Loading />}  */}
          {/* Added loading animation when nodes are empty */}
          <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={{ customNode: CustomNode }}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onNodeClick={onNodeClick}
            fitView
            fitViewOptions={{ padding: .5 }}
            style={rfStyle}
          >
            <Background />
            <Controls />
          </ReactFlow>


          {/* NOOOOTTTTTEEEE */}
          <button
            onClick={onAddNode}
            style={{ position: 'absolute', top: 10, right: 10, zIndex: 10 }}
          >
            Add Node
          </button>
        {activeNode && (
          <div className="">
            <SidePanel node={activeNode} onClose={closePanel} />
          </div>
        )}
      </main>
  );
};

export default Map;
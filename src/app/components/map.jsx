import React, { useState, useCallback } from 'react';
import Loading from '../components/loader';
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
        {activeNode && (
          <div className="">
            <SidePanel node={activeNode} onClose={closePanel} />
          </div>
        )}
      </main>
  );
};

export default Map;
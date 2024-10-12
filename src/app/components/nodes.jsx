
import React from 'react';
import NodeContainer from './customNode';
import { initialNodes } from './initialNodes';

const Nodes = () => {
  
  return (
    <NodeContainer nodes={initialNodes} />
  )
}

export default Nodes;
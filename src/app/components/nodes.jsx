import NodeFlow from './nodeFlow';
import { initialNodes } from './initialNodes'; // Ensure this path is correct

const Nodes = () => {
  return (
    <div id='sidePanel-container'>
      <NodeFlow nodes={initialNodes} />
    </div>
  );
};

export default Nodes;
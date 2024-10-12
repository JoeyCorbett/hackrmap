import NodeFlow from './nodeFlow';
import { initialNodes } from './initialNodes'; // Ensure this path is correct

const App = () => {
  return (
    <div>
      <NodeFlow nodes={initialNodes} />
    </div>
  );
};

export default Nodes;
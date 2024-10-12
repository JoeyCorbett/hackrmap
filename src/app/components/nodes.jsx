import { initialNodes } from './initialNodes'; // Ensure this path is correct

const Nodes = () => {

  return (
    <div className="flex">
      <div className="flex-1">
        {initialNodes?.map((node) => (
          <CustomNode
            key={node.id}
            data={node}
            isConnectable={true}
            onClick={handleNodeClick}
          />
        ))}
      </div>

    </div>
  );
};

export default Nodes;

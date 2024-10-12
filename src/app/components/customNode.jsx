import React, { memo } from "react";
import { Handle, Position } from "@xyflow/react";

const CustomNode = memo(({ data, isConnectable }) => {
  return (
    <>
      <Handle
        type="target"
        position={Position.Top}
        style={{ background: "#555" }}
        isConnectable={isConnectable}
      />
      <div className="flex flex-col p-2 bg-gray-200 rounded shadow hover:bg-gray-300">
        <span className="font-bold cursor-pointer">{data.label}</span>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id="a"
        style={{ top: 10, background: "#555" }}
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="b"
        style={{ bottom: 10, top: "auto", background: "#555" }}
        isConnectable={isConnectable}
      />
    </>
  );
});

export default CustomNode;

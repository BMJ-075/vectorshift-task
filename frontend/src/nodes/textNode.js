import { useState, useEffect, useRef } from "react";
import { Handle, Position } from "reactflow";
import BaseNodeWrapper from "../components/baseNodesWrapper";
import { InputField } from "../components/inputField";
import { useStore } from "../store";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");

  const addNode = useStore((s) => s.addNode);
  const getNodeID = useStore((s) => s.getNodeID);
  const onConnect = useStore((s) => s.onConnect);
  const getReactFlowInstance = useStore((s) => s.getReactFlowInstance);
  const getNodeById = useStore((s) => s.getNodeById);
  const nodes = useStore((s) => s.nodes);

  const createdVars = useRef(new Set());

  useEffect(() => {
    const regex = /\{\{([^}]+)\}\}/g;
    let match;

    while ((match = regex.exec(currText)) !== null) {
      const varName = match[1].trim();

      if (createdVars.current.has(varName)) continue;

      const reactFlowInstance = getReactFlowInstance();
      if (!reactFlowInstance) continue;

      const currentNode = getNodeById(id);
      if (!currentNode) continue;

      const newId = getNodeID("customVariable");

      const position = {
        x: currentNode.position.x - 250,
        y: currentNode.position.y + Math.random() * 100,
      };

      const newNode = {
        id: newId,
        type: "customVariable",
        position,
        data: {
          inputName: varName,
          inputType: "Text",
        },
      };

      addNode(newNode);

      onConnect({
        source: newId,
        sourceHandle: `${newId}-value`,
        target: id,
        targetHandle: `${id}-output`, // adjust if needed
      });

      createdVars.current.add(varName);
    }
  }, [
    currText,
    id,
    addNode,
    getNodeID,
    onConnect,
    getReactFlowInstance,
    getNodeById,
  ]);

  return (
    <BaseNodeWrapper label="Text">
      <Handle type="target" position={Position.Left} id={`${id}-input`} />
      <InputField
        label="Text"
        value={currText}
        onChange={(e) => setCurrText(e.target.value)}
      />
      <Handle type="source" position={Position.Right} id={`${id}-output`} />
    </BaseNodeWrapper>
  );
};

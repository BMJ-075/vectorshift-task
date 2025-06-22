import { Handle, Position } from "reactflow";
import BaseNodeWrapper from "../components/baseNodesWrapper";

export const LLMNode = ({ id }) => {
  return (
    <BaseNodeWrapper label="LLM">
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-system`}
        style={{ top: `${100 / 3}%` }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-prompt`}
        style={{ top: `${200 / 3}%` }}
      />
      <div>This is an LLM.</div>
      <Handle type="source" position={Position.Right} id={`${id}-response`} />
    </BaseNodeWrapper>
  );
};

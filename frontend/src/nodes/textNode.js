import { useState } from "react";
import { Handle, Position } from "reactflow";
import BaseNodeWrapper from "../components/baseNodesWrapper";
import { InputField } from "../components/inputField";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");

  return (
    <BaseNodeWrapper label="Text">
      <InputField
        label="Text"
        value={currText}
        onChange={(e) => setCurrText(e.target.value)}
      />
      <Handle type="source" position={Position.Right} id={`${id}-output`} />
    </BaseNodeWrapper>
  );
};

// nodes/VariableNode.js

import { useState } from "react";
import { Handle, Position } from "reactflow";
import BaseNodeWrapper from "../components/baseNodesWrapper";
import { InputField } from "../components/inputField";
import { useStore } from "../store";

export const VariableNode = ({ id, data }) => {
  console.log({ id, data });
  const [name, setName] = useState(
    data?.inputName || id.replace("customVariable-", "variable")
  );
  const [value, setValue] = useState(data?.value || "");

  const updateNodeField = useStore((state) => state.updateNodeField);

  const handleValueChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    updateNodeField(id, "value", newValue);
  };

  return (
    <BaseNodeWrapper label={`Variable: ${name}`}>
      <InputField label="Value" value={value} onChange={handleValueChange} />
      <Handle type="source" position={Position.Right} id={`${id}-value`} />
    </BaseNodeWrapper>
  );
};

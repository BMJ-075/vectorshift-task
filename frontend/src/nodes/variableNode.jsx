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
    <BaseNodeWrapper
    label={`Variable: ${name}`}
    style={{
      background: "linear-gradient(135deg, rgba(102, 126, 234, 0.7) 0%, rgba(118, 75, 162, 0.7) 100%)",
      boxShadow: "0 8px 32px rgba(102, 126, 234, 0.3)",
      borderRadius: "8px",
      color: "#333333",
      fontWeight: 500,
      backdropFilter: "blur(10px)",
      transition: "all 0.2s ease",
      padding:"8px"
    }}
  >
    <InputField label="Value" value={value} onChange={handleValueChange} />
    <Handle type="source" position={Position.Right} id={`${id}-value`} />
  </BaseNodeWrapper>
  
  );
};

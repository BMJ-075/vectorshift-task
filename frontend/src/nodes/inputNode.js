import { useState } from "react";
import { Handle, Position } from "reactflow";
import BaseNodeWrapper from "../components/baseNodesWrapper";
import { InputField } from "../components/inputField";
import { SelectField } from "../components/selectField";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [inputType, setInputType] = useState(data.inputType || "Text");

  return (
    <BaseNodeWrapper label="Input">
      <InputField
        label="Name"
        value={currName}
        onChange={(e) => setCurrName(e.target.value)}
      />
      <SelectField
        label="Type"
        value={inputType}
        onChange={(e) => setInputType(e.target.value)}
        options={["Text", "File"]}
      />
      <Handle type="source" position={Position.Right} id={`${id}-value`} />
    </BaseNodeWrapper>
  );
};

import { useState } from "react";
import { Handle, Position } from "reactflow";
import BaseNodeWrapper from "../components/baseNodesWrapper";
import { InputField } from "../components/inputField";
import { SelectField } from "../components/selectField";

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );
  const [outputType, setOutputType] = useState(data.outputType || "Text");

  return (
    <BaseNodeWrapper label="Output">
      <Handle type="target" position={Position.Left} id={`${id}-value`} />
      <InputField
        label="Name"
        value={currName}
        onChange={(e) => setCurrName(e.target.value)}
      />
      <SelectField
        label="Type"
        value={outputType}
        onChange={(e) => setOutputType(e.target.value)}
        options={["Text", "Image"]}
      />
    </BaseNodeWrapper>
  );
};

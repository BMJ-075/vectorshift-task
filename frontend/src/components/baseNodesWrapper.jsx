import { memo } from "react";

const BaseNodeWrapper = memo(({ label, children, style = {} }) => {
  return (
    <div
      style={{
        width: 200,
        height: "auto",
        border: "1px solid black",
        padding: 8,
        ...style,
      }}
    >
      <div style={{ marginBottom: 4, fontWeight: "bold" }}>{label}</div>
      {children}
    </div>
  );
});

export default BaseNodeWrapper;

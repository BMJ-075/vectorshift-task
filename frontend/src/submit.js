import { useStore } from "./store";
import { shallow } from "zustand/shallow";

export const SubmitButton = () => {
  const { nodes, edges } = useStore(
    (state) => ({
      nodes: state.nodes,
      edges: state.edges,
    }),
    shallow
  );

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/pipelines/parse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nodes: nodes.map((n) => ({ id: n.id })),
          edges: edges.map((e) => ({ source: e.source, target: e.target })),
        }),
      });

      const data = await response.json();

      alert(
        `✅ Pipeline Summary:\n\nNodes: ${data.num_nodes}\nEdges: ${
          data.num_edges
        }\nIs DAG: ${data.is_dag ? "Yes ✅" : "No ❌"}`
      );
    } catch (err) {
      console.error("Error submitting pipeline:", err);
      alert("Something went wrong while submitting the pipeline.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

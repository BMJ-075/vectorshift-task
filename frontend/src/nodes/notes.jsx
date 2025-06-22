import { useState, useEffect } from "react";
import { Handle, Position } from "reactflow";
import BaseNodeWrapper from "../components/baseNodesWrapper";
import { InputField } from "../components/inputField";
import { useStore } from "../store";
import { FaCross, FaTimes } from "react-icons/fa";

export const NotesNode = ({ id, data }) => {
  const [noteText, setNoteText] = useState(data?.note || "");
  const updateNodeField = useStore((state) => state.updateNodeField);

  useEffect(() => {
    updateNodeField(id, "note", noteText);
  }, [noteText]);

  return (
    <BaseNodeWrapper
      label="Notes"
      style={{
        background:
          "linear-gradient(135deg, rgba(153, 101, 21, 0.9) 0%, rgba(102, 75, 0, 0.9) 100%)",
        boxShadow: "0 8px 32px rgba(102, 126, 234, 0.3)",
        borderRadius: "8px",
        textColor: "black",
        fontWeight: 500,
        backdropFilter: "blur(10px)",
        transition: "all 0.2s ease",
        padding: "8px",
      }}
    >
      <InputField
        label="Note"
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
        placeholder="Type your note here..."
      />
    </BaseNodeWrapper>
  );
};

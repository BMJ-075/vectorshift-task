export const InputField = ({ label, value, onChange }) => (
  <label style={{ display: "block", marginBottom: 4 }}>
    {label}:
    <textarea
      type="text"
      value={value}
      onChange={onChange}
      style={{ marginLeft: 4 }} className="custom-text"
    />
  </label>
);

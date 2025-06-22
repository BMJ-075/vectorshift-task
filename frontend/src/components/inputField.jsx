export const InputField = ({ label, value, onChange }) => (
  <label style={{ display: "block", marginBottom: 4 }}>
    {label}:
    <input
      type="text"
      value={value}
      onChange={onChange}
      style={{ marginLeft: 4 }}
    />
  </label>
);

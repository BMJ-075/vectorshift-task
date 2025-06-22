export const SelectField = ({ label, value, onChange, options }) => (
  <label style={{ display: "block", marginBottom: 4 }}>
    {label}:
    <select value={value} onChange={onChange} style={{ marginLeft: 4 }}>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </label>
);

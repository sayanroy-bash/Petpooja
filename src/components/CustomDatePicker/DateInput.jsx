

const DateInput = ({ label, value, onChange }) => (
  <div style={{ marginBottom: "10px" }}>
    <label>{label}:</label>
    <input
      type="date"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{ marginLeft: "10px" }}
    />
  </div>
);

export default DateInput;

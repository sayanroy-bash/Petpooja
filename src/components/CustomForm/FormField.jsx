
import ValidationMessage from "./ValidationMessage.jsx";

const FormField = ({ config, value, error, onChange }) => {
  const { fieldType, label, placeholder, validation, options } = config;

  const handleValidation = (value) => {
    if (validation.required && !value) return `${label} is required`;
    if (validation.minLength && value.length < validation.minLength)
      return `${label} must be at least ${validation.minLength} characters`;
    if (validation.pattern && !validation.pattern.test(value))
      return `Invalid ${label}`;
    return "";
  };

  const handleChange = (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const error = handleValidation(value);
    onChange(label, value, error);
  };

  return (
    <div>
      <label>{label}</label>
      {fieldType === "text" || fieldType === "email" ? (
        <input
          type={fieldType}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
      ) : fieldType === "select" ? (
        <select value={value} onChange={handleChange}>
          {options.map((opt, idx) => (
            <option key={idx} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : null}
      {error && <ValidationMessage message={error} />}
    </div>
  );
};

export default FormField;

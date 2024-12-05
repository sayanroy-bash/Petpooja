import { useReducer } from "react";
import FormField from "./FormField";
import ValidationMessage from "./ValidationMessage.jsx";

const initialState = { formData: {}, errors: {} };

const formReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        formData: { ...state.formData, [action.field]: action.value },
        errors: { ...state.errors, [action.field]: action.error },
      };
    case "RESET_FORM":
      return initialState;
    default:
      return state;
  }
};

const FormContainer = ({ formConfig }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (field, value, error) => {
    dispatch({ type: "UPDATE_FIELD", field, value, error });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", state.formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {formConfig.map((fieldConfig, index) => (
        <FormField
          key={index}
          config={fieldConfig}
          value={state.formData[fieldConfig.label] || ""}
          error={state.errors[fieldConfig.label]}
          onChange={handleChange}
        />
      ))}
      <button type="submit">Submit</button>
      <button type="reset" onClick={() => dispatch({ type: "RESET_FORM" })}>
        Reset
      </button>
    </form>
  );
};

export default FormContainer;

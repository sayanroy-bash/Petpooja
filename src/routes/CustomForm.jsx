
import FormContainer from "../components/CustomForm/FormContainer";

const CustomForm = () => {
  const formConfig = [
    {
      fieldType: "text",
      label: "Name",
      placeholder: "Enter your name",
      validation: { required: true, minLength: 2 },
      defaultValue: "",
    },
    {
      fieldType: "email",
      label: "Email",
      placeholder: "Enter your email",
      validation: { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
      defaultValue: "",
    },
    {
      fieldType: "select",
      label: "Country",
      placeholder: "Select your country",
      options: ["USA", "UK", "India"],
      validation: { required: true },
      defaultValue: "India",
    },
    {
      fieldType: "checkboxGroup",
      label: "Interests",
      options: ["Coding", "Reading", "Gaming"],
      validation: {},
      defaultValue: [],
    },
    {
      fieldType: "button",
      label: "",
      placeholder: "",
      validation: {},
      defaultValue: "",
    },
  ];

  return <FormContainer formConfig={formConfig} />;
};

export default CustomForm;

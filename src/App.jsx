import CustomizedHook from "./AutoComplete";

const validationConfig = {
  singapore: {
    type: "regex",
    pattern: /^[a-zA-Z\s]*$/, // Alphabets and spaces only
  },
  india: {
    type: "length",
    minLength: 4, // At least 4 characters
  },
  italy: {
    type: "combined",
    regex: /^[a-zA-Z]{3,}$/, // At least 3 alphabets
    minLength: 3,
  },
};

function App() {
  return <CustomizedHook validationConfig={validationConfig} />;
}

export default App;

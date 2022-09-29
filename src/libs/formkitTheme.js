const buttonClassification = {
  wrapper: "w-fit",
  outer: "w-fit",
  input:
    "inline-flex items-center justify-center border border-gray-400 font-medium shadow-sm focus:outline-none focus:ring-2  focus:ring-indigo-500 focus:ring-offset-2",
};
const boxClassification = {
  fieldset: "max-w-md border border-gray-400 rounded-md px-2 pb-1",
  legend: "font-bold text-sm",
  wrapper: "flex items-center mb-1 cursor-pointer",
  help: "mb-2",
  input:
    "form-check-input appearance-none h-5 w-5 mr-2 border shadow-sm border-gray-500 rounded-sm bg-white checked:bg-blue-500 focus:outline-none focus:ring-0 transition duration-200",
  label: "text-sm text-gray-700 mt-1",
};

// export our definitions using our above
// templates and declare one-offs and
// overrides as needed.
export default {
  // the global key will apply to all inputs

  button: buttonClassification,
  checkbox: boxClassification,
};

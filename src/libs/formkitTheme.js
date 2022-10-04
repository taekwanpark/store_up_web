// Create some re-useable definitions because
// many input types are identical in how
// we want to style them.
const textClassification = {
  wrapper: "flex items-center",
  label: "inline-block font-base text-normal formkit-invalid:text-red-500 w-44",
  inner: `
    w-full
    border
    border-gray-400
    formkit-invalid:border-red-500
    rounded-lg
    overflow-hidden
    focus-within:border-indigo-500
  `,
  input:
    "w-full px-3 py-3 border-none text-base text-gray-700 placeholder-gray-400",
};
const boxClassification = {
  fieldset: "max-w-md border border-gray-400 rounded-md px-2 pb-1",
  legend: "font-bold text-sm",
  wrapper: "flex items-center cursor-pointer",
  help: "text-normal ml-7 whitespace-nowrap",
  inner: "flex items-center",
  label: "text-normal font-medium text-gray-400 mt-[-3px]",
  input:
    "form-check-input appearance-none h-5 w-5 mr-2 border border-gray-400 rounded-full bg-white checked:bg-indigo-500 focus:outline-none focus:ring-0 transition duration-200",
};
const buttonClassification = {
  wrapper: "w-full h-full",
  outer: "w-full h-full",
  input:
    "h-full border border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
};

// export our definitions using our above
// templates and declare one-offs and
// overrides as needed.
export default {
  // the global key will apply to all inputs
  global: {
    outer: "formkit-disabled:opacity-50",
    help: "text-gray-400 mt-1",
    messages: "list-none p-0 mt-1 mb-0",
    message: "text-red-500 mb-1 text-xs",
  },
  button: buttonClassification,
  color: {
    label: "block mb-1 font-bold text-sm",
    input:
      "w-16 h-8 appearance-none cursor-pointer border border-gray-300 rounded-md mb-2 p-1",
  },
  date: textClassification,
  "datetime-local": textClassification,
  checkbox: boxClassification,
  email: textClassification,
  file: {
    label: "block mb-1 font-bold text-sm",
    inner: "max-w-md cursor-pointer",
    input:
      "text-gray-600 text-sm mb-1 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-blue-500 file:text-white hover:file:bg-blue-600",
    noFiles: "block text-gray-800 text-sm mb-1",
    fileItem: "block flex text-gray-800 text-sm mb-1",
    fileRemove: "ml-auto text-blue-500 text-sm",
  },
  month: textClassification,
  number: textClassification,
  password: textClassification,
  radio: {
    ...boxClassification,
    input: boxClassification.input.replace("rounded-sm", "rounded-full"),
  },
  range: {
    inner: "max-w-md",
    input:
      "form-range appearance-none w-full h-2 p-0 bg-gray-200 rounded-full focus:outline-none focus:ring-0 focus:shadow-none",
  },
  search: textClassification,
  select: textClassification,
  submit: buttonClassification,
  tel: textClassification,
  text: textClassification,
  textarea: {
    ...textClassification,
    input:
      "block w-full h-32 px-3 border-none text-base text-gray-700 placeholder-gray-400 focus:shadow-outline",
  },
  time: textClassification,
  url: textClassification,
  week: textClassification,
};

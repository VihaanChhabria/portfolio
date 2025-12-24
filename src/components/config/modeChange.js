const env = {
  MODE: import.meta.env.VITE_MODE || "general",
};

const modeChange = (medicineCase, engineeringCase, generalCase) => {
  let returnCase = null;
  switch (env.MODE) {
    case "medicine":
      returnCase = medicineCase;
      break;
    case "engineering":
      returnCase = engineeringCase;
      break;
    case "general":
      returnCase = generalCase;
      break;

    default:
      break;
  }

  return returnCase;
};

export default modeChange;

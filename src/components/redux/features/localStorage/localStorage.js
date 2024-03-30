//get  data from localStorage
export const loadState = () => {
  try {
    const loadState = localStorage.getItem("tasks");
    if (loadState === null) {
      return undefined;
    }
    return JSON.parse(loadState);
  } catch (err) {
    console.log("Error message", err);
    return undefined;
  }
};

// Save data on the local storage.
export const saveState = (state) => {
  try {
    // console.log(state);
    const saveData = JSON.stringify(state);
    localStorage.setItem("tasks", saveData);
  } catch (err) {
    // Handle errors
    console.log("Error message", err);
  }
};

export const validateForm = (data) => {
  for (const key in data) {
    if (data[key].trim() === "") {
      return false;
    }
  }
  return true;
};

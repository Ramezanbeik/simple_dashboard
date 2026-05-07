export const isEmptyOrNull = (value) => {
  const pureValue = typeof value === "string" ? value.trim() : value;
  return pureValue === "" || pureValue === null || pureValue === undefined;
};
export const createThrowExeption = ({ value, message, cause }) => {
  if (isEmptyOrNull(value)) {
    throw new Error(message, {
      cause: cause,
    });
  }
};
export const createUrl = ({ apiPath, param }) => {
  if (isEmptyOrNull(param)) return apiPath;
  return `${apiPath}/${param}`;
};

export const setLocalStorage = ({ key, value }) => {
  console.log(key);

  createThrowExeption({
    value: key,
    message: "Please Provide key For Set Data in Local Storage",
    cause: "Local Storage",
  });
  createThrowExeption({
    value: value,
    message: "Please Provide value Object For Set Data in Local Storage",
    cause: "Local Storage",
  });
  localStorage.setItem(key, JSON.stringify(value));
};
export const getLocalStorage = ({ key }) => {
  createThrowExeption({
    value: key,
    message: "Please Provide key For Get Data From Local Storage",
    cause: "Local Storage",
  });
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : data;
};
export const removeItemLocalStorage = ({ key }) => {
  createThrowExeption({
    value: key,
    message: "Please Provide key For Remove Data From Local Storage",
    cause: "Local Storage",
  });
  localStorage.removeItem(key);
};

export const setSession = () => {};
export const getSession = () => {};
export const removeSession = () => {};

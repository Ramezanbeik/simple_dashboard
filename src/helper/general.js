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
export const InitialLocalStorage = ({ key }) => {
  createThrowExeption({
    value: key,
    message: "Please Provide key For Get Data From Local Storage",
    cause: "Local Storage",
  });
  const existed = getLocalStorage({ key });
  if (!existed) {
    setLocalStorage({ key, value: [] });
  }
};
export const removeItemLocalStorage = ({ key }) => {
  createThrowExeption({
    value: key,
    message: "Please Provide key For Remove Data From Local Storage",
    cause: "Local Storage",
  });
  localStorage.removeItem(key);
};
export const setNewKeyToExistedKeyLocalStoage = ({
  existedKey,
  newKey,
  newValue,
}) => {
  const findExistedKey = getLocalStorage({ key: existedKey });
  if (findExistedKey) {
    let createdNewValue = null;
    //type of Existed Key is Array
    if (Array.isArray(findExistedKey)) {
      if (findExistedKey.length) {
        let isExist = false;

        findExistedKey.forEach((user) => {
          if (Object.keys(user).includes(newKey)) isExist = true;
        });
        if (!isExist)
          createdNewValue = [{ [newKey]: newValue }, ...findExistedKey];
      } else createdNewValue = [{ [newKey]: newValue }];
    }
    //type of Existed Key is Object
    else {
      createdNewValue = { [newKey]: newValue, ...findExistedKey };
    }
    createdNewValue &&
      setLocalStorage({ key: existedKey, value: createdNewValue });
  } else
    throw new Error(`Can Not Find ${existedKey} in Local Storage`, {
      cause: "Local Storage",
    });
};

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
export const flatArrayObjectToArray = ({ sourceArray, key }) => {
  let flatArray = [];
  sourceArray.forEach((element) => {
    const itemKeys = Object.keys(element);
    const propertykeys = Object.keys(element[itemKeys[0]]);
    if (!propertykeys.includes(key)) {
      throw new Error(`"${key}" key Provider is Not include property Object`, {
        cause: "flatArrayObjectToArray",
      });
    }
    const data = element[itemKeys[0]][key];
    flatArray.push(data);
  });
  return flatArray;
};

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

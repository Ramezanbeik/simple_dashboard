import { LOCALSTORAGE, SESSIONSTORAGE } from "../constant/storageConstant";
import { createThrowExeption } from "./generalHelper";

const timeOut = 10;

const validateTypeStorage = ({ typeStorage }) => {
  if (
    !(
      typeStorage.toLowerCase() !== LOCALSTORAGE ||
      typeStorage.toLowerCase() !== SESSIONSTORAGE
    )
  ) {
    throw new Error("type storge should be on of the local or session", {
      cause: `Storgae`,
    });
  }
};

export const setStorage = async ({ typeStorage, key, value }) => {
  const message = `Please Provide key For Set Data in ${typeStorage} Storage`;
  const cause = `${typeStorage} Storage`;
  const valueStorage =
    typeof value === "object" ? JSON.stringify(value) : value;
  createThrowExeption({ value: key, message, cause });
  createThrowExeption({ value: value, message, cause });
  validateTypeStorage({ typeStorage });
  return await new Promise((resolve, reject) => {
    typeStorage === LOCALSTORAGE
      ? localStorage.setItem(key, valueStorage)
      : sessionStorage.setItem(key, valueStorage);
    setTimeout(() => {
      resolve({
        message: `save ${key} in ${typeStorage} Storage`,
        isSuccess: true,
      });
      reject({
        message: `can not save ${key} in ${typeStorage} Storage`,
        isSuccess: false,
      });
    }, timeOut);
  });
};
export const getStorage = async ({ typeStorage, key }) => {
  const message = `Please Provide key For Set Data in ${typeStorage} Storage`;
  const cause = `${typeStorage} Storage`;
  createThrowExeption({ value: key, message, cause });
  const data =
    typeStorage.toLowerCase() === LOCALSTORAGE
      ? localStorage.getItem(key)
      : sessionStorage.getItem(key);

  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: JSON.parse(data),
        isSuccess: true,
        msg: `get data ${key} from ${typeStorage} Storage is Success`,
      });
    }, timeOut);
  });
};
export const initialStorage = async ({ typeStorage, key, value }) => {
  const message = `Please Provide key For Set Data in ${typeStorage} Storage`;
  const cause = `${typeStorage} Storage`;
  createThrowExeption({
    value: key,
    message,
    cause,
  });
  validateTypeStorage({ typeStorage });
  const { data } = await getStorage({ typeStorage, key });
  if (!data) {
    await setStorage({ typeStorage, key, value });
  }
};
export const removeItemStorage = async ({ typeStorage, key }) => {
  const message = `Please Provide key For Set Data in ${typeStorage} Storage`;
  const cause = `${typeStorage} Storage`;
  createThrowExeption({
    value: key,
    message,
    cause,
  });
  typeStorage === LOCALSTORAGE
    ? localStorage.removeItem(key)
    : sessionStorage.removeItem(key);
};
export const setNewKeyToExistedKeyStoage = async ({
  typeStorage,
  existedKey,
  newKey,
  newValue,
}) => {
  const { data: findExistedKey } = await getStorage({
    typeStorage,
    key: existedKey,
  });
  if (findExistedKey) {
    let createdNewValue = null;
    //type of Existed Key is Array
    if (Array.isArray(findExistedKey)) {
      let isExist = false;
      findExistedKey.forEach((user) => {
        if (Object.keys(user).includes(newKey)) isExist = true;
      });
      if (!isExist)
        createdNewValue = [...findExistedKey, { [newKey]: newValue }];
    } else {
      createdNewValue = { ...findExistedKey, [newKey]: newValue };
    }
    //type of Existed Key is Object
    createdNewValue &&
      setStorage({ typeStorage, key: existedKey, value: createdNewValue });
  } else
    throw new Error(`Can Not Find ${existedKey} in Local Storage`, {
      cause: "Local Storage",
    });
};

import axios from "axios";
import { createThrowExeption, createUrl } from "../helper/general";
const instanceAxios = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 5000,
});
instanceAxios.interceptors.request.use(
  function (config) {
    // Do something before the request is sent
    console.log({ config });
    return config;
  },
  function (error) {
    // Do something with the request error
    return Promise.reject(error);
  },
);

instanceAxios.interceptors.response.use(
  function (response) {
    // Any status code that lies within the range of 2xx causes this function to trigger
    // Do something with response data
    console.log({ response });

    return response;
  },
  function (error) {
    console.log({ error });
    // Any status codes that fall outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);
export const getServer = async ({
  apiPath,
  param = null,
  headers = {},
  queryString = {},
}) => {
  createThrowExeption({
    value: apiPath,
    message: "when Call API URL is Required.",
    cause: "error Service API",
  });
  const { get } = instanceAxios;
  return await get(createUrl({ apiPath, param }), {
    params: { ...queryString },
    headers: { ...headers },
  });
};

export const postServer = async () => {};

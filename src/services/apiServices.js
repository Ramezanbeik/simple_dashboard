import axios from "axios";
import { createThrowExeption, createUrl } from "../helper/general";
import { toast } from "@contentstack/react-toastify";

const instanceAxios = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 5000,
});
instanceAxios.interceptors.request.use(
  function (config) {
    // Do something before the request is sent
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

    return response;
  },
  function (error) {
    // Any status codes that fall outside the range of 2xx cause this function to trigger
    // Do something with response error
    const { code } = error;
    switch (code) {
      case "ERR_NETWORK":
        console.log("show Toast");

        toast("Network Error. Failed Connect To Server", {
          type: "error",
          autoClose: true,
          hideProgressBar: true,
          position: "bottom-right",
        });
        break;
      default:
        break;
    }
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

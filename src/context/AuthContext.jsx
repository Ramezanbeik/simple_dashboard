import React, {
  createContext,
  useLayoutEffect,
  useEffect,
  useState,
} from "react";
import { getServer } from "../services/apiServices";
import { USER } from "../constant/apiConstant";
import { getLocalStorage, setLocalStorage } from "../helper/general";
import { CURRENT_USER } from "../constant/localStorageConstant";
export const userContext = createContext();
const AuthContext = ({ children }) => {
  const [state, setStatus] = useState({
    status: "success",
    error: null,
    user: null,
  });
  useLayoutEffect(() => {
    //if User Befor Login And Data Exist in Local Storage Redirect To Home Page
    const currentUser = getLocalStorage({ key: CURRENT_USER });
    if (currentUser) {
      setStatus(currentUser);
    }
  }, []);
  useEffect(() => {
    //After Get Data From API and setData,Data is Set To Local Storage too
    if (state.user) setLocalStorage({ key: CURRENT_USER, value: state });
  }, [state.user]);
  const login = async ({ userName, password }) => {
    //change Status to pending
    setStatus((prevState) => {
      return {
        ...prevState,
        status: "isPending",
      };
    });
    // call Method for get User Data
    const { status, data } = await getServer({
      apiPath: USER,
      queryString: { userName },
    });

    if (
      status === 200 &&
      data.length > 0 &&
      data[0].userName === userName &&
      data[0].pass === password
    ) {
      setStatus({
        user: data[0],
        status: "success",
        error: null,
      });
    } else {
      setStatus({
        user: null,
        status: "falied",
        error: "userName or password is Not Corrected.",
      });
    }
  };
  const logout = () => {
    setStatus({ status: "success", user: null, error: null });
    //TODO:can Remove Detail form Local Storage
  };
  return (
    <userContext.Provider value={{ ...state, login, logout }}>
      {children}
    </userContext.Provider>
  );
};

export default AuthContext;

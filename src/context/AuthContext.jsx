import React, {
  createContext,
  useLayoutEffect,
  useEffect,
  useState,
} from "react";
import { getServer } from "../services/apiServices";
import {
  getLocalStorage,
  InitialLocalStorage,
  setNewKeyToExistedKeyLocalStoage,
} from "../helper/general";
import { CURRENT_USER, USERS } from "../constant/storageConstant";
import { USER_API } from "../constant/apiConstant";
export const userContext = createContext();
const AuthContext = ({ children }) => {
  const [state, setStatus] = useState({
    status: "success",
    error: null,
    user: null,
    shouldBeRredirect: true,
  });
  useLayoutEffect(() => {
    //inital Local Storage
    InitialLocalStorage({ key: USERS });
    //if User Befor Login And Data Exist in Local Storage Redirect To Home Page
    const usersInLocalStotage = getLocalStorage({ key: USERS });
    // console.log({ usersInLocalStotage });
    if (usersInLocalStotage.length >= 1) {
      const userCode = Object.keys(usersInLocalStotage[0]);
      setStatus({
        ...usersInLocalStotage[0][userCode],
        shouldBeRredirect: usersInLocalStotage.length >= 1 ? false : true,
      });
    }
  }, []);
  useEffect(() => {
    //After Get Data From API and setData,Data is Set To Local Storage too
    if (state.user)
      setNewKeyToExistedKeyLocalStoage({
        existedKey: USERS,
        newKey: `${CURRENT_USER}_${state.user.id}`,
        newValue: state,
      });
  }, [state]);
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
      apiPath: USER_API,
      queryString: { userName },
    });

    if (
      status === 200 &&
      data.length > 0 &&
      data[0].userName === userName &&
      data[0].pass === password
    ) {
      setStatus((state) => {
        return {
          ...state,
          user: data[0],
          status: "success",
          error: null,
        };
      });
    } else {
      setStatus((state) => {
        return {
          ...state,
          user: null,
          status: "falied",
          error: "userName or password is Not Corrected.",
        };
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

import React, {
  createContext,
  useLayoutEffect,
  useEffect,
  useState,
} from "react";
import { getServer } from "../services/apiServices";
import {
  getStorage,
  initialStorage,
  setNewKeyToExistedKeyStoage,
} from "../helper/storageHelper";
import {
  CURRENT_USER,
  LOCALSTORAGE,
  SESSIONSTORAGE,
  USERS,
} from "../constant/storageConstant";
import { USER_API } from "../constant/apiConstant";
import { v4 as uuidV4 } from "uuid";
export const userContext = createContext();
const AuthContext = ({ children }) => {
  const [state, setStatus] = useState({
    status: "success",
    error: null,
    user: "",
    isUserHasSession: false,
  });
  useLayoutEffect(() => {
    //inital Storage
    const initialValue = async () => {
      await initialStorage({
        typeStorage: LOCALSTORAGE,
        key: USERS,
        value: [],
      });
      await initialStorage({
        typeStorage: SESSIONSTORAGE,
        key: USERS,
        value: {},
      });
      // await initialStorage({ typeStorage: SESSIONSTORAGE, key: USERS });
      const { data: usersInLocalStorage } = await getStorage({
        typeStorage: LOCALSTORAGE,
        key: USERS,
      });
      if (usersInLocalStorage.length >= 1) {
        const userCode = Object.keys(usersInLocalStorage[0]);
        const { data: usersSession } = await getStorage({
          typeStorage: SESSIONSTORAGE,
          key: USERS,
        });
        let isUserHasSession = !!usersSession?.[userCode];
        setStatus({
          ...usersInLocalStorage[0][userCode],
          isUserHasSession,
        });
      }
    };
    initialValue();
  }, []);
  useEffect(() => {
    //After Get Data From API and setData,Data is Set To Local Storage too
    if (state.user) {
      setNewKeyToExistedKeyStoage({
        typeStorage: LOCALSTORAGE,
        existedKey: USERS,
        newKey: `${CURRENT_USER}_${state.user.id}`,
        newValue: state,
      });
    }
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
      setNewKeyToExistedKeyStoage({
        typeStorage: SESSIONSTORAGE,
        existedKey: USERS,
        newKey: `${CURRENT_USER}_${data[0].id}`,
        newValue: uuidV4(),
      });

      setStatus((prevState) => {
        return {
          ...prevState,
          user: data[0],
          status: "success",
          error: null,
          isUserHasSession: true,
        };
      });
    } else {
      setStatus((prevState) => {
        return {
          ...prevState,
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

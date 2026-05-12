import React, { useEffect, useLayoutEffect, useState } from "react";
import Input from "../component/baseComponent/Input";
import Button from "../component/baseComponent/Button";
import { BUTTON_TYPE } from "../constant/buttonConstatn";
import { useAuth } from "../hooks/useAut";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { HOME_ROUTE } from "../constant/routeConstant";
import { CURRENT_USER, LOCALSTORAGE, USERS } from "../constant/storageConstant";
import LoginUserList from "../component/LoginUsersList";
import {
  getStorage,
  removeKeyFromExistedKeyStoage,
} from "../helper/storageHelper";
import "../css/login-style.css";

const Login = () => {
  const { login, isAuthenticated, isUserHasSession, error, user } = useAuth();

  const [loginValue, setloginValue] = useState({
    previousUserLoggin: [],
    currentUser: null,
    userName: "",
    password: "",
    removeUerFormLocalStorage: null,
  });
  const setValue = (event) => {
    const { id, value } = event.target;
    setloginValue((prevState) => {
      return { ...prevState, [id]: value };
    });
  };
  const submitLogin = (event) => {
    event?.preventDefault();
    login({ userName: loginValue.userName, password: loginValue.password });
  };
  useLayoutEffect(() => {
    const getPreviousUserFormLocalStorage = async () => {
      const { data: previousUserLoggin } = await getStorage({
        typeStorage: LOCALSTORAGE,
        key: USERS,
        isReturnArray: true,
        flatBykey: "user",
      });
      setloginValue((prevState) => {
        return {
          ...prevState,
          previousUserLoggin,
        };
      });
    };
    getPreviousUserFormLocalStorage();
  }, [loginValue.removeUerFormLocalStorage]);
  useEffect(() => {
    user &&
      setloginValue((prevState) => {
        return {
          ...prevState,
          userName: user?.userName,
          password: user?.pass,
          currentUser: user,
        };
      });
  }, [user]);
  const handleOnChangeUser = (user) => {
    setloginValue((prevState) => {
      return {
        ...prevState,
        userName: user.userName,
        password: user.pass,
        currentUser: user,
      };
    });
  };
  const handleOnDeletUser = async (user) => {
    const isRemoved = await removeKeyFromExistedKeyStoage({
      typeStorage: LOCALSTORAGE,
      existedKey: USERS,
      removeKey: `${CURRENT_USER}_${user.id}`,
    });
    isRemoved &&
      setloginValue((prveState) => {
        return {
          ...prveState,
          removeUerFormLocalStorage: !prveState.removeUerFormLocalStorage,
        };
      });
  };
  return (
    <form
      onSubmit={(event) => {
        submitLogin(event);
      }}
      className="login-wraper"
    >
      <div className="login-conrainer">
        <p className="login-title">Login</p>
        <Input
          id="userName"
          label="User Name"
          initValue={loginValue?.userName}
          placeHolder="userName"
          onBlure={(event) => setValue(event)}
          autoFocus
        />
        <Input
          id="password"
          label="Password"
          initValue={loginValue?.password}
          placeHolder="Password"
          onBlure={(event) => setValue(event)}
          type="password"
        />
        {loginValue.previousUserLoggin?.length > 1 && (
          <div className="login-user-list">
            <LoginUserList
              currentUser={loginValue.currentUser}
              users={loginValue.previousUserLoggin}
              onChangeUser={(user) => handleOnChangeUser(user)}
              OnDeleteUser={(user) => handleOnDeletUser(user)}
            />
          </div>
        )}
        <Button
          type={BUTTON_TYPE.INFO}
          onClick={submitLogin}
          disabled={!loginValue?.userName || !loginValue.password}
        >
          Login
        </Button>
        {isAuthenticated && isUserHasSession && (
          <Redirect to={HOME_ROUTE.path} />
        )}
        {error && <p className="error-message">{error}</p>}
      </div>
    </form>
  );
};

export default Login;

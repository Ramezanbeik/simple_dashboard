import React, { useEffect, useState } from "react";
import Input from "../component/baseComponent/Input";
import Button from "../component/baseComponent/Button";
import { BUTTON_TYPE } from "../helper/buttonConstatn";
import { useAuth } from "../hooks/useAut";
import "../css/login-style.css";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { HOME_ROUTE } from "../helper/routeConstant";
const Login = () => {
  const { login, isAuthenticated, isUserHasSession, error, user } = useAuth();
  const [loginValue, setloginValue] = useState({
    userName: "",
    password: "",
  });
  const setValue = (event) => {
    const { id, value } = event.target;
    setloginValue((prevState) => {
      return { ...prevState, [id]: value };
    });
  };
  const submitLogin = (event) => {
    event.preventDefault();
    login({ userName: loginValue.userName, password: loginValue.password });
  };
  useEffect(
    () =>
      user &&
      setloginValue({
        userName: user?.userName,
        password: user?.pass,
      }),
    [user],
  );
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
          initValue={user?.userName ?? ""}
          placeHolder="userName"
          onBlure={(event) => setValue(event)}
          autoFocus
        />
        <Input
          id="password"
          label="Password"
          initValue={user?.pass ?? ""}
          placeHolder="Password"
          onBlure={(event) => setValue(event)}
          type="password"
        />
        <Button
          caption="Login"
          type={BUTTON_TYPE.INFO}
          onClick={submitLogin}
          disabled={!loginValue?.userName || !loginValue.password}
        />
        {isAuthenticated && isUserHasSession && (
          <Redirect to={HOME_ROUTE.path} />
        )}
        {error && <p className="error-message">{error}</p>}
      </div>
    </form>
  );
};

export default Login;

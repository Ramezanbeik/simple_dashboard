import React, { useState } from "react";
import Input from "../component/baseComponent/Input";
import Button from "../component/baseComponent/Button";
import { BUTTON_TYPE } from "../helper/buttonConstatn";
import { useAuth } from "../hooks/useAut";
import "../css/login-style.css";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { HOME_ROUTE } from "../helper/routeConstant";
const Login = () => {
  const { login, isAuthenticated, error } = useAuth();
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
          initValue={loginValue.userName}
          placeHolder="userName"
          onBlure={(event) => setValue(event)}
          isRequired={{ type: "isEmpty", fnValidation: () => {} }}
          autoFocus
        />
        <Input
          id="password"
          label="Password"
          initValue={loginValue.password}
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
        {isAuthenticated && <Redirect to={HOME_ROUTE.path} />}
        {error && <p className="error-message">{error}</p>}
      </div>
    </form>
  );
};

export default Login;

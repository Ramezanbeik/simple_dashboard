import { Route } from "react-router-dom/cjs/react-router-dom";
import Login from "../pages/Login";

export const LOGIN_PATHS = {
  title: "Login ",
  path: "/",
};

export const loginRoute = (
  <Route exact key={25} path={LOGIN_PATHS.path} component={Login} />
);

import { Route } from "react-router-dom";

const PrivateLayout = ({ children, ...props }) => {
  const { isAuthenticated, path } = props;

  return (
    <div className="container-layout_content">
      {isAuthenticated && <Route path={path}>{children}</Route>}
    </div>
  );
};
export default PrivateLayout;

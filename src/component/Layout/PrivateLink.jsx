import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import {
  HOME_ROUTE,
  INVOICES_CATEGORY_PATHS,
  RENTAL_CATEGORY_PATHS,
} from "../../constant/routeConstant";

const PrivateLink = ({ children, ...props }) => {
  const { isAuthenticated } = props;
  return (
    <>
      {isAuthenticated && (
        <div className="container-layout_menu">
          <ul className="menu-list">
            <li>
              <Link to={HOME_ROUTE.path}>{HOME_ROUTE.title}</Link>
            </li>
            <li>
              <Link to={{ pathname: INVOICES_CATEGORY_PATHS.path }}>
                {INVOICES_CATEGORY_PATHS.title}
              </Link>
            </li>
            <li>
              <Link to={RENTAL_CATEGORY_PATHS.path}>
                {RENTAL_CATEGORY_PATHS.title}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default PrivateLink;

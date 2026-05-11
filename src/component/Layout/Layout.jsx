import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import {
  HOME_ROUTE,
  INVOICES_CATEGORY_PATHS,
  RENTAL_CATEGORY_PATHS,
} from "../../constant/routeConstant";
import PrivateLayout from "./PrivateLayout";
import Home from "../Home";
import News from "../News";
import Production from "../Production";
import BaseSample from "../../pages/BaseSample";
import Rentals from "../../pages/Rentals";
import Invoices from "../../pages/Invoices";
import {
  INVOICE_BATCH_PATHS,
  INVOICE_PATHS,
} from "../../constant/InvoiceConstant";
import { LOGIN_PATHS } from "../../constant/LoginConstant";
import { useAuth } from "../../hooks/useAut";
import Invoice from "../Invoices/Invoice";
import Login from "../../pages/Login";
import InvoiceBatch from "../Invoices/InvoiceBatch";
import PrivateLink from "./PrivateLink";
import {
  RENTAL_INVENTORY_PATHS,
  RENTAL_PATHS,
} from "../../constant/RentalConstant";
import Rental from "../Rentals/Rental";
import RentalInventory from "../Rentals/RentalInventory";
const Layout = () => {
  const { isAuthenticated, isUserHasSession } = useAuth();

  const isPrivateAuthenticated = isAuthenticated && isUserHasSession;
  return (
    <>
      {!isPrivateAuthenticated && <Redirect to={LOGIN_PATHS.path} />}
      <div className="container-layout">
        <PrivateLink isAuthenticated={isPrivateAuthenticated} />
        <Switch>
          <PrivateLayout
            path={HOME_ROUTE.path}
            isAuthenticated={isPrivateAuthenticated}
          >
            <BaseSample />
          </PrivateLayout>
          <PrivateLayout
            path={INVOICES_CATEGORY_PATHS.path}
            isAuthenticated={isPrivateAuthenticated}
          >
            <Invoices />
          </PrivateLayout>
          <PrivateLayout
            path={RENTAL_CATEGORY_PATHS.path}
            isAuthenticated={isPrivateAuthenticated}
          >
            <Rentals />
          </PrivateLayout>
          <PrivateLayout path="/home" isAuthenticated={isPrivateAuthenticated}>
            <Home />
          </PrivateLayout>
          <PrivateLayout path="/news" isAuthenticated={isPrivateAuthenticated}>
            <News />
          </PrivateLayout>
          <PrivateLayout
            path="/production"
            isAuthenticated={isPrivateAuthenticated}
          >
            <Production />
          </PrivateLayout>
          <PrivateLayout
            path={INVOICE_PATHS.path}
            isAuthenticated={isPrivateAuthenticated}
          >
            <Invoice />
          </PrivateLayout>
          <PrivateLayout
            path={INVOICE_BATCH_PATHS.path}
            isAuthenticated={isPrivateAuthenticated}
          >
            <InvoiceBatch />
          </PrivateLayout>
          <PrivateLayout
            path={RENTAL_PATHS.path}
            isAuthenticated={isPrivateAuthenticated}
          >
            <Rental />
          </PrivateLayout>
          <PrivateLayout
            path={RENTAL_INVENTORY_PATHS.path}
            isAuthenticated={isPrivateAuthenticated}
          >
            <RentalInventory />
          </PrivateLayout>
          <Route exact path={LOGIN_PATHS.path}>
            <Login />
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default Layout;

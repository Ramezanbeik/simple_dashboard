import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import {
  HOME_ROUTE,
  INVOICES_CATEGORY_PATHS,
  RENTAL_CATEGORY_PATHS,
} from "../../helper/routeConstant";
import PrivateLayout from "./PrivateLayout";
import Home from "../Home";
import News from "../News";
import Production from "../Production";
import BaseSample from "../../pages/BaseSample";
import Rentals from "../../pages/Rentals";
import Invoices from "../../pages/Invoices";
import { INVOICE_BATCH_PATHS, INVOICE_PATHS } from "../../helper/InvoiceRoute";
import { LOGIN_PATHS } from "../../helper/LoginRoute";
import { useAuth } from "../../hooks/useAut";
import Invoice from "../Invoices/Invoice";
import Login from "../../pages/Login";
import InvoiceBatch from "../Invoices/InvoiceBatch";
import PrivateLink from "./PrivateLink";
import { RENTAL_INVENTORY_PATHS, RENTAL_PATHS } from "../../helper/RentalRoute";
import Rental from "../Rentals/Rental";
import RentalInventory from "../Rentals/RentalInventory";
const Layout = () => {
  const { isAuthenticated } = useAuth();
  return (
    <>
      {!isAuthenticated && <Redirect to={LOGIN_PATHS.path} />}
      <div className="container-layout">
        <PrivateLink isAuthenticated={isAuthenticated} />
        <Switch>
          <PrivateLayout
            path={HOME_ROUTE.path}
            isAuthenticated={isAuthenticated}
          >
            <BaseSample />
          </PrivateLayout>
          <PrivateLayout
            path={INVOICES_CATEGORY_PATHS.path}
            isAuthenticated={isAuthenticated}
          >
            <Invoices />
          </PrivateLayout>
          <PrivateLayout
            path={RENTAL_CATEGORY_PATHS.path}
            isAuthenticated={isAuthenticated}
          >
            <Rentals />
          </PrivateLayout>
          <PrivateLayout path="/home" isAuthenticated={isAuthenticated}>
            <Home />
          </PrivateLayout>
          <PrivateLayout path="/news" isAuthenticated={isAuthenticated}>
            <News />
          </PrivateLayout>
          <PrivateLayout path="/production" isAuthenticated={isAuthenticated}>
            <Production />
          </PrivateLayout>
          <PrivateLayout
            path={INVOICE_PATHS.path}
            isAuthenticated={isAuthenticated}
          >
            <Invoice />
          </PrivateLayout>
          <PrivateLayout
            path={INVOICE_BATCH_PATHS.path}
            isAuthenticated={isAuthenticated}
          >
            <InvoiceBatch />
          </PrivateLayout>
          <PrivateLayout
            path={RENTAL_PATHS.path}
            isAuthenticated={isAuthenticated}
          >
            <Rental />
          </PrivateLayout>
          <PrivateLayout
            path={RENTAL_INVENTORY_PATHS.path}
            isAuthenticated={isAuthenticated}
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

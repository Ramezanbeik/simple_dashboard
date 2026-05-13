import { Route } from "react-router-dom/cjs/react-router-dom";
import Rental from "../component/Rentals/Rental";
import RentalInventory from "../component/Rentals/RentalInventory";

export const RENTAL_PATHS = {
  title: "Rental List",
  path: "/rental-list",
};

export const RENTAL_INVENTORY_PATHS = {
  title: "Rental Inentory",
  path: "/rental-inventory",
};
export const rentalRoute = (
  <>
    <Route path={RENTAL_PATHS.path} render={(props) => <Rental {...props} />} />
    <Route
      path={RENTAL_INVENTORY_PATHS.path}
      render={(props) => <RentalInventory {...props} />}
    />
  </>
);

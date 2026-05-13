import Introduction from "../component/Introduction";
import { Link } from "react-router-dom";
import {
  RENTAL_INVENTORY_PATHS,
  RENTAL_PATHS,
} from "../constant/RentalConstant";

const Rentals = () => {
  return (
    <>
      <Introduction
        methodType="Render Method"
        srcPath={[
          "src\\pages\\Rentals.jsx",
          "src\\component\\RentalConstant.js",
        ]}
        description="Befor Click On Link Rental Rental Inventory Please Open Inspect Browser or Press F12"
      />
      <ul>
        <li>
          <Link to={RENTAL_PATHS.path}>{RENTAL_PATHS.title}</Link>
        </li>
        <li>
          <Link to={RENTAL_INVENTORY_PATHS.path}>
            {RENTAL_INVENTORY_PATHS.title}
          </Link>
        </li>
      </ul>
    </>
  );
};
export default Rentals;

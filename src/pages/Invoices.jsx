import Introduction from "../component/Introduction";
import { Link } from "react-router-dom/cjs/react-router-dom";
import {
  INVOICE_BATCH_PATHS,
  INVOICE_PATHS,
} from "../constant/InvoiceConstant";

const Invoices = () => {
  return (
    <>
      <Introduction
        methodType="Component Method"
        srcPath={[
          "src\\pages\\Invoices.jsx",
          "src\\component\\helper\\InvoiceRoute.js",
        ]}
        description="Befor Click On Link Invoice or  Invoice Batch Please Open Inspect Browser or Press F12"
      />
      <ul>
        <li>
          <Link to={INVOICE_PATHS.path}>{INVOICE_PATHS.title}</Link>
        </li>
        <li>
          <Link to={INVOICE_BATCH_PATHS.path}>{INVOICE_BATCH_PATHS.title}</Link>
        </li>
      </ul>
    </>
  );
};
export default Invoices;

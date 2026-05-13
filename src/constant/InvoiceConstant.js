import { Route } from "react-router-dom/cjs/react-router-dom";
import Invoice from "../component/Invoices/Invoice";
import InvoiceBatch from "../component/Invoices/InvoiceBatch";

//invoices/invoice
export const INVOICE_PATHS = {
  title: "Invoice",
  path: "/invoice-list",
};

export const INVOICE_BATCH_PATHS = {
  title: "Invoice Batch",
  path: "/invoice-batch",
};
export const invoiceRoute = (
  <>
    <Route path={INVOICE_PATHS.path} component={Invoice} />
    <Route path={INVOICE_BATCH_PATHS.path} component={InvoiceBatch} />
  </>
);

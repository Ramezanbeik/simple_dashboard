import React, { useMemo } from "react";
import Layout from "./component/Layout/Layout";
import { ToastContainer } from "@contentstack/react-toastify";
import "./css/layout-style.css";
import "./css/normalize.css";
function App() {
  const layout = useMemo(() => <Layout />, []);
  return (
    <>
      {layout}
      <ToastContainer />
    </>
  );
}

export default App;

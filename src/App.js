import React, { useMemo } from "react";
import "./css/layout-style.css";
import "./css/normalize.css";
import Layout from "./component/Layout/Layout";

function App() {
  const layout = useMemo(() => <Layout />, []);
  return <>{layout}</>;
}

export default App;

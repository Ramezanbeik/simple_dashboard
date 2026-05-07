import React from "react";
import Button from "./baseComponent/Button";

const Home = (props) => {
  console.log(props);

  return (
    <>
      <h1>Home Page</h1>
      <Button titleButton="Back to Home" />
    </>
  );
};
export default Home;

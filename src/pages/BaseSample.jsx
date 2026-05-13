import { Link } from "react-router-dom";
import Introduction from "../component/Introduction";
// import { Route, Link } from "react-router-dom";
// import Home from "../component/Home";
// import News from "../component/News";
// import Production from "../component/Production";
const BaseSample = () => {
  return (
    <>
      <Introduction methodType="Base" srcPath="src\pages\BaseSample.jsx" />
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/news">News</Link>
        </li>
        <li>
          <Link to="/production">Production</Link>
        </li>
      </ul>
      {/* <Route path="/home">
        <Home />
      </Route>
      <Route path="/news">
        <News />
      </Route>
      <Route path="/production">
        <Production />
      </Route> */}
    </>
  );
};
export default BaseSample;

import {
    useEffect,
    useState,
  } from "react";
  import { Link } from "react-router-dom";
  import { getAllPatterns } from "../../Service/Pattern.js";
  import MainList from "./MainList.js";
  
  const Main = () => {
    const [patterns, setPatterns] = useState([]);
  
    useEffect(() => {
      getAllPatterns().then((patterns) => {
        setPatterns(patterns);
      });
    }, []);
  
    return (
        <div>
        <h1>Feature 5</h1>
        This is the stateful parent component.
        <hr></hr>

        <Link to="/register">
          <button>Register</button>
        </Link>
        <br />
        <br />
        <Link to="/login">
          <button>Login</button>
        </Link>

        <MainList patterns={patterns} />
      </div>
    );
  };
  
  export default Main;
  
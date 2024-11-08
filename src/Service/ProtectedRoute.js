import React from "react";
import { useNavigate } from "react-router-dom";
import { checkUser } from "../Components/Auth/AuthService.js";
import MainDetail from "../Components/Main/MainDetail.js";

const ProtectedRoute = ({ element: Component}) => {
    console.log("element: ", Component);
    const navigate = useNavigate();
    const goBackHandler = () => {
      navigate("/");
    };
    if (checkUser()) {
      return <MainDetail />;
    } else {
      return (
        <div>
          <p>Unauthorized!</p> <button onClick={goBackHandler}>Go Back.</button>
        </div>
      );
    }
  };
  
  export default ProtectedRoute;
  
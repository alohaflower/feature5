import '../App.css';
import Main from "./Main/Main.js";
import AuthRegister from "./Auth/AuthRegister";
import AuthLogin from "./Auth/AuthLogin";
import ProtectedRoute from "../Service/ProtectedRoute.js";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import MainDetail from "./Main/MainDetail.js";
import {Navigate} from "react-router-dom";

//routing main & detail routes in app
function Components() {
  return (
    <Router>
      <div className="App">
      <Routes>
        <Route path="/" element={<Main />} /> 
        <Route path="/register" element={<AuthRegister />} />
        <Route path="/login" element={<AuthLogin />} />
        <Route 
          path="/:id"
          element={<ProtectedRoute path="/:id" element={MainDetail} />} 
        /> 
       
        {/* Different routes based on the id of the plushie */}
        {/* element={<ProtectedRoute path="/" element={MainDetail} />} */}
      </Routes>
      </div>
    </Router>
  );
}

export default Components;
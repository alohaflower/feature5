import '../App.css';
import Main from "./Main/Main.js";
import Detail from "./Main/MainDetail.js";
import AuthRegister from "./Auth/AuthRegister";
import AuthLogin from "./Auth/AuthLogin";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

//routing main & detail routes in app
function Components() {
  return (
    <Router>
      <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<AuthRegister />} />
        <Route path="/login" element={<AuthLogin />} />
        {/* Different routes based on the id of the plushie */}
        <Route path="/:id" element={<Detail />} />
      </Routes>
      </div>
    </Router>
  );
}

export default Components;
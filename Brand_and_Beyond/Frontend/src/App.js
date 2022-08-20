
import { Route, Routes } from "react-router-dom";

import "./App.css";
import { AdminLogin } from "./Componant/Admin/Admin";
import { AdminPanel } from "./Componant/Admin/AdminPanel";
import Login from "./Componant/Login/Login";
import Register from "./Componant/Register/Register";
import User from "./Componant/User/User";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/user" element={<User/>}></Route>
        <Route path="/admin" element={<AdminLogin/>}></Route>
        <Route path="/adminpanel" element={<AdminPanel/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

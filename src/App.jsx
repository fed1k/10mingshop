import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import AddProduct from "./components/AddProduct";

const App = () => {
  return (
    <>
      <Router>
        <nav className="p-4">
          <NavLink className={({isActive}) => (isActive ? "px-2 border-b border-blue-700 pb-1" : " pb-1 px-2 border-b border-transparent")} to="/">
            Tovarlar
          </NavLink>
          <NavLink className={({isActive}) => (isActive ? "px-2 pb-1 border-b border-blue-700" : "px-2 pb-1 border-b border-transparent")} to="/admin">Qo'shish</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AddProduct />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

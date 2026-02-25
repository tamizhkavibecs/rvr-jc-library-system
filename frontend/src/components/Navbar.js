import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/dashboard">
          📚 RVR JC LIBRARY
        </Link>
        <div className="d-flex align-items-center">
          {user && <span className="text-white me-3">Hi, {user.name}</span>}
          {user?.role === "admin" && (
            <Link className="btn btn-light btn-sm me-2" to="/admin">
              Admin Panel
            </Link>
          )}
          <button onClick={handleLogout} className="btn btn-danger btn-sm">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

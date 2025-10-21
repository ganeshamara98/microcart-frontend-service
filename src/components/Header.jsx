import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">MicroCart</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          {!token && (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">Sign Up</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signin">Sign In</Link>
              </li>
            </>
          )}
          {token && (
            <li className="nav-item">
              <button className="btn btn-outline-light" onClick={handleLogout}>
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;

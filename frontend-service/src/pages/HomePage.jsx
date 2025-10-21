import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { isLoggedIn, logout } from '../utils/auth';

const HomePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/signin');
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <Link className="navbar-brand" to="/">🛍️ MicroCart</Link>

          <div className="ms-auto">
            {!isLoggedIn() ? (
              <>
                <Link to="/signin" className="btn btn-outline-light me-2">Sign In</Link>
                <Link to="/signup" className="btn btn-light">Sign Up</Link>
              </>
            ) : (
              <button onClick={handleLogout} className="btn btn-outline-light">Logout</button>
            )}
          </div>
        </div>
      </nav>

      <div className="container text-center mt-5">
        <h1 className="display-4">Welcome to MicroCart</h1>
        <p className="lead">Your modern ecommerce platform built with microservices.</p>
      </div>
    </div>
  );
};

export default HomePage;

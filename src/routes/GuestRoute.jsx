import React from 'react';
import { Navigate } from 'react-router-dom';
import { isLoggedIn } from '../utils/auth';

const GuestRoute = ({ children }) => {
  return isLoggedIn() ? <Navigate to="/" /> : children;
};

export default GuestRoute;

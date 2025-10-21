import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { API_ROUTES } from '../config/api';  // adjust path if needed

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Use the API route constant here
      const payload = {
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        password: data.password,
      };

      await axios.post(API_ROUTES.USER.SIGNUP, payload);
      alert('Account created!');
    } catch (error) {
      alert(error.response?.data?.message || 'Signup failed.');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '400px' }}>
        <h3 className="text-center mb-4">Create Account</h3>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="mb-3">
            <label htmlFor="first_name" className="form-label">First Name</label>
            <input
              id="first_name"
              type="text"
              className={`form-control ${errors.first_name ? 'is-invalid' : ''}`}
              {...register('first_name', { required: 'First name is required' })}
            />
            {errors.first_name && <div className="invalid-feedback">{errors.first_name.message}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="last_name" className="form-label">Last Name</label>
            <input
              id="last_name"
              type="text"
              className={`form-control ${errors.last_name ? 'is-invalid' : ''}`}
              {...register('last_name', { required: 'Last name is required' })}
            />
            {errors.last_name && <div className="invalid-feedback">{errors.last_name.message}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              id="email"
              type="email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email address',
                },
              })}
            />
            {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              id="password"
              type="password"
              className={`form-control ${errors.password ? 'is-invalid' : ''}`}
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters',
                },
              })}
            />
            {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Signing up...' : 'Sign Up'}
          </button>
        </form>

        <p className="text-center mt-3">
          Already have an account? <a href="/signin">Sign in</a>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;

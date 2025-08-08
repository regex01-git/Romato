import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { signin } from '../../features/user';
import {useDispatch} from 'react-redux'
import { useSelector } from 'react-redux';

const Signin = () => {
  const user=useSelector(store=>store.user)
   const navigate=useNavigate()
  if(user.token){
    navigate('/cart')
  }
  const dispatch=useDispatch()
  const [email, setEmail] =useState('');
  const [password, setPassword] =useState('');
  const [loading, setLoading]=useState(false);
   
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log('Login attempt with:', { email, password });
      setLoading(false);
      // Add your authentication logic here
      dispatch(signin({email,password}))

    }, 1500);
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow-lg" style={{ width: '100%', maxWidth: '400px' }}>
        <div className="card-header bg-primary text-white">
          <h3 className="card-title text-center mb-0 py-2">Login</h3>
        </div>
        <div className="card-body p-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <div className="input-group">
                <span className="input-group-text">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.014 2.787L8 2.893l-6.975 5.06a1 1 0 0 0-.003 1.156l6.976 6.992a1 1 0 0 0 1.438-.04l6.982-6.99a1 1 0 0 0-.004-1.149"/>
                  </svg>
                </span>
                <input 
                  type="email" 
                  className="form-control" 
                  id="email" 
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="form-label">Password</label>
              <div className="input-group">
                <span className="input-group-text">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock" viewBox="0 0 16 16">
                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1"/>
                  </svg>
                </span>
                <input 
                  type="password" 
                  className="form-control" 
                  id="password" 
                  placeholder="Enter your password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="rememberMe" />
              <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
            </div>

            <button 
              type="submit" 
              className="btn btn-primary w-100 py-2"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Logging in...
                </>
              ) : 'Login'}
            </button>

            <div className="mt-3 text-center">
              <a href="#forgot-password" className="text-decoration-none">Forgot password?</a>
            </div>
          </form>
        </div>
        <div className="card-footer text-muted text-center">
          Don't have an account? <button style={{border:"none",backgroundColor:"none"}} onClick={()=>navigate('/signup')}>Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Signin;

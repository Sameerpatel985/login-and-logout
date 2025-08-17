import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    if (isLogin) {
      if (formData.email && formData.password) {
        onLogin(formData.email);
      }
    } else {
      if (formData.name && formData.email && formData.password) {
        onLogin(formData.email);
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <div className="form-header">
          <h2>{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
          <p>{isLogin ? 'Sign in to your account' : 'Join us today'}</p>
        </div>
        
        <form onSubmit={handleSubmit} className="login-form">
          {!isLogin && (
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required={!isLogin}
              />
            </div>
          )}
          
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          
          {isLogin && (
            <div className="form-options">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#" className="forgot-link">Forgot password?</a>
            </div>
          )}
          
          <button type="submit" className="submit-btn">
            {isLogin ? 'Sign In' : 'Sign Up'}
          </button>
        </form>
        
        <div className="form-footer">
          <p>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button 
              type="button" 
              className="toggle-btn"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </div>
      </div>
      
      <div className="login-image">
        <div className="image-overlay">
          <h3>Welcome to Our Platform</h3>
          <p>Experience the future of web applications</p>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import {signup} from '../../features/user'
import {useDispatch,useSelector} from 'react-redux'


const Signup = () => {
  const userdata=useSelector(store=>store.user)
  const navigate=useNavigate()
  if(userdata.token){
        navigate('/cart')
  }
  userdata?console.log("user id",userdata):console.log("not have")
  const dispatch=useDispatch()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
const data=JSON.parse(localStorage.getItem('usertoken'))
{
  // console.log("local storage name:",data.name)
}
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      // Here you would typically send the data to your backend
      dispatch(signup(formData))
      
    }
  };



  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow">
            <div className="card-body p-4">
               <div className="card-header bg-primary text-white mb-3">
          <h3 className="card-title text-center mb-0 py-2">Create Your Account</h3>
        </div>
              <form onSubmit={handleSubmit}>
                {/* Name Field */}
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input
                    type="text"
                    className={`form-control ${errors.name ? 'is-invalid' : ''}p-3`}
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    
                  />
                  {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>

                {/* Email Field */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}p-3`}
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>

                {/* Password Field */}
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className={`form-control ${errors.password ? 'is-invalid' : ''}p-3`}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                  />
                  {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                  <div className="form-text">Password must be at least 8 characters long</div>
                </div>

                {/* Confirm Password Field */}
                <div className="mb-4">
                  <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}p-3`}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                  />
                  {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
                </div>

                {/* Submit Button */}
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Sign Up
                  </button>
                </div>
              </form>

              <div className="text-center mt-4">
                <p className="mb-0">Already have an account? <button style={{border:"none"}} onClick={()=>navigate('/signin')}>Log in</button></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

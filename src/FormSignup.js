import React from "react";
import useForm from "./useForm";
import validate from './validateInfo'
import './form.css'




const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
   
<div>
<div className='form-container'>
<span className='close-btn'>×</span>
          <div className='form-content-left'>
          <div className='left-heading'>
            <h1>Choose a date Range</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          </div>
          </div>
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Create an account
        </h1>
        
        <div className='form-inputs'>
          <label className='form-label'>Your email address</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirm your password'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'> Your Full Name</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your Full Name'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'> Your Phone Number</label>
          <input
            className='form-input'
            type='text'
            name='phonenumber'
            placeholder='Enter your Phone Number'
            value={values.phonenumber}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.phonenumber}</p>}
        </div>  
   
        
        <button className='form-input-btn' type='submit'>
          Sign up
        </button>
     
      </form>
    </div>
    </div>
    </div>
  );
};

export default FormSignup;

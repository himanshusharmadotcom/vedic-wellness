import React, { useState } from 'react'
import styled from 'styled-components';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { loggedInUser } from '../redux/user/userSlice';

export default function SignIn() {

  const [formData, setFormData] = useState({})
  const [errorMessage, setErrorMessage] = useState(null)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value.trim()})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!formData.email || !formData.password){
      setErrorMessage("Please fill out all the fields.")
    }
    try{
      setErrorMessage(null)
      const res = await axios.post('/api/auth/signin', formData, {headers: {"Content-Type" : "application/json"}}) 
      if(res.status === 200){
        setErrorMessage(null)
        dispatch(loggedInUser(res.data))
        navigate('/dashboard')
      }else{
        setErrorMessage(res.data)
      }
    }catch(error){
      setErrorMessage(error.message)
    }
  }

  const navigate = useNavigate()
  return (
    <Wrapper>
      <div className="page-content">
        <h1 className='page-heading'>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <p className="input-class">* mark fields are required</p>
          <div className='form-row-full'>
            <input type="email" placeholder='Enter your email*' id='email' className='input-class' onChange={handleChange}/>
          </div>
          <div className="form-row-full">
            <input type="password" placeholder='Enter your password*' id='password' className='input-class' onChange={handleChange}/>
          </div>
          <div className='form-row-full'>
            <input type="submit" value='Submit' className='input-class' />
          </div>
        </form>
        <div className="form-bottom">
          <p>Dont have an account?</p><NavLink to='/sign-up'>Sign Up</NavLink>
        </div>
        <div className="error-status">
          <p>{errorMessage}</p>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`

    .form-bottom{
       gap: 10px;

       p{
        font-size: ${({ theme }) => theme.fontSize.textFontSize};
       }

       a{
        font-size: ${({ theme }) => theme.fontSize.textFontSize};
        color: ${({ theme }) => theme.colors.primaryColor};
        text-decoration: underline;
       }
    }

    .error-status{
      margin-top: 20px;
      p{
        color: #f00;
        font-size: ${({ theme }) => theme.fontSize.textFontSize};
      }
    }
    
`;

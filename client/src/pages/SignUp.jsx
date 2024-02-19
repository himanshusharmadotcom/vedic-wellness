import React, { useState } from 'react'
import styled from 'styled-components';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios'

export default function SignUp() {

  const [formData, setFormData] = useState({})
  const [errorMessage, setErrorMessage] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() })
  }

  // console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage("Please fill out all the fields.");
    }
    try {
      setLoading(true)
      setErrorMessage(null)
      const res = await axios.post('/api/auth/signup', formData, { headers: { "Content-Type": "application/json" } })
      // console.log(res);
      setLoading(false)
      if (res.status === 200) {
        setErrorMessage(null)
        navigate('/sign-in')
      }else{
        setErrorMessage(res.data)
      }
    } catch (error) {
      setErrorMessage(error.message)
      setLoading(false)
    }
  }


  return (
    <Wrapper>
      <div className="page-content">
        <h1 className='page-heading'>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <p className="input-class">* mark fields are required</p>
          <div className='form-row-full'>
            <input type="text" placeholder='Enter your name*' id='username' className='input-class' onChange={handleChange} />
          </div>
          <div className='form-row-full'>
            <input type="email" placeholder='Enter your email*' id='email' className='input-class' onChange={handleChange} />
          </div>
          <div className="form-row-full">
            <input type="password" placeholder='Enter your password*' id='password' className='input-class' onChange={handleChange} />
          </div>
          <div className='form-row-full'>
            <input type="submit" value='Submit' className='input-class' />
          </div>
        </form>
        <div className="form-bottom">
          <p>Already have an account?</p><NavLink to='/sign-in' disabled={loading}>{loading ? 'Loading...' : 'Sign In'}</NavLink>
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

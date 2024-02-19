import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import DashSidebar from '../components/DashSidebar';
import { useDispatch } from 'react-redux';
import { loggedOutUser } from '../redux/user/userSlice.js';
import axios from 'axios'

export default function DashProfile() {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState(null)

  const handleSignOut = async () => {
    try {
      setErrorMessage(null)
      const res = await axios.post('/api/auth/signout')

      if (res.status === 200) {
        dispatch(loggedOutUser())
        navigate('/')
      } else {
        setErrorMessage(res.data)
      }
    } catch (error) {
      setErrorMessage(error.message)
    }
  }

  return (
    <Wrapper>
      <div className="dashboard-sidebar">
        <DashSidebar />
      </div>
      <div className="dashboard-main">
        <div className="dash-page-content">
          <h1 className='dash-page-heading'>Profile</h1>
          <form action='' method='POST'>
            <div className='form-row-full'>
              <input type="text" placeholder='Enter your name*' id='name' className='input-class' />
            </div>
            <div className='form-row-full'>
              <input type="email" placeholder='Enter your email*' id='email' className='input-class' />
            </div>
            <div className="form-row-full">
              <input type="password" placeholder='Enter your password*' id='password' className='input-class' />
            </div>
            <div className='form-row-full'>
              <input type="submit" value='Update' className='input-class' />
            </div>
          </form>
          <div className="form-bottom">
            <NavLink>Delete Account</NavLink>
            <NavLink onClick={handleSignOut}>Sign Out</NavLink>
          </div>
          <div className="error-status">
            <p>{errorMessage}</p>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`

    display: flex;
    min-height: 100vh;

    .dashboard-main{
      padding: 20px;
      width: 100%;
      height: 100vh;
      overflow-y: auto;
    }

    .dash-page-content{
      width: 800px;
      margin: 0 auto;
    }

    form {
        padding-bottom: 20px;
        display: flex;
        flex-direction: column;
        gap: 20px;

        .form-row-full{

            text-align: center;

            input{
                width: 100%;
            }

            input[type="submit"]{
                width: unset;
                cursor: pointer;
            }
        }
    }

    .form-bottom{
       display: flex;
       justify-content: space-between;

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
import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function SignUp() {
  return (
    <Wrapper>
      <div className="page-content">
        <h1 className='page-heading'>Sign Up</h1>
        <form action='' method='POST'>
          <p className="input-class">* mark fields are required</p>
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
            <input type="submit" value='Submit' className='input-class' />
          </div>
        </form>
        <div className="form-bottom">
          <p>Already have an account?</p><NavLink to='/sign-in'>Sign In</NavLink>
        </div>
        <div className="error-status">
          <p></p>
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

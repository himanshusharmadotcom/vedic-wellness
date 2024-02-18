import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function Footer() {
  return (
    <Wrapper>
      <div className="container">
        <div className="nav-wrapper">
          <ul>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/about'>About</NavLink>
            </li>
            <li>
              <NavLink to='/treatment'>Treatment</NavLink>
            </li>
            <li>
              <NavLink to='/products'>Products</NavLink>
            </li>
            <li>
              <NavLink to='/blog'>Blogs</NavLink>
            </li>
            <li>
              <NavLink to='/contact'>Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="divider"></div>
        <div className="footer-bottom">
          <p>Designed and Developed with ❤</p>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: ${({ theme }) => theme.colors.primaryColor};
  height: 200px;
  width: 100%;
  padding: 50px 0;

  .nav-wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0 10px;

    ul {
      display: flex;
      align-items: center;
      background-color: ${({ theme }) => theme.colors.secondaryColor};
      position: relative;
      padding: 5px 50px;
      border-radius: 40px;
      overflow-x: auto;

      &::-webkit-scrollbar{
        display: none;
      }

      li{
          a{
              font-size: ${({ theme }) => theme.fontSize.smallTextFontSize};
              color: ${({ theme }) => theme.colors.primaryColor};
              border-right: 1px solid #000;
              padding-left: 25px;
              padding-right: 25px;
          }
      }

      li:last-child{
          a{
              border-right: 0;
          }
      }
    }
  }

  .footer-bottom{
    text-align: center;
    
    p{
      color: ${({ theme }) => theme.colors.secondaryColor};
      font-size: ${({ theme }) => theme.fontSize.textFontSize};
    }
  }
`;
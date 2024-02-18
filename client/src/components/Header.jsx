import React, { useState } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png'
import { RiMenuFoldLine } from "react-icons/ri";
import { RiMenuUnfoldLine } from "react-icons/ri";

export default function HeaderHome() {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <Header>
      <div className="container">
        <div className='header-body'>
          <div className="left-span">
            <div className="logo">
              <NavLink to="/">
                <img src={logo} alt="" />
              </NavLink>
            </div>
          </div>
          <div className="right-span">
            <div className="navigation">
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
            <div className="access-panel">
              <NavLink className='btn' to='/sign-in'>Sign In/Sign Up</NavLink>
            </div>
            <div className="mn-toggler">
              <NavLink className='btn' onClick={() => setShowMenu(true)}>MENU</NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className={showMenu ? "mobile-navigation active" : "mobile-navigation"}>
        <div className="mn-close">
          <NavLink className='btn' onClick={() => setShowMenu(false)}>CLOSE</NavLink>
        </div>
        <div className="mn-logo">
          <NavLink to="/" onClick={() => setShowMenu(false)}>
            <img src={logo} alt="" />
          </NavLink>
        </div>
        <ul>
          <li>
            <NavLink to='/' onClick={() => setShowMenu(false)}>Home</NavLink>
          </li>
          <li>
            <NavLink to='/about' onClick={() => setShowMenu(false)}>About</NavLink>
          </li>
          <li>
            <NavLink to='/treatment'>Treatment</NavLink>
          </li>
          <li>
            <NavLink to='/products' onClick={() => setShowMenu(false)}>Products</NavLink>
          </li>
          <li>
            <NavLink to='/blog' onClick={() => setShowMenu(false)}>Blogs</NavLink>
          </li>
          <li>
            <NavLink to='/contact' onClick={() => setShowMenu(false)}>Contact</NavLink>
          </li>
        </ul>
      </div>
    </Header>
  )
}

const Header = styled.section`    

    box-shadow: 3px 0 10px ${({ theme }) => theme.colors.primaryColor};

    .header-body{
      height: 60px;
      z-index: 999999;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .logo{
        img{
          width: 60px;
        }
      }

      .right-span{
        display: flex;
        gap: 20px;
      }

      .right-span .navigation{
        ul {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
  
          li{
              a{
                  font-size: ${({ theme }) => theme.fontSize.smallTextFontSize};
                  color: ${({ theme }) => theme.colors.textColor};
                  text-transform: uppercase;
              }
          }
        } 
      }

      .mn-toggler{
        display: none;
      }
    }

    .mobile-navigation{
      position: fixed;
      height: 100%;
      width: 400px;
      right: 0;
      top: 0;
      transform: translateX(100%);
      background-color: ${({ theme }) => theme.colors.secondaryColor};
      z-index: 999999;
      overflow-y: auto;
      transition: 0.25s;

      &.active{
      transform: translateX(0);
      }
    }

    .mn-close{
      position: absolute;
      top: 30px;
      right: 15px;
      cursor: pointer;

      .icon{
        font-size: ${({ theme }) => theme.fontSize.largeHeadingFontSize};
        border: 3px solid ${({ theme }) => theme.colors.primaryColor};
        border-radius: 50%;
        padding: 5px;
        color: ${({ theme }) => theme.colors.primaryColor};
      }
    }

    .mn-logo{
      text-align: center;
      margin-top: 60px;

      a{
        img{
          width: 125px;
          padding: 20px;
          border: 3px solid ${({ theme }) => theme.colors.primaryColor};
          border-radius: 50%;
        }
      }
    }

    .mobile-navigation ul{
      display: flex;
      flex-direction: column;
      gap: 35px;
      align-items: center;
      margin-top: 45px;

      li{
        font-size: ${({ theme }) => theme.fontSize.textFontSize};

        a{
          background-color: #a1c077;
          color: #1c3b31;
          border: 1.5px solid #1c3b31;
          padding-top: 8px;
          padding-bottom: 8px;
          width: 160px;
          text-align: center;
          font-size: 16px;
          border-radius: 0 175px 0 175px;
          display: inline-block;
          margin-top: -20px;
          transition: 0.25s;
        }
      }
    }

    @media(max-width: 768px){

      .btn{
        padding: 10px 4px;
      }

      .right-span .navigation{
        display: none;
      }

      .mn-toggler{
        display: block!important;
      }
    }

    @media(max-width: 500px)
    {
      .mobile-navigation{
        width: 350px;
      }
    }
`;
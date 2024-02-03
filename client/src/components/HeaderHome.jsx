import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png'

export default function HeaderHome() {
    return (
        <Wrapper>
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
        </Wrapper>
    )
}

const Wrapper = styled.section`
    ul {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        position: relative;
        padding: 5px 50px;
        border-radius: 40px;

        li{
            a{
                font-size: ${({ theme }) => theme.fontSize.smallTextFontSize};
                color: ${({ theme }) => theme.colors.textColor};
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
`;

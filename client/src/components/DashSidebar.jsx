import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { AiFillDashboard } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdOutlinePostAdd } from "react-icons/md";
import { FaRegComments } from "react-icons/fa6";
import { PiUsersThree } from "react-icons/pi";
import { PiSignOut } from "react-icons/pi";
import { TbLayoutSidebarLeftCollapse, TbLayoutSidebarRightCollapse } from "react-icons/tb";
import { IoPeopleOutline } from "react-icons/io5";

export default function DashSidebar() {

    const [isOpen, setIsOpen] = useState(window.innerWidth >= 1080);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <Wrapper>
            <div style={{ width: isOpen ? "200px" : "35px" }} className="sidebar">
                <div className="sidebar-links">
                    <ul>
                        <li>
                            <NavLink to='/dashboard' end>
                                <div className="link-icon">
                                    <AiFillDashboard />
                                </div>
                                <div className="link-text">
                                    <p>Dashboard</p>
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/profile'>
                                <div className="link-icon">
                                    <CgProfile />
                                </div>
                                <div className="link-text">
                                    <p>Profile</p>
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/posts'>
                                <div className="link-icon">
                                    <MdOutlinePostAdd />
                                </div>
                                <div className="link-text">
                                    <p>Posts</p>
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/subscribers'>
                                <div className="link-icon">
                                    <IoPeopleOutline />
                                </div>
                                <div className="link-text">
                                    <p>Subscribers</p>
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/comments'>
                                <div className="link-icon">
                                    <FaRegComments />
                                </div>
                                <div className="link-text">
                                    <p>Comments</p>
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/users'>
                                <div className="link-icon">
                                    <PiUsersThree />
                                </div>
                                <div className="link-text">
                                    <p>Users</p>
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/'>
                                <div className="link-icon">
                                    <PiSignOut />
                                </div>
                                <div className="link-text">
                                    <p>Sign Out</p>
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <div className='collapse-link' onClick={toggle} >
                                <div className="link-icon">
                                    {isOpen ? <TbLayoutSidebarLeftCollapse /> : <TbLayoutSidebarRightCollapse />}
                                </div>
                                <div className="link-text">
                                    <p>Collapse Menu</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    height: 100%;

    .sidebar{
        background-color: ${({theme}) => theme.colors.primaryColor};
        color: #fff;
        height: 100%;
        width: 200px;
        transition: all 0.5s;
        overflow-x: hidden;
    }

    .link-icon{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .link-text p{
        white-space: nowrap;
    }

    .sidebar-links ul{
        display: flex;
        flex-direction: column;
        gap: 10px;

        li{
            a{
                color: ${({theme}) => theme.colors.tertiaryColor};
                font-size: 20px;
                display: flex;
                gap: 15px;
                padding: 5px 8px;
                transition: 0.25s;

                &.active{
                    background-color: ${({theme}) => theme.colors.tertiaryColor};
                    color: ${({theme}) => theme.colors.primaryColor};
                }
            }

            &:hover{
                a{
                    background-color: ${({theme}) => theme.colors.tertiaryColor};
                    color: ${({theme}) => theme.colors.primaryColor};
                }
            }

        }
    }

    .collapse-link{
        cursor: pointer;
        color: ${({theme}) => theme.colors.tertiaryColor};
        font-size: 20px;
        display: flex;
        align-items: center;
        gap: 15px;
        padding: 5px 8px;
        transition: 0.25s;

        &.active{
            background-color: ${({theme}) => theme.colors.tertiaryColor};
            color: ${({theme}) => theme.colors.primaryColor};
        }            

        &:hover{
            background-color: ${({theme}) => theme.colors.tertiaryColor};
            color: ${({theme}) => theme.colors.primaryColor};
        }
    }

    
`;
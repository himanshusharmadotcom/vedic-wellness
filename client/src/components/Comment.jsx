import React from 'react'
import meditationImage from '../assets/images/meditation-image.png';
import { PiHandsClapping } from "react-icons/pi";
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function Comment() {
    return (
        <Wrapper>
            <div className="left-span">
                <img src={meditationImage} alt="" />
            </div>
            <div className="right-span">
                <p className='comment-info'>@username <span>7 days ago</span></p>
                <p className='main-comment'>This is the first comment by the first commentator.</p>
                <span className='seperator'></span>
                <div className="ca-panel">
                    <NavLink><PiHandsClapping className='icon' /></NavLink>
                    <NavLink>Edit</NavLink>
                    <NavLink>Delete</NavLink>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: 20px;
    display: flex;
    gap: 10px;

    .left-span{
        img{
            width: 40px;
            border-radius: 50%;
            height: 40px;
            border: 1px solid #ddd;
        }
    }

    .right-span{
        .comment-info{
            font-size: 12px;
        }

        .main-comment{
            font-size: ${({ theme }) => theme.fontSize.textFontSize};
        }

        .separator{
            background-color: #ddd;
            height: 1px;
            width: 80px;
        }

        .ca-panel{
            margin-top: 20px;
            display: flex;
            gap: 10px;
            align-items: center;

            a{
                font-size: ${({ theme }) => theme.fontSize.textFontSize};
                color: #000;
            }
        }

    }
`;
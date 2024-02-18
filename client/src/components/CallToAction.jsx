import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { AiOutlineSound } from "react-icons/ai";
import bannerImage from '../assets/images/banner-image.jpg'

export default function CallToAction() {
    return (
        <Wrapper>
            <div className="container">
                <div className="cta-body">
                    <AiOutlineSound className='icon' />
                    <h2>Nurture health, embrace balance - Visit our Ayurvedic Clinic today!</h2>
                    <NavLink className='btn' to="/book-appointment">Book Appointment</NavLink>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    position: relative;
    background-image: url(${bannerImage});
    background-attachment: fixed;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    width: 100%;
    margin-bottom: 90px;    

    .cta-body{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 400px;

            h2{
                font-size: ${({ theme }) => theme.fontSize.headingFontSize};
                color: ${({theme}) => theme.colors.secondaryColor};
                text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
                margin-bottom: 30px;
            }

            .icon{
                font-size: 100px;
                color: ${({theme}) => theme.colors.secondaryColor};
            }
    }
`;

import React from 'react'
import styled from 'styled-components';
import { ImSpinner9 } from "react-icons/im";
import { AiOutlineFire } from "react-icons/ai";
import { IoWaterOutline } from "react-icons/io5";

export default function IconCard() {
    return (
        <Wrapper className='space-bottom'>
            <div className="icon-card">
                <div className="container">
                    <div className="ic-head theme-heading heading-left">
                        <h2>Vata, Pitta, Kapha and Your Health</h2>
                        <span></span>
                    </div>
                    <div className="ic-body">
                        <div className="ic-box">
                            <div className="ic-icon">
                                <ImSpinner9 className='icon' />
                            </div>
                            <div className="ic-con">
                                <h3>Vatta</h3>
                                <p>Individuals with a dominant Vata dosha exhibit physical and emotional traits associated with the elemental qualities of space/akasha and air/vayu. They tend to be highly active, displaying mobility, restlessness, and energy. With fast metabolisms, they often have a slender physique, minimal muscle development, and noticeable joints that may produce cracking sounds.</p>
                            </div>
                        </div>

                        <div className="ic-box">
                            <div className="ic-icon">
                                <AiOutlineFire className='icon' />
                            </div>
                            <div className="ic-con">
                                <h3>Pitta</h3>
                                <p>Individuals with a predominant Pitta dosha exhibit an inherent fire/agni elemental nature. They have a medium build, featuring more substantial muscular development compared to Vata. Their skin is soft and warm, and they generate considerable body heat, often experiencing excessive perspiration.</p>
                            </div>
                        </div>

                        <div className="ic-box">
                            <div className="ic-icon">
                                <IoWaterOutline className='icon' />
                            </div>
                            <div className="ic-con">
                                <h3>Kapha</h3>
                                <p>Individuals with a dominant Kapha dosha typically possess a substantial and robust, or larger physique. They often struggle with excess weight, have a propensity for easy weight gain, and exhibit significant muscle development, resulting in a plump and rounded appearance. Their skin is thick, smooth, and well-moisturized, showing minimal wrinkles.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`

    background-color: ${({ theme }) => theme.colors.primaryColor};

    .icon-card{
        padding: 80px 0;

        .ic-head{
            h2{
                color: ${({ theme }) => theme.colors.secondaryColor};
            }

            span{
                background-color: ${({ theme }) => theme.colors.secondaryColor};
                &::after{
                    background-color: ${({ theme }) => theme.colors.secondaryColor};
                }
            }
        }

        .ic-body{
            display: flex;
            justify-content: space-between;
            padding: 50px 0;
            
            .ic-box{
                text-align: center;
                padding: 0 40px;

                .icon{
                    color: ${({ theme }) => theme.colors.secondaryColor};
                    font-size: 40px;
                }

                h3{
                    color: ${({ theme }) => theme.colors.secondaryColor};
                    font-size: 30px;
                    margin-bottom: 15px;
                }

                p{
                    color: ${({ theme }) => theme.colors.secondaryColor};
                    font-size: ${({ theme }) => theme.fontSize.textFontSize};
                }
            }
        }
    }
`;

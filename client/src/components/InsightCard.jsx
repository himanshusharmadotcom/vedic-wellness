import React from 'react'
import styled from 'styled-components'
import herbsAndRemdies from '../assets/images/herbs-and-remedies.jpg'
import yoga from '../assets/images/yoga.jpg'
import ayurvedicLifestyle from '../assets/images/ayurvedic-lifestyle.jpg'
import nutritionalGuidance from '../assets/images/nutritional-guidance.jpg'

export default function InsightCard() {
    return (
        <Wrapper>
            <div className="container">
                <div className="ics-head theme-heading heading-right">
                    <span></span>
                    <h2>Ayurveda Insights for Balanced Living</h2>
                </div>
                <div className="isc-body">

                    <div className="left-span">
                        <span>A</span>
                        <span>y</span>
                        <span>u</span>
                        <span>r</span>
                        <span>v</span>
                        <span>e</span>
                        <span>d</span>
                        <span>a</span>
                    </div>

                    <div className="right-span">
                        <div className="isc-span">
                            <img src={ayurvedicLifestyle} alt="" />
                            <h3>Ayurvedic Lifestyle Tips</h3>
                        </div>

                        <div className="isc-span">
                            <img src={herbsAndRemdies} alt="" />
                            <h3>Herbs & Remedies</h3>
                        </div>

                        <div className="isc-span">
                            <img src={yoga} alt="" />
                            <h3>Yoga & Exercises</h3>
                        </div>

                        <div className="isc-span">
                            <img src={nutritionalGuidance} alt="" />
                            <h3>Nutritional Guidance</h3>
                        </div>
                    </div>

                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`

    .isc-body{
        padding: 50px 0;
        display: flex;
        gap: 40px;
    }

    .isc-body .left-span{
        flex-basis: 20%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        span{
            text-transform: uppercase;
            font-size: 80px;
            color: #1c3b3182;
        }
    }

    .isc-body .right-span{
        flex-basis: 80%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 40px;
    }

    .isc-span{

        flex-basis: calc((100% - 40px) / 2);
        text-align: center;

        img{
            max-width: 100%;
            height: auto;
            width: 400px;
            border-radius: 175px 0 175px 0;
            transition: 0.25s;
        }

        h3{
            background-color: ${({ theme }) => theme.colors.tertiaryColor};
            color: ${({ theme }) => theme.colors.primaryColor};
            border: 1.5px solid ${({ theme }) => theme.colors.primaryColor};
            padding: 8px 40px;
            font-size: ${({ theme }) => theme.fontSize.textFontSize};
            border-radius: 175px 0 175px 0;
            display: inline-block;
            margin-top: -20px;
            transition: 0.25s;
        }
    }

    .isc-span:hover img, .isc-span:hover h3{
        border-radius: 0 175px 0 175px;
    }
`;
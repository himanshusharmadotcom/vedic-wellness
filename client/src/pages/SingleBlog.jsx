import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import blog1Image from '../assets/images/blog-1.jpeg';
import CallToAction from '../components/CallToAction';
import Newsletter from '../components/Newsletter';
import { IoShareOutline } from "react-icons/io5";
import { PiHandsClapping } from "react-icons/pi";
import { AiOutlineComment } from "react-icons/ai";
import BlogComment from '../components/BlogComment';

export default function SingleBlog() {
    return (
        <Wrapper>
            <div className="page-content">
                <h1 className='page-heading'>What is Health in Ayurveda?</h1>
                <div className="featured-image">
                    <img src={blog1Image} alt="" />
                </div>
                <div className="blog-action">
                    <div className="left-span">
                        <NavLink><PiHandsClapping className='icon' /></NavLink>
                        <NavLink><AiOutlineComment className='icon' /></NavLink>
                    </div>
                    <div className="right-span">
                        <NavLink><IoShareOutline className='icon' /></NavLink>
                    </div>
                </div>
                <div className="blog-content text-content">

                    <p>Health, in the context of Ayurveda, extends far beyond the absence of disease. Ayurveda defines health as a state of equilibrium in the body, mind, and spirit. It emphasizes harmony between the three doshas—Vata, Pitta, and Kapha—which are the fundamental energies that govern various physiological and psychological functions.</p>

                    <p>In Ayurveda, good health is characterized by a balanced doshic constitution, proper digestion and metabolism (Agni), efficient elimination of waste (Malas), strong immunity (Ojas), and a clear and tranquil mind (Sattva). When these aspects are in harmony, an individual experiences vitality, happiness, and a sense of well-being.</p>

                    <p>Furthermore, Ayurveda views health as a dynamic and ever-changing state influenced by various factors such as diet, lifestyle, environment, and mental attitude. It emphasizes the importance of preventive healthcare measures, personalized lifestyle practices, and natural remedies to maintain health and prevent the onset of diseases.</p>

                    <p>Overall, health in Ayurveda is not merely the absence of illness but a state of holistic balance and vitality encompassing physical, mental, and spiritual well-being.</p>
                </div>
                <div className="divider"></div>
                <BlogComment />
            </div>
            <CallToAction />
            <Newsletter />
        </Wrapper>
    )
}

const Wrapper = styled.section`
    .featured-image img{
        width: 100%;
    }

    .blog-action{
        padding: 5px 0;
        border-bottom: 2px solid #ddd;
        display: flex;
        justify-content: space-between;

        .left-span{
            display: flex;
            gap: 10px;
        }

        .icon{
            color: #000;
            font-size: ${({ theme }) => theme.fontSize.smallHeadingFontSize}
        }
    }
`;
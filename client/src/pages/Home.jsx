import React from 'react'
import styled from 'styled-components'
import video from '../assets/videos/banner-video.mp4'
import bannerImage from '../assets/images/banner-image.jpg'
import HeaderHome from '../components/HeaderHome';
import { NavLink } from 'react-router-dom';
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquarePinterest } from "react-icons/fa6";

export default function Home() {
  return (
    <Wrapper>
      <div className="container">
        <div className="banner-span">
          <div className="banner-body">
            <div className="header-home-span">
              <HeaderHome />
            </div>
            <h1>Vedic WellNess</h1>
            <p>Discover the Timeless Wisdom of Ayurveda, Rooted in the Gurukul Tradition of Ancient Bharat. Our Clinic, a Modern-day Oasis of Ayurvedic Healing, Offers Traditional Medicines and Therapies. Step into a World where Nature, Knowledge, and Wellness Unite. Let the Fountain of Ancient Wisdom Nurture Your Health. Experience the Harmony of Ayurveda Surrounded by Lush Trees, Majestic Mountains, and the Radiance of Sunshine. Your Path to Holistic Well-being Begins Here.</p>
            <div className="banner-social">
              <ul>
                <li>
                  <NavLink to='https://twitter.com' target="_blank">
                    <FaSquareXTwitter />
                  </NavLink>
                </li>
                <li>
                  <NavLink to='https://instagram.com' target="_blank">
                    <FaSquareInstagram />
                  </NavLink>
                </li>
                <li>
                  <NavLink to='https://pinterest.com' target="_blank">
                    <FaSquarePinterest />
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="banner-cta">
              <NavLink to='#' className='btn'>
                Book Appointment
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .banner-span{
    position: relative;
    background-image: url(${bannerImage});
    background-attachment: fixed;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;

      .banner-body{
        position: absolute;
        top: 50px;
        left: 50%;
        transform: translateX(-50%);
        height: calc(100% - 100px);
        width: calc(100% - 100px);
        z-index: 99999;
        text-align: center;
  
        .header-home-span{
          display: inline-block;
          margin: 50px 0 30px;
        }

        h1{
          font-size: 80px;
          color: #fff;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }

        p{
          color: #fff;
          font-size: ${({ theme }) => theme.fontSize.smallTextFontSize};
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
          width: 50%;
          margin: 0 auto;
        }

        .banner-social{
          ul{
            display: flex;
            gap: 30px;
            justify-content: center;
            margin: 20px 0;

            li{
              a{
                color: #fff;
                font-size: 50px;
                transition: 0.25s;
              }

              &:hover{
                a{
                  transform: scale(1.2);
                }
              }

            }
          }
        }

      }

  }
`;
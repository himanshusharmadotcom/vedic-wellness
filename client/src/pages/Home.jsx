import React from 'react'
import styled from 'styled-components'
import bannerImage from '../assets/images/banner-image.jpg'
import medicines from '../assets/images/medicines.png'
import homeAbout from '../assets/images/home-about-visual.jpeg'
import { NavLink } from 'react-router-dom';
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquarePinterest } from "react-icons/fa6";
import IconCard from '../components/IconCard';
import InsightCard from '../components/InsightCard';
import Products from '../components/Products';
import Testimonial from '../components/Testimonial';
import CallToAction from '../components/CallToAction';
import Newsletter from '../components/Newsletter';

export default function Home() {
  return (
    <Wrapper>
      <div className="banner-span">
        <div className="banner-body">
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
            <NavLink to='/book-appointment' className='btn'>
              Book Appointment
            </NavLink>
          </div>
        </div>
      </div>
      <div className="medicine-span space-bottom">
        <div className="container">
          <div className="ms-body">
            <div className="left-span">
              <img src={medicines} alt="" />
            </div>
            <div className="right-span">
              <h2>Pure Ayurvedic Healing Wisdom</h2>
              <p>Embrace the essence of ancient Ayurvedic wisdom at our clinic, where traditional healing meets modern wellness. Our medicines are meticulously crafted, drawing inspiration from the profound teachings of revered Ayurvedic scholars and practitioners. Rooted in centuries-old principles, our remedies harness the innate power of natural herbs and ingredients, offering a holistic approach to health and vitality.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-span space-bottom">
        <div className="container">
          <div className="about-body">
            <div className="left-span">
              <h4>About Vedic Wellness</h4>
              <h2>Here ancient wisdom meets modern wellness, offering holistic healing for optimal health and vitality.</h2>
              <p>At Dr. Kunjit's Ayurveda Clinic, we are dedicated to promoting holistic well-being through the ancient wisdom of Ayurveda. Led by Dr. Kunjit, an experienced Ayurvedic doctor, our clinic offers personalized care and traditional Ayurvedic treatments tailored to meet the unique health needs of each individual.</p>
              <div className="about-cta">
                <NavLink to='/about' className='btn'>Read More</NavLink>
              </div>
            </div>
            <div className="right-span">
              <img src={homeAbout} alt="" />
            </div>
          </div>
        </div>
      </div>
      <IconCard />
      <InsightCard />
      <Products />
      <Testimonial />
      <CallToAction />
      <Newsletter />
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

      // &::after{
      //   content: '';
      //   position: absolute;
      //   bottom: 0;
      //   left: 0;
      //   height: 140px;
      //   width: 100%;
      //   background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(255,255,255,1) 50%);
      // }

      .banner-body{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: calc(100%);
        z-index: 99999;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column; 
        text-align: center;
        background-color: #00000078;
        padding: 10px 0 60px;

        &::before{
          content: '';
          position: absolute;
          left: 0;
          top: -25px;
          background-color: #00000078;
          width: 100%;
          height: 15px;
        }

        &::after{
          content: '';
          position: absolute;
          left: 0;
          bottom: -25px;
          background-color: #00000078;
          width: 100%;
          height: 15px;
        }

        h1{
          font-size: 80px;
          color: ${({theme}) => theme.colors.secondaryColor};
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }

        p{
          color: ${({theme}) => theme.colors.secondaryColor};
          font-size: ${({ theme }) => theme.fontSize.textFontSize};
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
                color: ${({theme}) => theme.colors.secondaryColor};
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

  // =========================================== Medicine span

  .medicine-span{
    background-color: ${({ theme }) => theme.colors.primaryColor};
    padding: 50px 0 10px;
  }

  .ms-body{
    display: flex;

    .left-span{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-basis: 50%;

      img{
        margin-top: -140px;
        width: 400px;
        z-index: 99999;
      }
    }

    .right-span{
      flex-basis: 50%;

      h2{
        color: ${({ theme }) => theme.colors.secondaryColor};
        font-size: ${({ theme }) => theme.fontSize.smallHeadingFontSize};
      }

      p{
        color: ${({ theme }) => theme.colors.secondaryColor};
        font-size: ${({ theme }) => theme.fontSize.textFontSize};
      }
    }
  }

  // =========================================== About span

  .about-body{
    display: flex;

    .left-span{
      display: flex;
      justify-content: center;
      flex-direction: column;
      flex-basis: 50%;
      border-left: 4px solid ${({ theme }) => theme.colors.primaryColor};
      padding-left: 80px;

      h4{
        color: ${({ theme }) => theme.colors.primaryColor};
        font-size: ${({ theme }) => theme.fontSize.extraSmallHeadingFontSize};
      }

      h2{  
        font-size: 50px;
        color: ${({ theme }) => theme.colors.primaryColor};
      }

      p{
        color: ${({ theme }) => theme.colors.primaryColor};
        font-size: ${({ theme }) => theme.fontSize.textFontSize};
      }

      .about-cta{
        margin-top: 28px;
      }
    }

    .right-span{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-basis: 50%;

      img{
        border-radius: 175px 0 175px 0;
      }
    }
  }

  @media(max-width: 992px){
    .about-body .left-span {
      padding-left: 20px;
    }
  }

  @media(max-width: 768px){
    .banner-span .banner-body h1 {
      font-size: 50px;
    }

    .banner-span .banner-body p {
      width: 90%;
    }

    .ms-body {
      flex-direction: column;
      gap: 20px;
      padding-bottom: 40px;
    }

    .ms-body .left-span img {
      margin-top: 0;
      width: 370px;
    }

    .about-body {
      flex-direction: column;
      gap: 60px;
    }

    .about-body .left-span{
      order: 2;
    }

    .about-body .right-span{
      order: 1;
    }

    .icon-card .ic-body {
      flex-direction: column;
      gap: 60px;
    }

    .isc-body {
      flex-direction: column;
    }

    .isc-body .left-span {
      flex-direction: unset;
    }

    .isc-body .left-span span {
      font-size: 50px;
    }

    .isc-span img {
      border-radius: 120px 0 120px 0;
    }

    .isc-span:hover img {
      border-radius: 0 120px 0 120px;
    }

    .pr-tab ul {
      flex-wrap: wrap;
    }

    .pr-tab ul li{
      text-align: center;
    }

    .pr-display-body {
      margin-top: 50px;
    }

    .pr-display-body .pr-box{
      flex-basis: calc((100% - 60px) / 4);
    }

    .testimonial-span.space-bottom{
      margin-bottom: 0;
    }
  }

  @media(max-width: 500px){

    .about-body .right-span img {
      border-radius: 110px 0 110px 0;
      width: 315px;
    }

    .isc-span {
      flex-basis: calc(100% - 40px);
    }

    .pr-tab ul{
      gap: 20px;
    }

    .pr-tab ul li a {
      min-width: 140px;
    }

    .pr-tab ul li a.btn{
      padding: 10px 30px;
    }

    form input[type="email"] {
      width: 335px;
    }
  }
`;
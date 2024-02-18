import React from 'react'
import styled from 'styled-components'
import bannerImage from '../assets/images/banner-image.jpg'

export default function InnerBanner(props) {
  return (
    <Wrapper>
      <div className="banner-span">
        <div className="banner-body">
          <h1>{props.heading}</h1>
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
    height: 70vh;
    margin-top: -80px;
  
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
        height: calc(100% - 100px);
        width: calc(100% - 100px);
        z-index: 99999;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column; 
        text-align: center;
  
        h1{
          font-size: 80px;
          color: #fff;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }
  
        p{
          color: #fff;
          font-size: ${({ theme }) => theme.fontSize.textFontSize};
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
          width: 50%;
          margin: 0 auto;
        }
      }
    }
`;
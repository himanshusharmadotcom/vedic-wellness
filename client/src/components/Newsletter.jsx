import React from 'react'
import styled from 'styled-components'

export default function Newsletter() {
  return (
    <Wrapper>
      <div className="container">
        <div className="nsl-body">
          <div className="nsl-head theme-heading heading-left">
            <h2>Join The List!</h2>
            <span></span>
          </div>
          <form action="">
            <input type="email" placeholder='example@gmail.com' name='nsl-email' id='nsl-email' />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`

    margin-bottom: 90px;

    .nsl-head{
      margin-bottom: 40px;
    }

    form{
      text-align: center;
      position: relative;
      display: inline-block;
      left: 50%;
      transform: translateX(-50%);

      input{
        outline: none;
        border: none;
      }

      input[type="email"]{
        height: 50px;
        width: 450px;
        padding: 10px 30px;  
        background-color: transparent;
        border-radius: 40px;
        font-size: ${({theme}) => theme.fontSize.textFontSize};
        box-shadow: inset 7px 7px 15px rgba(255, 255, 255, 0.2),
                    inset -7px -7px 15px rgba(0, 0, 0, 0.1),
                    inset -5px -5px 15px rgba(255, 255, 255, 0.2),
                    inset 7px 7px 15px rgba(0, 0, 0, 0.1);
      }

      input[type="submit"]{
        height: 36px;
        width: 120px;
        background-color: ${({theme}) => theme.colors.secondaryColor};
        border-radius: 40px;
        box-shadow: inset 7px 7px 15px rgba(255, 255, 255, 0.2),
                    inset -7px -7px 15px rgba(0, 0, 0, 0.1),
                    inset -5px -5px 15px rgba(255, 255, 255, 0.2),
                    inset 7px 7px 15px rgba(0, 0, 0, 0.1);
        position: absolute;
        right: 8px;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
      } 
    }

    @media(max-width: 500px){  
      form input[type="email"] {
        width: 335px;
      }
    }
`;

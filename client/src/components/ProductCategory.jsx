import React from 'react'
import styled from 'styled-components'

export default function OilComponent({ data }) {

  return (
    <Wrapper>
      <div className="pr-display-body">
        {
          data.map((item, index) => (
            <div className="pr-box" key={index}>
              <img src={item.image} alt="" />
              <h4>{item.name}</h4>
            </div>
          ))
        }
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .pr-display-body{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 100px;
    flex-wrap: wrap;

    .pr-box{
      background-color: ${({theme}) => theme.colors.secondaryColor};
      padding: 20px;
      text-align: center;
      // box-shadow: inset 7px 7px 15px rgba(255, 255, 255, 0.2),
      //               inset -7px -7px 15px rgba(0, 0, 0, 0.1),
      //               inset -5px -5px 15px rgba(255, 255, 255, 0.2),
      //               inset 7px 7px 15px rgba(0, 0, 0, 0.1);
  
      img{
        width: 250px;
        height: 200px;
        object-fit: cover;
        margin-bottom: 10px;
      }

      h4{
        font-size: ${({theme}) => theme.fontSize.textFontSize};
        color:  ${({theme}) => theme.colors.primaryColor};
      }
    }
  }
`;
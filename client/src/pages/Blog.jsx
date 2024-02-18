import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import blog1Image from '../assets/images/blog-1.jpeg';

export default function Blog() {
  return (
    <Wrapper>
      <div className="page-content">
        <h1 className='page-heading'>Blogs</h1>
        <div className="blog-listing">
          <div className="bl-card">
            <p className="bl-badge">Category</p>
            <img src={blog1Image} alt="" />
            <h4>What is health in ayurveda?</h4>
            <div className="bl-card-hover">
              <NavLink to='/single-blog'>Read Now...</NavLink>
            </div>
          </div>
          <div className="bl-card">
            <p className="bl-badge">Category</p>
            <img src={blog1Image} alt="" />
            <h4>What is health in ayurveda?</h4>
            <div className="bl-card-hover">
              <NavLink to='/single-blog'>Read Now...</NavLink>
            </div>
          </div>
          <div className="bl-card">
            <p className="bl-badge">Category</p>
            <img src={blog1Image} alt="" />
            <h4>What is health in ayurveda?</h4>
            <div className="bl-card-hover">
              <NavLink to='/single-blog'>Read Now...</NavLink>
            </div>
          </div>
          <div className="bl-card">
            <p className="bl-badge">Category</p>
            <img src={blog1Image} alt="" />
            <h4>What is health in ayurveda?</h4>
            <div className="bl-card-hover">
              <NavLink to='/single-blog'>Read Now...</NavLink>
            </div>
          </div>
          <div className="bl-card">
            <p className="bl-badge">Category</p>
            <img src={blog1Image} alt="" />
            <h4>What is health in ayurveda?</h4>
            <div className="bl-card-hover">
              <NavLink to='/single-blog'>Read Now...</NavLink>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .blog-listing{
    
    display: flex;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;

    .bl-card{
      flex-basis: calc((100% - 40px) / 3);
      border: 2px solid #ddd;
      border-radius: 5px;
      padding: 20px;
      position: relative;
      overflow: hidden;

      .bl-badge{
        position: absolute;
        right: 35px;
        top: 35px;
        background-color: #fff;
        padding: 4px 7px;
        border-radius: 10px;
        font-size: ${({ theme }) => theme.fontSize.smallTextFontSize};
      }

      img{
        max-width: 100%;
        height: auto;
        margin-bottom: 10px;
      }

      h4{
        font-size: ${({ theme }) => theme.fontSize.textFontSize};
      }

      .bl-card-hover{
        position: absolute;
        left: 0;
        bottom: 0;
        transform: translateY(100%);
        width: 100%;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #1c3b31cc;
        transition: 0.25s;

        a{
          font-size: ${({ theme }) => theme.fontSize.textFontSize};
          color: #fff;
          border: 1px solid #fff;
          padding: 5px 10px;
          border-radius: 5px;
        }
      }

      &:hover .bl-card-hover{
        transform: translateY(0);
      }

    }
  }

  @media(max-width: 768px){
    .blog-listing .bl-card {
      flex-basis: calc((100% - 20px) / 2);
    }
  }

  @media(max-width: 500px){
    .blog-listing .bl-card {
      flex-basis: 100%;
    }
  }
`;

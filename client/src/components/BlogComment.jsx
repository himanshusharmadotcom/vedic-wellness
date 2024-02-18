import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Comment from './Comment.jsx';

export default function BlogComment() {

  const [comment, setComment] = useState([]);

  return (
    <Wrapper>
      <div className="comment-wp">
        <div className="user-tag">
          <p>Signed in as: @username</p>
        </div>
        <div className="comment-form">
          <form>
            <textarea name="comment-con" id="comment-con" rows="5" maxLength='200' className='input-class' placeholder='Add a comment...' onChange={(e) => setComment(e.target.value)} value={comment}></textarea>
            <div className="form-bottom">
              <div className="left-span">
                <p><span>{200 - comment.length}</span> characters remaining</p>
              </div>
              <div className="right-span">
                <input type="submit" value='Submit' className='input-class' />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="comment-listing">
        <p className='comment-status'>No Comments Yet</p>
        <p className='comment-status'>Comments <span>2</span></p>
        <Comment />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`

  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;

  .user-tag {
    p{
      font-size: ${({ theme }) => theme.fontSize.textFontSize};
    }
  }

  form{
    margin-top: 20px;

    textarea{
      width: 100%;
    }

    .form-bottom{
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .left-span{
        p{
          font-size: ${({ theme }) => theme.fontSize.textFontSize};
        }
      }

      .right-span{
        input{
          cursor: pointer;
        }
      }
    }
  }

  .comment-status{
      font-size: ${({ theme }) => theme.fontSize.textFontSize};

      span{
        border: 2px solid #ddd;
        padding: 2px 8px;
        border-radius: 5px;
      }
  }

`;
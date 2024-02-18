import React from 'react'
import styled from 'styled-components';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DashSidebar from '../components/DashSidebar';

export default function DashEditComment() {
  return (
    <Wrapper>
      <div className="dashboard-sidebar">
        <DashSidebar />
      </div>
      <div className="dashboard-main">
        <div className="dash-page-content">
          <div className="dash-page-head">
            <h1>Edit Comment</h1>
          </div>
          <form>
            <div className='form-row-full'>
              <input type="text" className='input-class' placeholder='This is the title.' readOnly />
            </div>
            <div className='form-row-full'>
              <ReactQuill
                theme='snow'
                placeholder='Write something...'
                className='h-72 mb-12'
                required
                onChange={(value) => {
                  setFormData({ ...formData, content: value });
                }}
              />
            </div>
            <div className='form-row-full'>
              <input type="submit" value='Approve' className='input-class' />
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`

  display: flex;
    min-height: 100vh;

  .dashboard-main{
    padding: 20px;
    width: 100%;
    height: 100vh;
    overflow-y: auto;
  }      

  form {
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    gap: 20px;

    .form-row-full {

      textarea,
      input[type="text"] {
        width: 100%;
      }

      input[type=file]::file-selector-button {
        color: ${({ theme }) => theme.colors.primaryColor};
        background-color: ${({ theme }) => theme.colors.tertiaryColor};
        border: 1.5px solid ${({ theme }) => theme.colors.primaryColor};
        border-radius: 5px;
        padding: 4px 20px;
        font-size: ${({ theme }) => theme.fontSize.textFontSize};
        cursor: pointer;
        transition: 0.25s;
        outline: none;
      }
      
      input[type=file]::file-selector-button:hover {
        color: ${({ theme }) => theme.colors.tertiaryColor};
        background-color: ${({ theme }) => theme.colors.primaryColor};
        border: 1.5px solid ${({ theme }) => theme.colors.tertiaryColor};
      }

      .quill{
        height: 400px;
        border: none;
        outline: none;
        padding: 10px 30px;
        background-color: transparent;
        border-radius: 40px;
        box-shadow: inset 7px 7px 15px rgba(255, 255, 255, 0.2), inset -7px -7px 15px rgba(0, 0, 0, 0.1), inset -5px -5px 15px rgba(255, 255, 255, 0.2), inset 7px 7px 15px rgba(0, 0, 0, 0.1);
        font-size: 16px;
      }

      .ql-toolbar.ql-snow {
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: 1px solid #ccc;
        font-size: ${({ theme }) => theme.fontSize.textFontSize};
      }     

      .ql-container{
        height: 80%;
      }

      .ql-container.ql-snow {
        border: none;
        font-size: ${({ theme }) => theme.fontSize.textFontSize};
       }

      input[type="submit"] {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        cursor: pointer;
      }
    }
  }


`;

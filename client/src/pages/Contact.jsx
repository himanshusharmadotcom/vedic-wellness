import React from 'react'
import InnerBanner from '../components/InnerBanner'
import styled from 'styled-components';

export default function Contact() {
  return (
    <Wrapper>
      <div className="page-content">
        <h1 className='page-heading'>Contact Us</h1>
        <form action='' method='POST'>
          <p className="input-class">* mark fields are required</p>
          <div className='form-row'>
            <div className='form-col'>
              <input type="text" placeholder='First name*' className="input-class" />
            </div>
            <div className='form-col'>
              <input type="text" placeholder='Last name*' className="input-class" />
            </div>
          </div>
          <div className='form-row'>
            <div className='form-col'>
              <input type="email" placeholder='Email*' className="input-class" />
            </div>
            <div className='form-col'>
              <input type="number" placeholder='Phone*' className="input-class" />
            </div>
          </div>
          <div className='form-row-full'>
            <textarea placeholder='Message*' rows='5' className="input-class"></textarea>
          </div>
          <div className='form-row-full'>
            <input type="submit" value='Submit' className='input-class' />
          </div>
        </form>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    
`;

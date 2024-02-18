import React from 'react'
import styled from 'styled-components'

export default function AppointmentConfirmation() {
    return (
        <Wrapper>
            <div className="page-content">
                <h1 className='page-heading'>Thank You</h1>
                <div className="page-content text-content">
                    <p>Thank you for choosing us for your better health! <br /> We've sent you an email on example@gmail.com, please confirm the appointment.</p>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    .text-content p{
        background: #f7f7f7;
        padding: 10px;
        border: 2px solid #ddd;
        border-radius: 5px;
        text-align: center;
    }
`;

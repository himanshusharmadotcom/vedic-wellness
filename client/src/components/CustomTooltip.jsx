import React from 'react'
import styled from 'styled-components';

export const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <Wrapper className="custom-tooltip">
                <p className="label">{`${label} : ${payload[0].value}`}</p>
                {payload.map((pld, index) => (
                    <div key={index} className='cst-inner'>
                        <div className='cst-inner-value'>{pld.value}</div>
                        <div className='cst-inner-name'>{pld.dataKey}</div>
                    </div>
                ))}
            </Wrapper>
        );
    }

    return null;
};

const Wrapper = styled.section`

    background: ${({ theme }) => theme.colors.secondaryColor};
    border: 3px solid ${({ theme }) => theme.colors.primaryColor};
    height: 80px;
    width: 100px;
    border-radius: 20px 0 20px 0;        
    
    .label {
        text-align: center;
        font-size: ${({ theme }) => theme.fontSize.smallTextFontSize};
        background-color: ${({ theme }) => theme.colors.tertiaryColor};
        border-radius: 15px 0 0 0;
        color: ${({ theme }) => theme.colors.primaryColor};
    }
    
    .cst-inner{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 55px;
        flex-direction: column;
    }
    
    .cst-inner-value, .cst-inner-name{
        font-size: ${({ theme }) => theme.fontSize.smallTextFontSize};
        color: ${({ theme }) => theme.colors.primaryColor};
    }
`;
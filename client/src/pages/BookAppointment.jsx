import React from 'react';
import styled from 'styled-components';

export default function Contact() {
    return (
        <Wrapper>
            <div className="page-content">
                <h1 className='page-heading'>Book Appointment</h1>
                <form>
                    <p className='input-class'>* mark fields are required</p>
                    <div className='form-row'>
                        <div className='form-col'>
                            <label htmlFor="">First Name*</label>
                            <input type="text" className='input-class' />
                        </div>
                        <div className='form-col'>
                            <label htmlFor="">Last Name*</label>
                            <input type="text" className='input-class' />
                        </div>
                    </div>
                    <div className='form-row'>
                        <div className='form-col'>
                            <label htmlFor="">Email*</label>
                            <input type="email" className='input-class' />
                        </div>
                        <div className='form-col'>
                            <label htmlFor="">Phone*</label>
                            <input type="tel" className='input-class' />
                        </div>
                    </div>
                    <div className='form-row'>
                        <div className='form-col'>
                            <label htmlFor="">Date of Birth*</label>
                            <input type="date" className='input-class' />
                        </div>
                        <div className='form-col'>
                            <label htmlFor="">Address*</label>
                            <input type="text" className='input-class' />
                        </div>
                    </div>
                    <div className='form-row'>
                        <div className='form-col'>
                            <label htmlFor="">Preferred Date*</label>
                            <input type="date" placeholder='Preferred Date*' className='input-class' />
                        </div>
                        <div className='form-col'>
                            <label htmlFor="">Preferred Time*</label>
                            <input type="time" placeholder='Preferred Time*' className='input-class' />
                        </div>
                    </div>
                    <div className='form-row'>
                        <div className='form-col'>
                            <label htmlFor="">Appointment Type*</label>
                            <select name="appointment-type" id="appointment-type" className='input-class' required>
                                <option value="" disabled selected>Select Appointment Type*</option>
                                <option value="consultation">Consultation</option>
                                <option value="treatment">Treatment</option>
                                <option value="therapy">Therapy</option>
                            </select>
                        </div>
                        <div className='form-col'>
                            <label htmlFor="">Referral Source</label>
                            <select name="referral-source" id="referral-source" className='input-class'>
                                <option value="">Select Referral Source </option>
                                <option value="Word of Mouth">Word of Mouth</option>
                                <option value="Online Search">Online Search</option>
                                <option value="Social Media">Social Media</option>
                                <option value="Advertisement">Advertisement</option>
                                <option value="Doctor Referral">Doctor Referral</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>
                    <div className='form-row-full'>
                        <label htmlFor="">Health History</label>
                        <textarea placeholder='Brief Health History (Optional)' rows='5' className='input-class'></textarea>
                    </div>
                    <div className='form-row-full'>
                        <input type="submit" value='Book Appointment' className='input-class' />
                    </div>
                </form>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
  
`;

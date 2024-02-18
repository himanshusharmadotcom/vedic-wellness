import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import DashSidebar from '../components/DashSidebar';

export default function DashSubscribers() {
  return (
    <Wrapper>
      <div className="dashboard-sidebar">
        <DashSidebar />
      </div>
      <div className="dashboard-main">
        <div className="dash-page-content">
          <div className="dash-page-head">
            <h1>All Subscribers</h1>
            <NavLink to='/dashboard/subscribers/send-newsletter' className='btn'>Send Newsletter</NavLink>
          </div>
          <div className="item-list">
            <table className='list-table'>
              <thead>
                <tr>
                  <th width="10%">S. No.</th>
                  <th width="80%">Subscriber' Email</th>
                  <th width="10%">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td width="10%">1.</td>
                  <td width="80%">example@gmail.com</td>
                  <td width="10%">
                    <NavLink className='btn'>Delete</NavLink>
                  </td>
                </tr>
                <tr>
                  <td width="10%">1.</td>
                  <td width="80%">example@gmail.com</td>
                  <td width="10%">
                    <NavLink className='btn'>Delete</NavLink>
                  </td>
                </tr>
                <tr>
                  <td width="10%">1.</td>
                  <td width="80%">example@gmail.com</td>
                  <td width="10%">
                    <NavLink className='btn'>Delete</NavLink>
                  </td>
                </tr>
                <tr>
                  <td width="10%">1.</td>
                  <td width="80%">example@gmail.com</td>
                  <td width="10%">
                    <NavLink className='btn'>Delete</NavLink>
                  </td>
                </tr>
                <tr>
                  <td width="10%">1.</td>
                  <td width="80%">example@gmail.com</td>
                  <td width="10%">
                    <NavLink className='btn'>Delete</NavLink>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
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

  .item-list{
    overflow-x: auto;
  }

  .list-table{
    border-collapse: collapse;
    width: 100%;
  }
  
  .list-table th, .list-table td {
    border: 1px solid black;
    padding: 8px;
    font-size: ${({ theme }) => theme.fontSize.textFontSize};
    text-align: center;
    white-space: break-spaces;
  }

  .list-table td a.btn{
    padding: 7px 10px;
    display: block;
    margin-bottom: 10px;
  }
`;
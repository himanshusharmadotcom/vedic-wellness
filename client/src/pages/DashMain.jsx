import React from 'react'
import styled from 'styled-components';
import dashMainVideo from '../assets/videos/dashboard-main-video.mp4';
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { NavLink } from 'react-router-dom';
import { PiUsersThree } from "react-icons/pi";
import { IoIosArrowRoundUp } from "react-icons/io";
import { MdOutlineInsertComment } from "react-icons/md";
import { IoPeopleOutline } from "react-icons/io5";
import { MdOutlinePostAdd } from "react-icons/md";
import { ResponsiveContainer, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { CustomTooltip } from '../components/CustomTooltip';
import DashSidebar from '../components/DashSidebar';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const data = [
  {
    name: 'Users',
    total: 10,
  },
  {
    name: 'Comments',
    total: 5,
  },
  {
    name: 'Subscribers',
    total: 14,
  },
  {
    name: 'Posts',
    total: 20,
  }
];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function DashMain() {
  return (
    <Wrapper>
      <div className="dashboard-sidebar">
        <DashSidebar />
      </div>
      <div className="dashboard-main">
        <div className="dm-top">
          <div className="left-span">
            <video src={dashMainVideo} muted autoPlay loop></video>
            <div className="overlay">
              <h1>Hi, User!</h1>
            </div>
          </div>
          <div className="right-span">
            <div className="help-center">
              <span>?</span>
              <h2>Help Center</h2>
              <br />
              <NavLink to='/contact' className='btn'>Go <LiaLongArrowAltRightSolid /></NavLink>
            </div>
          </div>
        </div>
        <div className="dm-bottom">
          <div className="left-span">
            <div className="left-span-top">
              <div className="stat-box">
                <div className="sb-top">
                  <div className="sb-top-left">
                    <h3>Total Users</h3>
                    <p>0</p>
                  </div>
                  <div className="sb-top-right">
                    <span><PiUsersThree className='icon' /></span>
                  </div>
                </div>
                <div className="sb-bottom">
                  <span><IoIosArrowRoundUp className='icon' />0 Last Month</span>
                </div>
              </div>
              <div className="stat-box">
                <div className="sb-top">
                  <div className="sb-top-left">
                    <h3>Total Comments</h3>
                    <p>0</p>
                  </div>
                  <div className="sb-top-right">
                    <span><MdOutlineInsertComment className='icon' /></span>
                  </div>
                </div>
                <div className="sb-bottom">
                  <span><IoIosArrowRoundUp className='icon' />0 Last Month</span>
                </div>
              </div>
              <div className="stat-box">
                <div className="sb-top">
                  <div className="sb-top-left">
                    <h3>Total Subscribers</h3>
                    <p>0</p>
                  </div>
                  <div className="sb-top-right">
                    <span><IoPeopleOutline className='icon' /></span>
                  </div>
                </div>
                <div className="sb-bottom">
                  <span><IoIosArrowRoundUp className='icon' />0 Last Month</span>
                </div>
              </div>
              <div className="stat-box">
                <div className="sb-top">
                  <div className="sb-top-left">
                    <h3>Total Posts</h3>
                    <p>0</p>
                  </div>
                  <div className="sb-top-right">
                    <span><MdOutlinePostAdd className='icon' /></span>
                  </div>
                </div>
                <div className="sb-bottom">
                  <span><IoIosArrowRoundUp className='icon' />0 Last Month</span>
                </div>
              </div>
            </div>
            <div className="left-span-bottom">
              <div className="bar-chart-parent">
                <ResponsiveContainer width="95%" height={200}>
                  <BarChart
                    data={data}
                    margin={{
                      top: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip content={<CustomTooltip />} cursor={{ fill: "transparent" }} />
                    <Bar dataKey="total" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          <div className="right-span">
            <div className="subscriber-stats">
              <h2>Recent Subscribers</h2>
              <ul>
                <li>1. <span>example@gmail.com</span></li>
                <li>2. <span>example@gmail.com</span></li>
                <li>3. <span>example@gmail.com</span></li>
                <li>4. <span>example@gmail.com</span></li>
                <li>5. <span>example@gmail.com</span></li>
              </ul>
            </div>
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
  }

  .dm-top{
    display: flex;
    gap: 20px;

    .left-span{
      flex-basis: calc(80% - 10px);
      position: relative;
      height: 200px;
    }

    .left-span video{
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 175px 0 175px 0;
    }

    .left-span .overlay{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #0000006b;
      border: 6px solid ${({ theme }) => theme.colors.tertiaryColor};
      border-radius: 175px 0 175px 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .left-span .overlay h1{
      font-size:${({ theme }) => theme.fontSize.extraLargeHeadingFontSize};
      color: ${({ theme }) => theme.colors.tertiaryColor};
    }

    .right-span{
      flex-basis: calc(20% - 10px);
    }

    .help-center{
      background-color: ${({ theme }) => theme.colors.tertiaryColor};
      padding: 20px;
      border-radius: 10px;
      height: 100%;
      width: 100%;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      overflow: hidden;

      &::after{
        content: '';
        position: absolute;
        bottom: -50px;
        left: -50px;
        height: 200px;
        width: 200px;
        background-color: #1c3b3159;
        border-radius: 50%;
        
      }

      span{
        height: 40px;
        width: 40px;
        border: 2px solid ${({ theme }) => theme.colors.tertiaryColor};
        border-radius: 50%;
        background-color: ${({ theme }) => theme.colors.secondaryColor};
        display: flex;
        justify-content: center;
        align-items: center;
        font-size:${({ theme }) => theme.fontSize.textFontSize};
      }

      h2{
        font-size:${({ theme }) => theme.fontSize.smallHeadingFontSize};
        color: ${({ theme }) => theme.colors.primaryColor};
        z-index: 999;
      }

      a{
        z-index: 999;
      }

    }
  }

  .dm-bottom{
    display: flex;
    gap: 20px;
    margin-top: 20px;

    .left-span{
      flex-basis: calc(65% - 10px);
      position: relative;
    }

    .left-span-top{
      display: flex;
      justify-content: space-between;
      gap: 10px;
      flex-wrap: wrap;
    }

    .stat-box{
      width: calc((100% - 30px) / 4);
      min-height: 170px;
      border: 2px solid ${({ theme }) => theme.colors.primaryColor};
      border-radius: 10px;
      padding: 10px;
      position: relative;

      .sb-top{
        display: flex;
        align-items: center;
        gap: 20px;
        justify-content: space-between;

        h3, p{
          font-size:${({ theme }) => theme.fontSize.textFontSize};
          color: ${({ theme }) => theme.colors.primaryColor};
        }

        span{
          height: 40px;
          width: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          font-size:${({ theme }) => theme.fontSize.largeFontSize};
          background-color: ${({ theme }) => theme.colors.primaryColor};
          color: ${({ theme }) => theme.colors.secondaryColor};
        }
      }

      .sb-bottom{
          margin-top: 20px;

          span{
            background-color: ${({ theme }) => theme.colors.primaryColor};
            font-size:${({ theme }) => theme.fontSize.textFontSize};
            color: ${({ theme }) => theme.colors.secondaryColor};
            padding: 7px 20px;
            display: flex;
            border-radius: 10px;
            position: absolute;
            bottom: 20px;
            width: calc(100% - 20px);

            .icon{
              font-size:${({ theme }) => theme.fontSize.largeFontSize};
            }
          }
      }
    }

    .left-span-bottom{
      margin-top: 20px;

      .bar-chart-parent{
        border: 2px solid ${({ theme }) => theme.colors.primaryColor};
        border-radius: 10px;
        display: flex;
        justify-content: center;
      }  
    }

    .right-span{
      flex-basis: calc(35% - 10px);
    }

    .subscriber-stats{
      border: 2px solid ${({ theme }) => theme.colors.primaryColor};
      padding: 20px;
      border-radius: 10px;
      height: 100%;

      h2{
        font-size:${({ theme }) => theme.fontSize.headingFontSize};
        color: ${({ theme }) => theme.colors.primaryColor};
      }

      ul {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-top: 15px;

        li{
          font-size:${({ theme }) => theme.fontSize.textFontSize};
          color: ${({ theme }) => theme.colors.primaryColor};
        }
      }
      
    }
  }

  @media(max-width: 1220px){
    .dm-bottom .stat-box {
      width: calc((100% - 10px) / 2);
    }  
  }

  @media(max-width: 800px){
    .dm-top{
      flex-direction: column;
    }

    .dm-bottom .stat-box {
      width: 100%;
    }

    .dm-bottom {
      flex-direction: column;
    }
  }

  @media(max-width: 500px){
    .dm-top .left-span video {
      border-radius: 95px 0 95px 0;
    }

    .dm-top .left-span .overlay{
      border-radius: 95px 0 95px 0;
    }
  }

`;
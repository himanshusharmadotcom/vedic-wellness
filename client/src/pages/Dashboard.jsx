import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import DashSidebar from '../components/DashSidebar.jsx';
import { useLocation } from 'react-router-dom';
import DashMain from '../components/DashMain.jsx';
import DashProfile from '../components/DashProfile.jsx';
import DashPosts from '../components/DashPosts.jsx';
import DashSubscribers from '../components/DashSubscribers.jsx';
import DashComments from '../components/DashComments.jsx';
import DashUsers from '../components/DashUsers.jsx';
import DashCreatePost from '../components/DashCreatePost.jsx';
import DashSendNewsLetter from '../components/DashSendNewsletter.jsx';
import DashEditComment from '../components/DashEditComment.jsx';
import DashEditPost from '../components/DashEditPost.jsx';

export default function Dashboard() {
  const location = useLocation();
  console.log(location.search);
  const [tab, setTab] = useState('');
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl)
    }
  }, [location.search])


  return (
    <Wrapper>
      <div className="dashboard-body">
        <div className="left-span">
          <DashSidebar />
        </div>
        <div className="right-span">
          {/* dashboard comp */}
          {tab === 'dash' && <DashMain />}
          {/* profile... */}
          {tab === 'profile' && <DashProfile />}
          {/* posts... */}
          {tab === 'posts' && <DashPosts />}
          {/* create post... */}
          {tab === 'create-post' && <DashCreatePost />}
          {/* edit post... */}
          {tab === 'edit-post' && <DashEditPost />}
          {/* subscribers */}
          {tab === 'subscribers' && <DashSubscribers />}
          {/* send newsletter */}
          {tab === 'send-newsletter' && <DashSendNewsLetter />}
          {/* comments  */}
          {tab === 'comments' && <DashComments />}
          {/* edit comment  */}
          {tab === 'edit-comment' && <DashEditComment />}
          {/* users  */}
          {tab === 'users' && <DashUsers />}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .dashboard-body{
    display: flex;
    min-height: 100vh;
  }

  .dashboard-body>.right-span {
    padding: 20px;
    width: 100%;
  }
`;
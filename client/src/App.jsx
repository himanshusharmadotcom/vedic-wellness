import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Search from './pages/Search'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Treatment from './pages/Treatment'
import Contact from './pages/Contact'
import Header from './components/Header'
import Footer from './components/Footer'
import { GlobalStyle } from './GlobalStyle'
import { ThemeProvider } from 'styled-components'
import Blog from './pages/Blog'
import BookAppointment from './pages/BookAppointment'
import AppointmentConfirmation from './pages/AppointmentConfirmation'
import Products from './pages/Products'
import SingleBlog from './pages/SingleBlog'
import DashMain from './pages/DashMain'
import DashPosts from './pages/DashPosts'
import DashProfile from './pages/DashProfile'
import DashSendNewsLetter from './pages/DashSendNewsletter'
import DashSubscribers from './pages/DashSubscribers'
import DashEditPost from './pages/DashEditPost'
import DashCreatePost from './pages/DashCreatePost'
import DashComments from './pages/DashComments'
import DashEditComment from './pages/DashEditComment'
import DashUsers from './pages/DashUsers'

export default function App() {

  const theme = {
    colors: {
      primaryColor: "#1c3b31",
      secondaryColor: "#ece6da",
      tertiaryColor: "#a1c077",
      textColor: "#000",
    },
    fontSize: {
      smallTextFontSize: "14px",
      textFontSize: "16px",
      largeFontSize: "24px",
      extraSmallHeadingFontSize: "26px",
      smallHeadingFontSize: "28px",
      headingFontSize: "34px",
      largeHeadingFontSize: "38px",
      extraLargeHeadingFontSize: "44px"
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/blog' element={<Blog />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/treatment' element={<Treatment />}></Route>
            <Route path='/products' element={<Products />}></Route>
            <Route path='/single-blog' element={<SingleBlog />}></Route>
            <Route path='/book-appointment' element={<BookAppointment />}></Route>
            <Route path='/appointment-confirmation' element={<AppointmentConfirmation />}></Route>
            <Route path='/dashboard' element={<DashMain />}></Route>
            <Route path='/dashboard/posts' element={<DashPosts />}></Route>
            <Route path='/dashboard/posts/edit-post' element={<DashEditPost />}></Route>
            <Route path='/dashboard/posts/create-post' element={<DashCreatePost />}></Route>
            <Route path='/dashboard/profile' element={<DashProfile />}></Route>
            <Route path='/dashboard/subscribers' element={<DashSubscribers />}></Route>
            <Route path='/dashboard/subscribers/send-newsletter' element={<DashSendNewsLetter />}></Route>
            <Route path='/dashboard/comments' element={<DashComments />}></Route>
            <Route path='/dashboard/comments/edit-comment' element={<DashEditComment />}></Route>
            <Route path='/dashboard/users' element={<DashUsers />}></Route>
            <Route path='/search' element={<Search />}></Route>
            <Route path='/sign-in' element={<SignIn />}></Route>
            <Route path='/sign-up' element={<SignUp />}></Route>
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
}
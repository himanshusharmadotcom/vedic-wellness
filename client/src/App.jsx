import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Search from './pages/Search'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import UpdatePost from './pages/UpdatePost'
import Contact from './pages/Contact'
import Header from './components/Header'
import Footer from './components/Footer'
import { GlobalStyle } from './GlobalStyle'
import { ThemeProvider } from 'styled-components'

export default function App() {

  const theme = {
    colors: {
      primaryColor: "#373936",
      secondaryColor: "#707877",
      tertiaryColor: "#d4c8af",
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
    },
    media: {
      mobile: "768px",
      tab: "998px"
    },
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
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/create-post' element={<CreatePost />}></Route>
            <Route path='/dashboard' element={<Dashboard />}></Route>
            <Route path='/search' element={<Search />}></Route>
            <Route path='/sign-in' element={<SignIn />}></Route>
            <Route path='/sign-up' element={<SignUp />}></Route>
            <Route path='/update-post' element={<UpdatePost />}></Route>
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
}
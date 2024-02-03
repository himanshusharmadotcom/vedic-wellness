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

export default function App() {
  return (
    <BrowserRouter>
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
  )
}
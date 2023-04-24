import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import { useState } from 'react'
import LandingPage from './Pages/LandingPage'
import LoginPage from 'Pages/LoginPage'
import SignUpPage from 'Pages/SignUpPage'
import Header from 'components/Header'
import Footer from 'components/Footer'
import ProfilePage from 'Pages/ProfilePage'
import MyProducts from 'Pages/MyProducts'
import BodyContainer from 'components/BodyContainer'

function App() {

  return (
    <div className='min-vh-100 d-flex flex-column'>
      <Router>
        <Header />
        <main className='py-3'>
          <Container >
            <Routes>
              <Route path='/' element={<LandingPage />} exact />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/signUp' element={<SignUpPage />} />
              <Route path='/profile' element={<ProfilePage />} />
              <Route path='/myProducts' element={<MyProducts />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
    </div>
  )
}

export default App

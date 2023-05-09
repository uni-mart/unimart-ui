import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import LandingPage from './Pages/LandingPage'
import LoginPage from 'Pages/LoginPage'
import SignUpPage from 'Pages/SignUpPage'
import Header from 'components/Header'
import Footer from 'components/Footer'
import ProfilePage from 'Pages/ProfilePage'
import MyProducts from 'Pages/MyProducts'
import ProductView from 'Pages/ProductView'
import BodyContainer from 'components/BodyContainer'

function App() {

  return (
    <div className='min-vh-100 d-flex flex-column'>
      <Router>
        <Header />
        <BodyContainer className='flex-fill d-flex'>
          <Routes>
            <Route path='/' element={<LandingPage />} exact />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signUp' element={<SignUpPage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/myProducts' element={<MyProducts />} />
            <Route path='/productView' element={<ProductView />} />

          </Routes>
        </BodyContainer>
        <Footer />
      </Router>
    </div>
  )
}

export default App

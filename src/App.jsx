import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import LandingPage from './Pages/LandingPage'
import LoginPage from 'Pages/LoginPage'
import SignUpPage from 'Pages/SignUpPage'
import Header from 'components/Header'
import Footer from 'components/Footer'
import ProfilePage from 'Pages/ProfilePage'
import MyProducts from 'Pages/MyProducts'
import ProductView from 'Pages/ProductView'
import ProductDetailView from 'Pages/ProductDetailView'
import BodyContainer from 'components/BodyContainer'
import CartView from 'Pages/CartView'
import ShippingAndPaymentView from 'Pages/ShippingAndPaymentView'
import UploadView from 'Pages/UploadView'
import OwnProduct from 'Pages/SubPage/OwnProduct'
import OwnProfile from 'Pages/SubPage/OwnProfile'
import OwnOrder from 'Pages/SubPage/OwnOrder'
import OwnPayment from 'Pages/SubPage/OwnPayment'
import NOFOUND from 'Pages/SubPage/NOFOUND'

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
            <Route path='/profile' element={<ProfilePage />}>
              <Route index element={<OwnProfile />} />
              <Route path='products' element={<OwnProduct />} />
              <Route path='orders' element={<OwnOrder />} />
              <Route path='payment' element={<OwnPayment />} />
              <Route path='upload' element={<UploadView />} />
              <Route path="*" element={<NOFOUND />} />
            </Route>
            
            <Route path='/myProducts' element={<MyProducts />} />
            <Route path='/products' element={<ProductView />} />
            <Route path='/product/:id' element={<ProductDetailView />} />
            <Route path='/cart' element={<CartView />} />
            <Route path='/checkout-page' element={<ShippingAndPaymentView />} />
          </Routes>
        </BodyContainer>
        <Footer />
      </Router>
    </div>
  )
}

export default App

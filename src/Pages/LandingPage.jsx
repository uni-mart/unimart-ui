import { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'

const LandingPage = () => {
  return (
    <div className='bg-black w-100 min-vh-100 flex-fill' style={{
      backgroundImage: "url(src/assets/banner.avif)",
      backgroundSize: 'cover'
    }}>
      {/* <img src='src/assets/banner.avif' className='banner-img' style={{ opacity: "0.5" }} /> */}
      <div className='h-100' style={{ backgroundColor: "rgba(0,0,0,0.7)" }}>
        <div className='container h-100 d-flex flex-column justify-content-center align-items-start'>
          <h1 className='text-white' style={{ fontSize: "4rem", marginTop: "3rem" }}>SAVE THE OCEANS</h1>
          <h6 className='text-white' style={{ fontSize: "1.25rem" }}>SELL OR BUY SECOND HAND ITEMS</h6>

          <Button type='submit' variant="primary" className='bg-white text-primary' style={{ marginTop: "7rem" }}>
            Shop Now
          </Button>
        </div>
      </div>
    </div>
  )
}

export default LandingPage

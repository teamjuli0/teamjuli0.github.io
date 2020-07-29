import React, { useEffect, useState } from 'react'
import { TopBanner, Home } from './views'
import { Navbar } from './components/nav'
import './App.css'

const App = () => {
  const [isMobile, setMobile] = useState(false)
  const [currentWidth, setWidth] = useState(0)

  const isMobileBool = () => window.innerWidth < 440

  useEffect(() => {
    setWidth(window.innerWidth)
    if (isMobileBool() !== isMobile) {
      setMobile(isMobileBool())
    }

    window.onresize = () => {
      setWidth(window.innerWidth)
      if (isMobileBool() !== isMobile) {
        setMobile(isMobileBool())
      }
    }
  })

  return (
    <>
      {isMobile ? (
        <TopBanner mainHeader='50px' />
      ) : (
        <TopBanner mainHeader='60px' />
      )}
      {isMobile ? (
        <Navbar titleSize='35px' magicSize='13px' />
      ) : (
        <Navbar titleSize='40px' magicSize='15px' />
      )}
      <div
        className='container-fluid'
        style={{
          backgroundColor: '#3a4141',
          // height: '700px',
          padding: '20px 0 20px 0',
        }}
      >
        <div style={{ margin: '0 15px' }}>
          <Home currentWidth={currentWidth} isMobile={isMobile} />
        </div>
      </div>
    </>
  )
}

export default App

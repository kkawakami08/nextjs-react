import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

export default function Layout({children}) {
  return (
    <div className='font-poppins font-medium'>
        <Nav />
       
        <main>{children}</main>
        <Footer />
    </div>
  )
}

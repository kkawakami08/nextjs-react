import React from 'react'
import Image from 'next/image'
import kaoriImg from '../public/kaori-hero-square.jpg'

export default function Header() {
  return (
    <div className='w-56 h-56 bg-black overflow-hidden rounded-full relative mx-auto'>
      <Image 
        src={kaoriImg}
        alt="Kaori"
        width={310}
        height={310}
        />
      </div>
  )
}

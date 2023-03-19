import React from 'react'
import githubIcon from '../public/github-icon-white.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Nav() {
  return (
    <div className="bg-emerald-900 drop-shadow-md">
        <ul className='flex justify-between p-5'>
            <li>
             <Link href="/">
                <h1 className='text-emerald-50 tracking-widest text-3xl'>KAORI</h1>
            </Link>
            </li>
            <li>
                <a target="_blank" href="https://github.com/kkawakami08" >
                    <Image 
                        src={githubIcon}
                        alt="Github Icon"
                        width={35}
                        height={35}
                        
                    />
                </a>
            </li>
        </ul>
    </div>
  )
}

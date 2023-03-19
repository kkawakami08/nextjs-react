import React from 'react'
import githubIcon from '../public/github-icon-white.png'
import emailIcon from '../public/email-icon-white.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Nav() {
  return (
    <div className="bg-emerald-900 drop-shadow-md">
        <ul className='flex justify-between p-5 items-center'>
            <li>
             <Link href="/">
                <h1 className='text-emerald-50 tracking-widest text-3xl'>KAORI</h1>
                <h1 className='text-emerald-50 tracking-widest text-xs font-light'>codes</h1>
            </Link>
            </li>
            <li className='flex gap-4'>
                <a target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=k.kawakami08@gmail.com" >
                        <Image 
                            src={emailIcon}
                            alt="Email Icon"
                            width={35}
                            height={35}
                            
                        />
                    </a>
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

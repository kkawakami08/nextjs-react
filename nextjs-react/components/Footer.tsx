

export default function Footer() {
  return (
    <div className="bg-emerald-900 flex flex-col items-center p-5">
        <p className='opacity-80 text-sm text-emerald-50 font-thin'>Copyright © 2023 Kaori Kawakami</p>
        <ul className='flex gap-10'>
            <li>
                <a target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=k.kawakami08@gmail.com" className='opacity-80 text-sm text-emerald-50 font-thin underline' >
                    Email
                </a>
            </li>
            <li>
                <a target="_blank" href="https://github.com/kkawakami08" className='opacity-80 text-sm text-emerald-50 font-thin underline' >
                Github
                </a>
            </li>
        </ul>
        
    </div>
  )
}

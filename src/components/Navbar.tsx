import Link from 'next/link'
import React from 'react'


const Navbar = () => {
  return (
    <nav>
    <div className="h-10vh flex justify-between z-20 bg-slate-950 text-white lg:py-5 px-20 py-4 sticky top-0 border-b border-slate-900">
      <div className="flex items-center flex-1">
        <span className="text-3xl font-bold"> CradleCam</span>
      </div>
      <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
        <div className="flex-10">
          <ul className="flex gap-8 mr-16 text-[18px]">
            <Link href="/">
              <li className="hover:text-primary transition border-b-2 border-slate-950 hover:border-primary cursor-pointer">
                Home
              </li>
            </Link>
            <Link href="/monitoring">
              <li className="hover:text-primary transition border-b-2 border-slate-950 hover:border-primary cursor-pointer">
                Monitoring
              </li>
            </Link>
            <Link href="/ourteams">
              <li className="hover:text-primary transition border-b-2 border-slate-950 hover:border-primary cursor-pointer">
                Our Teams
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
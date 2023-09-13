import React from 'react'
import Image from 'next/image'
export default function Navbar() {
  return (
    <nav className= "fixed w-full h-24 shadow-xl text-[22px]">
      <div>
        <div>
          <Image
          
          />
        </div>
        <div>
        <ul classeName= "flex-none">
            <li> About </li>
            <li> Movies </li>
            <li> Actors </li>
        </ul>
        </div>
      </div>
        
    </nav>
  )
}

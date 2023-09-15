import React from "react"
import Image from "next/image"
import logo from "../../../public/logo.png"
import Link from "next/link"
import { CgMenuGridO } from "react-icons/cg"
import { useState } from "react"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const handleNav = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className="w-full h-24 shadow-xl text-[18px] bg-[#141F26]  bllur-sm">
      <div className="flex flex-row justify-between items-center h-full w-full px-4 2xl:px-16">
        {/* Logo part */}
        <Link href="#">
          <Image src={logo} width={200} height={200} alt="Logo-Cinephile" />
        </Link>

        {/* Links [Genre, Movies, Actors] */}
        <div className="hidden min-[790px]:flex">
          <ul className="hidden min-[790px]:flex">
            {/*! Links to add in hrf attributes */}
            <Link href="#">
              <li className="ml-10 uppercase hover:border-b border-b-[#1E4445] hover:text-[#72fbd7] active text-base">
                {" "}
                Genre
                {/* <ul>
                    <li>[from the API]</li>
                  </ul> */}
              </li>
            </Link>

            <Link href="#">
              <li className="ml-10 uppercase hover:border-b border-b-[#1E4445] hover:text-[#72fbd7] active text-base">
                {" "}
                Movies
                {/* <ul>
                    <li>Top Rate</li>
                    <li>Popular</li>
                    <li>Latest</li>
                    <li>Now Playing</li>
                    <li>Upcoming</li>
                  </ul> */}
              </li>
            </Link>

            <Link href="#">
              <li className="ml-10 uppercase hover:border-b border-b-[#1E4445] hover:text-[#72fbd7] active text-base">
                {" "}
                Actors{" "}
              </li>
            </Link>
          </ul>
        </div>

        {/* Search feild */}
        <div className="min-[790px]: flex justify-center">
          <input
            class="bg-[#141F26] border-2 border-[#1E4445]  h-10 px-5 pr-16 rounded-2xl text-sm text-[#F2F2F2] .placeholder-gray-400 focus:outline-none min-[790px]:flex min-[790px]:place-self-center"
            type="search"
            name="search"
            placeholder="Search..."
          />
          <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
            {/* <svg 
              class="text-gray-600 h-4 w-4 fill-current" 
              style="enable-background:new 0 0 56.966 56.966;"
              width="512px" height="512px">
              </svg> */}
          </button>
        </div>

        {/* Hamburger menu for mobile app */}
        <div
          onClick={handleNav}
          className="min-[790px]:hidden cursor-pointer pl-14"
        >
          <CgMenuGridO size={35} className="color-[#1E4445]" />
        </div>
      </div>
    </nav>
  )
}

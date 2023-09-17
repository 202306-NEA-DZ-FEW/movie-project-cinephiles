import Link from "next/link"
import { CgMenuGridO } from "react-icons/cg"
import {
  AiOutlineCaretDown,
  AiOutlineCaretUp,
  AiOutlineClose,
} from "react-icons/ai"
import { useState } from "react"
import Logo from "./Logo"
import LinkMenu from "./LinkMenu"
import Searchbar from "./Searchbar"
import DropdownGenres from "./DropdownGenres"
import DropdownMovies from "./DropdownMovies"

export default function Navbar({ genres }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const handleNav = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className="w-full h-24 shadow-xl text-[18px] bg-[#141F26]  bllur-sm">
      <div className="flex flex-row justify-between items-center h-full w-full px-4 2xl:px-16">
        <Logo />

        {/* Links [Genre, Movies, Actors] */}
        <div className="hidden min-[790px]:flex">
          <ul className="hidden min-[790px]:flex">
            {/*! Links to add in hrf attributes */}
            <LinkMenu option="Home" href="#" />
            <DropdownGenres href="#" genres={genres} />
            <LinkMenu option="Movies" href="#" />
            <LinkMenu option="Actors" href="#" />
          </ul>
        </div>

        {/* Search feild */}
        <div className="min-[790px]: flex justify-center ">
          <Searchbar />
        </div>

        {/* Hamburger menu for mobile app */}
        <div
          onClick={handleNav}
          className="min-[790px]:hidden cursor-pointer pl-14"
        >
          <CgMenuGridO size={35} className="color-[#1E4445]" />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#141F26] bg-opacity-80 p-10 ease-in duration-500 "
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500 "
        }
      >
        <div className="flex w-full items-center justify-end">
          {/* Close icon => X */}
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={25} className="color-[#1E4445]" />
          </div>
        </div>

        {/* Links */}
        <div>
          <ul>
            <Link href="#">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer text-[#afb1b2] hover:border-b border-b-[#1E4445] hover:text-[#72fbd7] active text-base"
              >
                Home
              </li>
            </Link>

            <Link href="#">
              <li
                onClick={() => setMenuOpen(false)}
                className="flex flex-row gap-2 py-4 cursor-pointer text-[#afb1b2] hover:border-b border-b-[#1E4445] hover:text-[#72fbd7] active text-base"
              >
                Genre
                {menuOpen ? (
                  <AiOutlineCaretDown className="h-8" />
                ) : (
                  <AiOutlineCaretUp className="h-8" />
                )}
              </li>
            </Link>

            <Link href="#">
              <li
                onClick={() => setMenuOpen(false)}
                className="flex flex-row gap-2 py-4 cursor-pointer text-[#afb1b2] hover:border-b border-b-[#1E4445] hover:text-[#72fbd7] active text-base"
              >
                Movies
                {menuOpen ? (
                  <AiOutlineCaretDown className="h-8" />
                ) : (
                  <AiOutlineCaretUp className="h-8" />
                )}
              </li>
            </Link>

            <Link href="#">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer text-[#afb1b2] hover:border-b border-b-[#1E4445] hover:text-[#72fbd7] active text-base"
              >
                Actors
              </li>
            </Link>
          </ul>

          {/* Logo part */}
          <Logo />
        </div>
      </div>
    </nav>
  )
}

// {!menuOpen ? (
//   <AiOutlineCaretDown className="h-8" />)
// : (
//   <AiOutlineCaretUp className="h-8" />
// )}

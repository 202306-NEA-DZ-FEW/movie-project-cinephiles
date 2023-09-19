import { CgMenuGridO } from "react-icons/cg"
import { useState } from "react"
import Logo from "./NavbrLogo"
import LinkMenu from "./LinkMenu"
import Link from "next/link"
import DropdownGenres from "./DropdownGenres"
import DropdownMovies from "./DropdownMovies"
import SearchBar from "./SearchFunction/SearchBar"
import SearchbarTemp from "./SearchFunction/SearchbarTemp"

const Navbar = ({ data }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const handleNav = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className="w-full h-24 shadow-xl text-[18px] bg-[#141F26]  bllur-sm">
      <div className="flex flex-row justify-between items-center h-full w-full px-4 2xl:px-16">
        <Logo />

        {/* Links [Home, Genre, Movies, Actors] */}
        <div className="hidden min-[790px]:flex">
          {/*! Links to add in hrf attributes */}
          <LinkMenu option="Home" href="/" />
          <DropdownGenres option={data} />
          <DropdownMovies option="Movies" href="#" />
          <LinkMenu option="Actors" href="/person" />
        </div>

        {/* Search feild */}
        <div className="min-[790px]: flex justify-center ">
          {/* <SearchBar /> */}
          <SearchbarTemp />
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

export default Navbar

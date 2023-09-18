import React from "react"
import { BiSearchAlt2 } from "react-icons/bi"

export default function Searchbar() {
  return (
    <div className="flex flex-row border-2 border-[#1E4445]  rounded-2xl">
      <button type="submit" className="">
        <BiSearchAlt2 size={20} className="color-[#1E4445]" />
      </button>
      <input
        class="h-10 px-5 pr-16 text-sm bg-[#141F26]  text-[#F2F2F2] .placeholder-gray-400 focus:outline-none min-[790px]:flex min-[790px]:place-self-center border-left-1"
        type="search"
        name="search"
        placeholder="Search..."
      />
    </div>
  )
}

import Link from "next/link"
import React from "react"

export default function LinkMenu({ option, href }) {
  return (
    <Link href={href}>
      <ul>
        <li className="mt-10 ml-10 hover:border-b border-b-[#1E4445] hover:text-[#72fbd7] active text-base">
          {option}
        </li>
      </ul>
    </Link>
  )
}

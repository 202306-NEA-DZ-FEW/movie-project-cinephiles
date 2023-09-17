import Link from "next/link"

export default function Dropdown() {
  const options = ["Top Rate", "Popular", "Latest", "Now playing", "Upcoming"]

  const option = options.map((option, index) => {
    return (
      <li
        key={index}
        className="flex flex-row gap-2 ml-10 uppercase hover:border-b border-b-[#1E4445] hover:text-[#72fbd7] active text-base"
      >
        {option}
      </li>
    )
  })

  return (
    <div>
      <Link href="#">{option}</Link>
    </div>
  )
}

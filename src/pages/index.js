import Card from "@/components/MovieCard/MovieCard"
import Link from "next/link"
import fetcher from "@/utils/API"
import { useState } from "react"
import LatestMovies from "@/components/HomePageMovies/LatestMovies"
import SearchResults from "@/components/Navbar/SearchFunction/SearchResults"
import Carousel from "@/components/Carousel/Carousel"
export default function Home({ latest }) {
  const options = ["Top Rated", "Popular", "Now Playing", "Upcoming"]

  return (
    <main>
      <ul className="flex justify-center space-x-4">
        {options.map((option) => (
          <li
            key={option}
            className="flex flex-row mt-10 ml-10 hover:border-b border-b-[#1E4445] hover:text-[#72fbd7] active text-base"
          >
            <Link
              href={`./categorys/${option.toLowerCase().replace(/\s+/g, "_")}`}
            >
              {option}
            </Link>
          </li>
        ))}
      </ul>
      <Carousel latest={latest} />

      <SearchResults />
      <h2 className="text-[#3FAF95] font-medium underline underline-offset-8 text-3xl mt-20 ml-20">
        {" "}
        Latest Movies{" "}
      </h2>
      <LatestMovies latest={latest} />
    </main>
  )
}

export async function getServerSideProps() {
  const data = await fetcher("trending/movie/day?language=en-US")
  return {
    props: {
      latest: data,
    },
  }
}

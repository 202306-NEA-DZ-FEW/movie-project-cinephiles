import Card from "@/components/MovieCard/MovieCard"
import Carousel from "../components/Carousel/Carousel"
import Link from "next/link"
import fetcher from "@/utils/API"
import { useState } from "react"
import LatestMovies from "@/components/HomePageMovies/LatestMovies"
import SearchResults from "@/components/Navbar/SearchFunction/SearchResults"
import Navbar from "@/components/Navbar/Navbar"

export default function Home({ latest }) {
  const options = ["Top Rated", "Popular", "Now Playing", "Upcoming"]

  return (
    <main>
      {/* This part link to the Navbar */}
      {/* <ul>
        <li>
          {options.map((option) => (
            <>
              <Link
                href={`./categorys/${option
                  .toLowerCase()
                  .replace(/\s+/g, "_")}`}
              >
                {option}
              </Link>
            </>
          ))}
        </li>
      </ul>
      <Carousel latest={latest} />
      <Link href="/movies/movie">Movies</Link> */}
      <Navbar />
      <SearchResults />
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

import Card from "@/components/MovieCard/MovieCard"
import Link from "next/link"
import fetcher from "@/utils/API"
import { useState } from "react"
import LatestMovies from "@/components/HomePageMovies/LatestMovies"
import SearchResults from "@/components/Navbar/SearchFunction/SearchResults"

export default function Home({ latest }) {
  const options = ["Top Rated", "Popular", "Now Playing", "Upcoming"]

  return (
    <main>
      {/* <Carousel latest={latest} /> */}
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

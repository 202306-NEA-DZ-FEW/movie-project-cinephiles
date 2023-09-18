import MovieCard from "@/components/MovieCard/MovieCard"
import Link from "next/link"
import React from "react"
import fetcher from "@/utils/API"

export default function Movies({ nowPlaying, popular, topRated, upcoming }) {
  return (
    <div>
      <h1 className="text-3xl">nowPlaying</h1>
      <div className="gap-8 grid grid-cols-2 sm:grid-cols-7">
        {nowPlaying.results.map((movie) => (
          <>
            <Link href={`./${movie.id}`}>
              <MovieCard {...movie} />
            </Link>
          </>
        ))}
      </div>

      <h1 className="text-2xl">popular</h1>
      <div className="gap-8 grid grid-cols-2 sm:grid-cols-6">
        {popular.results.map((movie) => (
          <>
            <Link href={`./${movie.id}`}>
              <MovieCard {...movie} />
            </Link>
          </>
        ))}
      </div>

      <h1 className="text-2xl">topRated</h1>
      <div className="gap-8 grid grid-cols-2 sm:grid-cols-6">
        {topRated.results.map((movie) => (
          <>
            <Link href={`./${movie.id}`}>
              <MovieCard {...movie} />
            </Link>
          </>
        ))}
      </div>

      <h1 className="text-2xl">upcoming</h1>
      <div className="gap-8 grid grid-cols-2 sm:grid-cols-6">
        {upcoming.results.map((movie) => (
          <>
            <Link href={`./${movie.id}`}>
              <MovieCard {...movie} />
            </Link>
          </>
        ))}
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const data1 = await fetcher("/movie/now_playing?language=en-US&page=1")
  const data2 = await fetcher("movie/popular?language=en-US&page=1")
  const data3 = await fetcher("movie/top_rated?language=en-US&page=1")
  const data4 = await fetcher("/movie/upcoming?language=en-US&page=1")

  return {
    props: {
      nowPlaying: data1,
      popular: data2,
      topRated: data3,
      upcoming: data4,
    },
  }
}

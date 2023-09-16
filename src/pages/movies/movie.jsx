import MovieCard from "@/components/MovieCard/MovieCard"
import Link from "next/link"
import React from "react"

export default function Movies({ latest }) {
  return (
    <div className="gap-8 grid grid-cols-2 sm:grid-cols-6">
      {latest.results.map((movie) => (
        <>
          <Link href={`./${movie.id}`}>
            <MovieCard {...movie} />
          </Link>
        </>
      ))}
    </div>
  )
}

export async function getServerSideProps() {
  const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US"
  const options = {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOTNjOWRlOGU3ZDMwODE1ZTlmMWFiOGFkOGE5YThhYyIsInN1YiI6IjY1MDE4MDRmZWZlYTdhMDEzN2QyZDlkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fMpdyrHYfxKUcdPhwPSp6WqoGXK8nK96MJlFAQ8rHwE",
    },
  }
  const res = await fetch(url, options)
  const data = await res.json()

  return {
    props: {
      latest: data,
    },
  }
}

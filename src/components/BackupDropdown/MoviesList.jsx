import React, { useEffect, useState } from "react"

const MoviesList = ({ selectedGenre }) => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchMoviesByGenre = async () => {
      if (!selectedGenre) {
        return
      }
      try {
        const apiKey = "Ye93c9de8e7d30815e9f1ab8ad8a9a8ac"
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?with_genres=${selectedGenre}&api_key=${apiKey}`,
          {
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOTNjOWRlOGU3ZDMwODE1ZTlmMWFiOGFkOGE5YThhYyIsInN1YiI6IjY1MDE4MDRmZWZlYTdhMDEzN2QyZDlkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fMpdyrHYfxKUcdPhwPSp6WqoGXK8nK96MJlFAQ8rHwE",
            },
          },
        )

        if (!response.ok) {
          throw new Error("Network response was not ok")
        }

        const data = await response.json()
        setMovies(data.results)
      } catch (error) {
        console.error("Error fetching movies:", error)
      }
    }

    fetchMoviesByGenre()
  }, [selectedGenre])
  return (
    <div>
      <h2>Movies of Selected Genre</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default MoviesList

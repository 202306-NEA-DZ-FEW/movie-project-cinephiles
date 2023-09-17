import React, { useEffect, useState } from "react"
import fetcher from "@/utils/API"

export default function SingleMovie({ movieDetails }) {
  const [genres, setGenres] = useState([])
  const [productionCompanies, setProductionCompanies] = useState([]) // State for production companies
  const [actors, setActors] = useState([]) // State for actors
  const [relatedMovies, setRelatedMovies] = useState([]) // State for related movies
  const [trailer, setTrailer] = useState("") // State for the trailer URL

  const movieId = movieDetails.id

  useEffect(() => {
    async function fetchGenres() {
      try {
        const genresData = await fetcher(`movie/${movieId}?language=en-US`)
        setGenres(genresData.genres)
      } catch (error) {
        console.error("Error fetching genres:", error)
      }
    }

    async function fetchProductionCompanies() {
      try {
        const companiesData = await fetcher(`movie/${movieId}?language=en-US`)
        setProductionCompanies(companiesData.production_companies)
      } catch (error) {
        console.error("Error fetching production companies:", error)
      }
    }

    async function fetchActors() {
      try {
        const actorsData = await fetcher(`movie/${movieId}/credits`)
        const topActors = actorsData.cast.slice(0, 5)
        setActors(topActors)
      } catch (error) {
        console.error("Error fetching actors:", error)
      }
    }

    async function fetchRelatedMovies() {
      try {
        const relatedMoviesData = await fetcher(
          `movie/${movieId}/recommendations`,
        )
        // Assuming relatedMoviesData contains an array of related movies, you can extract the first 5 here.
        const topRelatedMovies = relatedMoviesData.results.slice(0, 5)
        setRelatedMovies(topRelatedMovies)
      } catch (error) {
        console.error("Error fetching related movies:", error)
      }
    }

    async function fetchTrailer() {
      try {
        const trailerData = await fetcher(`movie/${movieId}/videos`)
        // Assuming trailerData contains an array of videos, you can find the trailer here.
        const trailerVideo = trailerData.results.find(
          (video) => video.type === "Trailer",
        )
        if (trailerVideo) {
          setTrailer(`https://www.youtube.com/watch?v=${trailerVideo.key}`)
        }
      } catch (error) {
        console.error("Error fetching trailer:", error)
      }
    }

    fetchGenres()
    fetchProductionCompanies()
    fetchActors()
    fetchRelatedMovies()
    fetchTrailer()
  }, [movieId])

  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
        alt={`${movieDetails.title} Poster`}
      />
      <img
        src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`}
        alt={`${movieDetails.title} Poster`}
      />
      <h2>Title : {movieDetails.title}</h2>
      <p> </p>
      <p>Release date : {movieDetails.release_date} </p>
      <p>Runtime : {movieDetails.runtime} </p>
      <p>Movie Language:{movieDetails.original_language} </p>
      <p>The movie rating : {movieDetails.vote_average} </p>
      <p>votes : {movieDetails.vote_count}</p>
      <p>Director name</p>
      <p>Overview of the movie : {movieDetails.overview} </p>
      <p>Genres: {genres.map((genre) => genre.name).join(", ")}</p>
      <p>
        Production Companies:{" "}
        {productionCompanies.map((company) => company.name).join(", ")}
      </p>
      <p>Top 5 Actors: {actors.map((actor) => actor.name).join(", ")}</p>
      <p>
        Related Movies: {relatedMovies.map((movie) => movie.title).join(", ")}
      </p>
      <p>
        Trailer: <a href={trailer}>Watch Trailer</a>
      </p>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { movieId } = context.query
  const data = await fetcher(`movie/${movieId}?language=en-US`)

  return {
    props: {
      movieDetails: data,
    },
  }
}

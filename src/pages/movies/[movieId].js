import React, { useEffect, useState } from "react"
import fetcher from "@/utils/API"
import Link from "next/link"
import MovieCard from "@/components/MovieCard/MovieCard"

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
      {/* trailer */}
      <div className="  bg-white relative flex flex-col justify-center items-center ">
        <img
          className="w-full trailer  "
          src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`}
          alt={`${movieDetails.title} Poster`}
        />
        <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-gray to-black"></div>
        <button
          class="absolute rounded-lg bg-[#3FAF95] py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-500/20 transition-all hover:shadow-lg hover:shadow-gray-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-light="true"
        >
          <a href={trailer}>Watch Trailer</a>
        </button>
      </div>

      <div className="grid grid-cols-2 gap-1 mt-10 ">
        <div className="col-start-1 col-end-1 w-2/3 px-2 ">
          <img
            className=" ml-24 rounded-3xl "
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt={`${movieDetails.title} Poster`}
          />
        </div>
        <div className="">
          <div className="text-5xl underline underline-offset-8 font-bold my-6">
            <h1>{movieDetails.title}</h1>
          </div>

          <div className=" text-lg leading-loose mr-4 ">
            <p className="leading-relaxed">
              <span className="text-[#3FAF95] font-medium text-xl">
                Overview of the movie :
              </span>{" "}
              {movieDetails.overview}{" "}
            </p>
            <p>
              <span className="text-[#3FAF95] font-medium text-xl">
                Genres :
              </span>{" "}
              {genres.map((genre) => genre.name).join(", ")}
            </p>
            <p>
              <span className="text-[#3FAF95] font-medium text-xl">
                Movie Languages :{" "}
              </span>
              {movieDetails.original_language}{" "}
            </p>
            <p>
              <span className="text-[#3FAF95] font-medium text-xl">
                Release Date :
              </span>{" "}
              {movieDetails.release_date}{" "}
            </p>
            <p>
              <span className="text-[#3FAF95] font-medium text-xl">
                Runtime :
              </span>{" "}
              {movieDetails.runtime}{" "}
            </p>
            <p>
              <span className="text-[#3FAF95] font-medium text-xl">
                Rating :
              </span>{" "}
              {movieDetails.vote_average}{" "}
            </p>
            <p>
              <span className="text-[#3FAF95] font-medium text-xl">Vote :</span>{" "}
              {movieDetails.vote_count}
            </p>
          </div>

          <div className=" text-lg leading-loose ">
            <p>
              <span className="text-[#3FAF95] font-medium text-xl">
                Production Companies:
              </span>{" "}
              {productionCompanies.map((company) => company.name).join(", ")}
            </p>
            <p>
              <span className="text-[#3FAF95] font-medium text-xl">
                Top 5 Actors:
              </span>{" "}
              {actors.map((actor) => actor.name).join(", ")}
            </p>
          </div>
        </div>
      </div>

      <div className="ml-20 mt-10 ">
        <h1 className="text-[#3FAF95] font-bold text-2xl">Related Movies :</h1>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-6 gap-6 m-10 ml-20">
        {relatedMovies.map((movie) => (
          <div key={movie.id}>
            <Link href={`../movies/${movie.id}`}>
              <MovieCard {...movie} />
            </Link>
          </div>
        ))}
      </div>
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

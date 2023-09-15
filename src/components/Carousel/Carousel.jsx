import React from "react"
import useEmblaCarousel from "embla-carousel-react"

const EmblaCarousel = ({ latest }) => {
  const [emblaRef] = useEmblaCarousel({ loop: false })

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {latest.results.map((movie) => (
          <div className="embla__slide" key={movie.id}>
            <div className="carousel-slide relative">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={`${movie.title} Poster`}
                className="w-full"
              />
              <div className="carousel-overlay absolute inset-0 flex flex-col align-middle bg-opacity-70 bg-black text-white p-4 w-96">
                <h1 className="text-3xl font-bold">{movie.title}</h1>
                <p className="text-lg">{movie.overview}</p>
                <p className="text-lg">
                  Rated :{movie.vote_average}
                  <span className="text-yellow-400 pr-1">&#9733;</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EmblaCarousel

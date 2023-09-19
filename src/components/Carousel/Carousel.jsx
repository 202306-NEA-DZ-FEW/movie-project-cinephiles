import React, { useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs"

const autoplayOptions = {
  delay: 4000,
  rootNode: (emblaRoot) => emblaRoot.parentElement,
}

const EmblaCarousel = ({ latest }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay(autoplayOptions),
  ])
  return (
    <div className="embla group mt-1 " ref={emblaRef}>
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
                <h1 className="text-3xl font-bold ml-5 mb-3">{movie.title}</h1>
                <p className="text-lg ml-5 mb-3 w-1/2">{movie.overview}</p>
                <p className="text-lg ml-5 font-bold mb-3">
                  Rated : {movie.vote_average}
                  <span className="text-yellow-400 pr-1"> &#9733;</span>
                </p>

                {/* left arrow */}

                <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                  <BsChevronCompactLeft size={30} />
                </div>

                {/* right arrow */}

                <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                  <BsChevronCompactRight size={30} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EmblaCarousel

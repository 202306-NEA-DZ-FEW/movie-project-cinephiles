import React, { useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"

const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()) // Access API
    }
  }, [emblaApi])

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <img
            src="https://pixabay.com/get/gbccdac9eddd7cf786f9b17c56f856379abfbdfe21d0aff97dc9df3908d3b0407782c744a5818bb1c95e6c59472ab1575d8ec3a45eace58faef9893eff6a3b4a9_1920.jpg"
            alt="image1"
          />
        </div>
        <div className="embla__slide">
          <img
            src="https://pixabay.com/get/g9bf2090caefa1390e605b99dc4dd38967f9d6828fe52383b1e95259576775917eaa40d141ad630b1bddee9cdf492c1b1_1920.jpg"
            alt="image2"
          />
        </div>
        <div className="embla__slide">
          <img
            src="https://pixabay.com/get/g132fba550357fcf2ba63c60ca43a48d1a4cb7339b7809113d2ecca6d18aa2f76f761a27705f6ae87eae04f26646798acd978c33fb739a1ec8a5d62e243ccfa5a_1920.jpg"
            alt="image3"
          />
        </div>
      </div>
    </div>
  )
}
export default EmblaCarousel

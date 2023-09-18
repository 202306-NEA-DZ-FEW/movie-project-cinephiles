// pages/index.js
import React, { useState } from "react"
import Navbar from "@/components/Navbar/Navbar"
import MoviesList from "@/components/BackupDropdown/MoviesList"
import LatestMovies from "@/components/HomePageMovies/LatestMovies"

const genres = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  // Add more genres as needed
]

const Home = () => {
  const [selectedGenre, setSelectedGenre] = useState("")

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value)
  }

  return (
    <div>
      <Navbar
        genres={genres}
        selectedGenre={selectedGenre}
        onGenreChange={handleGenreChange}
      />
      <MoviesList selectedGenre={selectedGenre} />
      <LatestMovies latest={latest} />
    </div>
  )
}

export default Home
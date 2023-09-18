// pages/index.js
import React, { useState } from "react"
import MoviesList from "@/components/BackupDropdown/MoviesList"
import { genres } from "@/utils/dbGenres"
import GenreDropdown from "@/components/BackupDropdown/GenreDropdown"

const Home = () => {
  const [selectedGenre, setSelectedGenre] = useState("")

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value)
  }

  return (
    <div>
      <GenreDropdown genres={genres} />
      <MoviesList selectedGenre={selectedGenre} />
    </div>
  )
}

export default Home

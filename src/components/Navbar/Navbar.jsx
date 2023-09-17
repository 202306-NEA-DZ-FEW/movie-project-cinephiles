import React from "react"
import GenreDropdown from "../GenreDropdown"

const Navbar = ({ genres, selectedGenre, onGenreChange }) => {
  return (
    <nav>
      <h1>Movie Genres App</h1>
      <GenreDropdown
        genres={genres}
        selectedGenre={selectedGenre}
        onChange={onGenreChange}
      />
    </nav>
  )
}

export default Navbar

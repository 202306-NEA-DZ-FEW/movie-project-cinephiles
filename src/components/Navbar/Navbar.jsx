import React from "react"
import SearchBar from "./Search/Searchbar"
import GenreDropdown from "./GenreDropdown"

const Navbar = ({ genres, selectedGenre, onGenreChange }) => {
  return (
    <nav>
      {/* <h1>Movie Genres App</h1>
      <GenreDropdown
        genres={genres}
        selectedGenre={selectedGenre}
        onChange={onGenreChange}
      /> */}
      <SearchBar />
    </nav>
  )
}

export default Navbar

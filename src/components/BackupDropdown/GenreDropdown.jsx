// components/GenreDropdown.js
import React from "react"
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material"

const GenreDropdown = ({ genres, selectedGenre, onChange }) => {
  return (
    <FormControl>
      <InputLabel>Select Genre</InputLabel>
      <Select value={selectedGenre} onChange={onChange}>
        {genres.map((genre) => (
          <MenuItem key={genre.id} value={genre.id}>
            {genre.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default GenreDropdown

import React from "react"
import { useSearchContext } from "./SearchContext"
import ResultCard from "./ResultCard"
import Grid from "@mui/material/Grid"

const SearchResults = () => {
  const { searchResults } = useSearchContext() // Use the context to access the search results

  // Check if data is undefined or empty
  if (!searchResults || searchResults.length === 0) {
    return <div></div>
  }

  return (
    <Grid container spacing={3}>
      {searchResults.map((item, index) => (
        <Grid item xs={3} key={index}>
          <ResultCard data={item} />
        </Grid>
      ))}
    </Grid>
  )
}

export default SearchResults

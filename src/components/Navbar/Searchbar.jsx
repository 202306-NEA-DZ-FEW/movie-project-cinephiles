import React, { useEffect, useState } from "react"
import ResultCard from "./ResultCard"
import Grid from "@mui/material/Grid"

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [data, setData] = useState([])

  const fetchData = () => {
    const url = `https://api.themoviedb.org/3/search/multi?query=${searchTerm}&include_adult=false&language=en-US&page=1`
    const options = {
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOTNjOWRlOGU3ZDMwODE1ZTlmMWFiOGFkOGE5YThhYyIsInN1YiI6IjY1MDE4MDRmZWZlYTdhMDEzN2QyZDlkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fMpdyrHYfxKUcdPhwPSp6WqoGXK8nK96MJlFAQ8rHwE",
      },
    }
    fetch(url, options)
      .then((res) => res.json())
      .then((result) => {
        setData([...result.results])
      })
  }
  useEffect(() => {
    fetchData()
  }, [searchTerm])

  return (
    <>
      <div className="flex values-center space-x-2">
        <input
          type="text"
          placeholder="Search for a movie or a person..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <Grid container spacing={3}>
        {data.map((item, index) => {
          return (
            <Grid item xs={3} key={index}>
              {" "}
              <ResultCard data={item} />{" "}
            </Grid>
          )
        })}
      </Grid>
    </>
  )
}

export default SearchBar

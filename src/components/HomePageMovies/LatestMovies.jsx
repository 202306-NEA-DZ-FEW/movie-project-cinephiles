import { Grid } from "@mui/material"
import LatestMoviesCard from "./LatestMoviesCard"

function LatestMovies({ latest }) {
  return (
    <div>
      <Grid container spacing={3}>
        {latest.results.map((movie, index) => (
          <Grid item xs={2} key={index}>
            <LatestMoviesCard data={movie} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default LatestMovies

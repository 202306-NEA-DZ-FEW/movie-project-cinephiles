import MovieCard from "../MovieCard/MovieCard"
import Link from "next/link"

function LatestMovies({ latest }) {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 sm:grid-cols-6 gap-4 m-20">
        {latest.results.map((movie) => (
          <div key={movie.id}>
            <Link href={`../movies/${movie.id}`}>
              <MovieCard {...movie} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LatestMovies

// import { Grid } from "@mui/material"
// import LatestMoviesCard from "./LatestMoviesCard"

// function LatestMovies({ latest }) {
//   return (
//     <div>
//       <Grid container spacing={3}>
//         {latest.results.map((movie, index) => (
//           <Grid item xs={2} key={index}>
// <Link href={../movies/${movie.id}}>
//             <LatestMoviesCard data={movie} />
//               </Link>
//            </Grid>
//         ))}
//       </Grid>
//     </div>
//   )
// }

// export default LatestMovies

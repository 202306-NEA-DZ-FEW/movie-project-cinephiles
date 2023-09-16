import Carousel from "../components/Carousel/Carousel"

export default function Home({ latest }) {
  return (
    <main>
      <Carousel latest={latest} />
    </main>
  )
}

export async function getServerSideProps() {
  const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US"
  const options = {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOTNjOWRlOGU3ZDMwODE1ZTlmMWFiOGFkOGE5YThhYyIsInN1YiI6IjY1MDE4MDRmZWZlYTdhMDEzN2QyZDlkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fMpdyrHYfxKUcdPhwPSp6WqoGXK8nK96MJlFAQ8rHwE",
    },
  }
  const res = await fetch(url, options)
  const data = await res.json()

  return {
    props: {
      latest: data,
    },
  }
}

// export default function Movies({ latestMovie, genreData }) {
//   // Create a dictionary/map to map genre IDs to names
//   const genreMap = {};
//   genreData.genres.forEach((genre) => {
//     genreMap[genre.id] = genre.name;
//   });

//   return (
//     <div style={{display: "flex", justifyContent: "space-evenly"}} >
//       {latestMovie.results.map((movie) => (
//         <div key={movie.id}>
//           <h2>{movie.title}</h2>
//           <img
//             src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//             alt={`${movie.title} Poster`}
//             style={{width:"150px"}}
//           />
//           <p>
//             Genre:{" "}
//             {movie.genre_ids.map((genreId) => (
//               <span key={genreId}>{genreMap[genreId]}, </span>
//             ))}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export async function getStaticProps() {
//   const data = await fetcher("trending/movie/day?language=en-US");
//   const genre = await fetcher("genre/movie/list");

//   return {
//     props: {
//       latestMovie: data,
//       genreData: genre,
//     },

//   };
// }

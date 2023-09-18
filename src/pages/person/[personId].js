import { fetcher } from "../../utils/api"

export default function PersonId({ personData }) {
  return (
    <div>
      <h1>{personData.name}</h1>
      <img
        src={"https://image.tmdb.org/t/p/w500/" + personData.profile_path}
        alt={personData.name}
      />
      <h3>Personal Info</h3>
      <h4>Also known as: {personData.also_known_as}</h4>
      <h4>Known For {personData.known_for_department}</h4>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { personId } = context.query

  const data = await fetcher(`person/${personId}?language=en-US&page=1`)

  return {
    props: {
      personData: data,
    },
  }
}

// import MovieCard from "@/components/MovieCard/MovieCard"
// import Link from "next/link"
// import React from "react"

// export default function Movies({ latest }) {
//   return (
//     <div className="gap-8 grid grid-cols-2 sm:grid-cols-6">
//       {latest.results.map((movie) => (
//         <>
//           <Link href={./${movie.id}}>
//             <MovieCard {...movie} />
//           </Link>
//         </>
//       ))}
//     </div>
//   )
// }

// export async function getServerSideProps() {
//   const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US"
//   const options = {
//     headers: {
//       accept: "application/json",
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOTNjOWRlOGU3ZDMwODE1ZTlmMWFiOGFkOGE5YThhYyIsInN1YiI6IjY1MDE4MDRmZWZlYTdhMDEzN2QyZDlkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fMpdyrHYfxKUcdPhwPSp6WqoGXK8nK96MJlFAQ8rHwE",
//     },
//   }
//   const res = await fetch(url, options)
//   const data = await res.json()

//   return {
//     props: {
//       latest: data,
//     },
//   }
// }

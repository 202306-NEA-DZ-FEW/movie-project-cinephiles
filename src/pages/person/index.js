import Navbar from "../../components/Navbar/Navbar"
import PersonCard from "../../components/PersonCard"
import Grid from "@mui/material/Unstable_Grid2"
import Link from "next/link"
import fetcher from "@/utils/API"

const Persons = ({ people }) => {
  return (
    <>
      <Grid className=" m-10" container spacing={1}>
        {people.results.map((person, index) => {
          return (
            <Grid key={person.id} item xs={12} sm={6} md={3} className="mb-6  ">
              <Link className="m-8 " href={`/person/${person.id}`}>
                <PersonCard {...person} />
              </Link>
            </Grid>
          )
        })}
      </Grid>
    </>
  )
}

export default Persons

export async function getStaticProps() {
  const data = await fetcher("person/popular?language=en-US&page=1")
  return {
    props: {
      people: data,
    },
  }
}

// import Navbar from "@/components/Navbar/Navbar"

// export default function Home({ people }) {
//   return (
//     <main>
//       <h1 className="text-3xl">All people</h1>
//       {JSON.stringify(people)}
//       {data.map(person => <div><img src/></div>)}
//     </main>
//   )
// }
// export async function getStaticProps() {
//   const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US"
//   const options = {
//     headers: {
//       accept: "application/json",
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOTNjOWRlOGU3ZDMwODE1ZTlmMWFiOGFkOGE5YThhYyIsInN1YiI6IjY1MDE4MDRmZWZlYTdhMDEzN2QyZDlkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fMpdyrHYfxKUcdPhwPSp6WqoGXK8nK96MJlFAQ8rHwE",
//     },
//   }

//   const response = await fetch(url, options)
//   const data = await response.json()
//   return {
//     props: {
//       people,
//     },
//   }
// }

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

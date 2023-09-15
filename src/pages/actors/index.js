import Navbar from "../../components/Navbar/Navbar"
import React from "react"
import ActorCard from "../../components/ActorCard"

const Actors = ({ actors }) => {
  const imageURL =
    "https://www.themoviedb.org/t/p/w300_and_h450_bestv2_filter(blur)/iFerDZUmC5Fu26i4qI8xnUVEHc7.jpg"
  return (
    <>
      <div className="flex flex-row">
        {actors.results.map((actor, index) => (
          <ActorCard key={index} {...actor} />
        ))}
      </div>
    </>
  )
}

export default Actors

export async function getStaticProps() {
  const url =
    "https://api.themoviedb.org/3/person/popular?language=en-US&page=1"
  const options = {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOTNjOWRlOGU3ZDMwODE1ZTlmMWFiOGFkOGE5YThhYyIsInN1YiI6IjY1MDE4MDRmZWZlYTdhMDEzN2QyZDlkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fMpdyrHYfxKUcdPhwPSp6WqoGXK8nK96MJlFAQ8rHwE",
    },
  }

  const response = await fetch(url, options)
  const actors = await response.json()
  return {
    props: {
      actors,
    },
  }
}

// import Navbar from "@/components/Navbar/Navbar"

// export default function Home({ actors }) {
//   return (
//     <main>
//       <h1 className="text-3xl">All Actors</h1>
//       {JSON.stringify(actors)}
//       {data.map(actor => <div><img src/></div>)}
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
//       actors,
//     },
//   }
// }

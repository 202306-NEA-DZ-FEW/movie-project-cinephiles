import fetcher from "@/utils/API"

export default function PersonId({ personData }) {
  return (
    <div className=" grid grid-cols-2 gap-1 mt-10 ">
      <div className="col-start-1 col-end-1 w-2/3 px-2 ">
        <img
          className=" m-10 ml-20 rounded-3xl "
          src={"https://image.tmdb.org/t/p/w500/" + personData.profile_path}
          alt={personData.name}
        />
      </div>
      <div className="mr-10">
        <h1 className="text-5xl underline underline-offset-8 font-bold my-6">
          {personData.name}
        </h1>

        <h2 className="leading-relaxed mb-4">
          <span className="text-[#3FAF95] font-medium text-xl">
            Personal Info :
          </span>
        </h2>

        <h4 className="leading-relaxed">
          <span className="text-[#3FAF95] font-medium text-xl">
            Also known as :{" "}
          </span>
          {personData.biography}
        </h4>
        <br></br>
        <h4 className="leading-relaxed">
          <span className="text-[#3FAF95] font-medium text-xl">
            Known For :{" "}
          </span>{" "}
          {personData.known_for_department}
        </h4>
        <br></br>
        <h4 className="leading-relaxed">
          <span className="text-[#3FAF95] font-medium text-xl">
            Birthday :{" "}
          </span>{" "}
          {personData.birthday}
        </h4>
        <br></br>
        <h4 className="leading-relaxed">
          <span className="text-[#3FAF95] font-medium text-xl">Gender : </span>{" "}
          {personData.gender}
        </h4>
        <br></br>
        <h4 className="leading-relaxed">
          <span className="text-[#3FAF95] font-medium text-xl">
            Place of Birth :{" "}
          </span>{" "}
          {personData.place_of_birth}
        </h4>
        <br></br>
        <h4 className="leading-relaxed">
          <span className="text-[#3FAF95] font-medium text-xl">
            Popularity :{" "}
          </span>{" "}
          {personData.popularity}
        </h4>
        <br></br>
        <h4 className="leading-relaxed">
          <span className="text-[#3FAF95] font-medium text-xl">
            Also known as :{" "}
          </span>{" "}
          {personData.also_known_as}
        </h4>
        <br></br>
      </div>
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

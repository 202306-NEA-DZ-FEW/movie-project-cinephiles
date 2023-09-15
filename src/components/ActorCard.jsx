const ActorCard = ({ name, id }) => {
  const imageURL =
    "https://www.themoviedb.org/t/p/w300_and_h450_bestv2_filter(blur)/iFerDZUmC5Fu26i4qI8xnUVEHc7.jpg"
  return (
    <>
      <div key={id} className="bg-white rounded-lg shadow-md p-4">
        <img
          src={imageURL} // Replace with the actor's image URL
          alt={name} // Replace with the actor's name
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h2 className="text-xl font-semibold text-center">{name}</h2>
      </div>
    </>
  )
}

export default ActorCard

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
//   const actors = await response.json()
//   return {
//     props: {
//       actors,
//     },
//   }
// }

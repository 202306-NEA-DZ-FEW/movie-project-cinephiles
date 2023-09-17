import Navbar from "@/components/Navbar/Navbar"

export default function Home({ genres }) {
  return (
    <main>
      <Navbar />
    </main>
  )
}

export async function getStaticProps() {
  const url = "https://api.themoviedb.org/3/genre/movie/list?language=en"
  const options = {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOTNjOWRlOGU3ZDMwODE1ZTlmMWFiOGFkOGE5YThhYyIsInN1YiI6IjY1MDE4MDRmZWZlYTdhMDEzN2QyZDlkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fMpdyrHYfxKUcdPhwPSp6WqoGXK8nK96MJlFAQ8rHwE",
    },
  }

  const response = await fetch(url, options)
  const data = await response.json()
  return {
    props: {
      genres: data,
    },
  }
}

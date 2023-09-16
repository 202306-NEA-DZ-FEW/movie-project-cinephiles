import Card from "@/components/MovieCard/MovieCard"
import Carousel from "../components/Carousel/Carousel"
import Link from "next/link"
import fetcher from "@/utils/API"

export default function Home({ latest }) {
  return (
    <main>
      <Carousel latest={latest} />
      <Link href="/movies/movie">Movies</Link>
    </main>
  )
}

export async function getServerSideProps() {
  const data = await fetcher("trending/movie/day?language=en-US")
  return {
    props: {
      latest: data,
    },
  }
}

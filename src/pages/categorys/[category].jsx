import fetcher from "@/utils/API"
import MovieCard from "@/components/MovieCard/MovieCard"
import Link from "next/link"

export default function Category({ movieCategory }) {
  return (
    <div className="gap-8 grid grid-cols-2 sm:grid-cols-6">
      {movieCategory.results.map((movie) => (
        <>
          <Link href={`../movies/${movie.id}`}>
            <MovieCard {...movie} />
          </Link>
        </>
      ))}
    </div>
  )
}

export async function getServerSideProps(context) {
  const { category } = context.query
  const data = await fetcher(`movie/${category}?language=en-US&page=1`)

  return {
    props: {
      movieCategory: data,
    },
  }
}

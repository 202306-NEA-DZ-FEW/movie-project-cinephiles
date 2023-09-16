import React from "react"
import fetcher from "@/utils/API"

export default function SingleMovie({ movieDetails }) {
  return <div>{JSON.stringify(movieDetails)}</div>
}

export async function getServerSideProps(context) {
  const { movieId } = context.query
  const data = await fetcher(`${movieId}?language=en-US`)

  return {
    props: {
      movieDetails: data,
    },
  }
}

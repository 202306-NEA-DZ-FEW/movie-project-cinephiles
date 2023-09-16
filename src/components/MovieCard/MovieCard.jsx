import React from "react"

import { Card, CardBody, CardFooter } from "@nextui-org/react"

export default function MovieCard({ title, poster_path, release_date }) {
  return (
    <Card
      className="bg-grey"
      shadow="sm"
      isPressable
      onPress={() => console.log("item pressed")}
    >
      <CardBody className="overflow-visible p-0">
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={`${title} Poster`}
        />
      </CardBody>
      <CardFooter className="text-small justify-between">
        <b>{title}</b>
        <p className="text-default-500">
          <span className="text-yellow-400 pr-1">&#9733;</span>
          {release_date}
        </p>
      </CardFooter>
    </Card>
  )
}

// {latest.results.map((movie) => (
// <Card className="bg-grey" shadow="sm" key={movie.id} isPressable onPress={() => console.log("item pressed")}>
//   <CardBody className="overflow-visible p-0">
//     <img
//         src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//         alt={`${movie.title} Poster`}
//       />
//   </CardBody>
//   <CardFooter className="text-small justify-between">
//     <b>{movie.title}</b>
//     <p className="text-default-500"><span className="text-yellow-400 pr-1">&#9733;</span>{movie.vote_average}</p>
//   </CardFooter>
// </Card>
// ))}

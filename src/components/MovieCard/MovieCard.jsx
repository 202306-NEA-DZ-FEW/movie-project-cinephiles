import React from "react"

import { Card, CardBody, CardFooter } from "@nextui-org/react"

export default function MovieCard({ title, poster_path, vote_average }) {
  return (
    <Card
      className="bg-white hover:bg-transparent hover:text-white "
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
      <CardFooter className="text-small justify-between ">
        <b>{title}</b>
        <p className="text-default-500">
          <span className="text-yellow-400 pr-1">&#9733;</span>
          {vote_average}
        </p>
      </CardFooter>
    </Card>
  )
}

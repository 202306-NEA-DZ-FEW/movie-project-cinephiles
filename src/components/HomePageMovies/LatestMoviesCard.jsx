import { Card, CardBody, CardFooter } from "@nextui-org/react"

export default function LatestMoviesCard({ data }) {
  return (
    // <div>
    //     {JSON.stringify(data)}
    // <h4>{data.title}</h4>
    // <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
    // </div>
    <Card
      className="bg-grey"
      shadow="sm"
      isPressable
      onPress={() => console.log("item pressed")}
    >
      <CardBody className="overflow-visible p-0">
        <img
          src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
          alt={data.title}
        />
      </CardBody>
      <CardFooter className="text-small justify-between">
        <b>{data.title}</b>
        <p className="text-default-500">
          <span className="text-yellow-400 pr-1">&#9733;</span>
          {data.vote_average}
        </p>
      </CardFooter>
    </Card>
  )
}

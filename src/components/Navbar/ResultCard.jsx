import * as React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { CardActionArea } from "@mui/material"

export default function ResultCard({ data }) {
  function mediaType(data) {
    return data.media_type === "person" ? data.profile_path : data.poster_path
  }

  const imageSrc = mediaType(data)

  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={`https://image.tmdb.org/t/p/original/${imageSrc}`}
            alt={data.name ? data.name : data.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.name} {data.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data.release_date}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  )
}

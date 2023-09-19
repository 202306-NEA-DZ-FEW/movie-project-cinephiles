import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { CardActionArea } from "@mui/material"

export default function PersonCard({ name, id, profile_path }) {
  return (
    <Card
      className="bg-white hover:bg-transparent hover:text-white rounded-3xl"
      key={id}
      sx={{ maxWidth: 345 }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={"https://image.tmdb.org/t/p/w500/" + profile_path}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

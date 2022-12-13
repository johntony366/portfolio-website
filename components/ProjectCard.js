import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ProjectCard({ src, title, description, link }) {
  return (
    <Card sx={{ width: 300 }}>
      <CardActionArea onClick={() => window.open(link)}>
        <CardMedia
          component="img"
          height="140"
          image={src}
          alt="project image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" height="50px">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

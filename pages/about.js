import {
  Box,
  Divider,
  Grid,
  ListItem,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Stack width="clamp(300px, 60%, 600px)" spacing={3}>
        <Typography
          variant="h3"
          sx={{
            textDecoration: "underline",
            textDecorationThickness: "2px",
            textAlign: "left",
          }}
        >
          About me
        </Typography>
        <Typography>
          Hey there! I&apos;m a college student studying Computer Science at VIT
          Vellore.
        </Typography>
        <Typography>
          In the future, I hope to continue to pursue my passion for computer
          science and to make a positive impact on the world through technology.
          I am excited to see where my studies and experiences will take me, and
          I am eager to continue learning and growing as a computer scientist.
        </Typography>
        <Typography variant="h5">
          Technologies I&apos;ve worked with:
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <ListItem sx={{ display: "list-item" }}>HTML/CSS</ListItem>
            <ListItem sx={{ display: "list-item" }}>React</ListItem>
            <ListItem sx={{ display: "list-item" }}>Node.js</ListItem>
            <ListItem sx={{ display: "list-item" }}>WPF</ListItem>
            <ListItem sx={{ display: "list-item" }}>.NET Framework</ListItem>
          </Grid>
          <Grid item xs={6}>
            <ListItem sx={{ display: "list-item" }}>Javascript</ListItem>
            <ListItem sx={{ display: "list-item" }}>Firebase</ListItem>
            <ListItem sx={{ display: "list-item" }}>C/C++</ListItem>
            <ListItem sx={{ display: "list-item" }}>WinForms</ListItem>
            <ListItem sx={{ display: "list-item" }}>.NET Core</ListItem>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};

export default About;

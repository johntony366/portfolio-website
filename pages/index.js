import { Box, Typography } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Box
      sx={{
        height: "90%",
        verticalAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "auto",
      }}
    >
      <Typography variant="h1" textAlign="center">
        Hi, I&apos;m John
      </Typography>
      <Typography variant="h2" textAlign="center">
        Welcome to my portfolio website
      </Typography>
    </Box>
  );
}

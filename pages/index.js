import { Box, Typography } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React from "react";

Home.title = "John Tony";
export default function Home() {
  const [width, setWidth] = React.useState(0);
  React.useEffect(() => {
    setWidth(window.innerWidth);
    function f() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", f);

    // return window.removeEventListener("resize", f);
  }, []);
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
      <Box
        sx={{
          display: width >= 500 && "flex",
        }}
      >
        <Typography variant={width < 500 ? "h2" : "h1"} textAlign={"center"}>
          Hi, I&apos;m&nbsp;
        </Typography>
        <Typography
          variant={width < 500 ? "h2" : "h1"}
          textAlign={"center"}
          sx={{
            background:
              "-webkit-linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          John
        </Typography>
      </Box>
      <Typography variant={width < 500 ? "h3" : "h2"} textAlign="center">
        Welcome to my portfolio website
      </Typography>
    </Box>
  );
}

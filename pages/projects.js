import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";

import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        pt: 6,
      }}
    >
      <Grid
        container
        direction={"row"}
        justifyContent="center"
        alignItems="center"
        overflow="auto"
        columnSpacing={0}
        rowSpacing={4}
        maxWidth="800px"
      >
        <Grid item xs={12} sm={6}>
          <Box display="flex" justifyContent={"center"}>
            <ProjectCard
              src={"/images/ProjectImages/group-expense-tracker.png"}
              title={"Group Expense Tracker"}
              description={
                "A fully functional CRUD app built with React and Firebase that helps you manage your expenses"
              }
              link={"https://github.com/johntony366/group-expense-tracker"}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box display="flex" justifyContent={"center"}>
            <ProjectCard
              src="/images/ProjectImages/to-do-list.png"
              title="To do list"
              description="Simple to do list app that uses local storage to save data. Built using webpack with vanilla html, css and javascript"
              link="https://github.com/johntony366/to-do-list"
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box display="flex" justifyContent={"center"}>
            <ProjectCard
              src={"/images/ProjectImages/quizzical.png"}
              title={"Quizzical app"}
              description={"Take a fun quiz to test your knowledge"}
              link={"https://github.com/johntony366/quizzical-app"}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box display="flex" justifyContent={"center"}>
            <ProjectCard
              src={"/images/ProjectImages/tenzies.png"}
              title={"Tenzies app"}
              description={"Play a game of tenzies"}
              link={"https://github.com/johntony366/Tenzies-app"}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
Projects.title = "Projects";
export default Projects;

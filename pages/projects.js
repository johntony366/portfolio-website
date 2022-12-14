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
        pb: 6,
        overflow: "auto",
      }}
    >
      <Grid
        container
        direction={"row"}
        justifyContent="center"
        alignItems="center"
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
        <Grid item xs={12} sm={6}>
          <Box display="flex" justifyContent={"center"}>
            <ProjectCard
              src={"/images/ProjectImages/restaurant-page.png"}
              title={"Restaurant page"}
              description={"SPA built with html, css and vanilla javascript. "}
              link={"https://github.com/johntony366/restaurant-page"}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box display="flex" justifyContent={"center"}>
            <ProjectCard
              src={"/images/ProjectImages/library.png"}
              title={"Library app"}
              description={
                "Keep track of the books you've read and the ones you're yet to start "
              }
              link={"https://github.com/johntony366/library-app"}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box display="flex" justifyContent={"center"}>
            <ProjectCard
              src={"/images/ProjectImages/calculator.png"}
              title={"Calculator app"}
              description={
                "A calculator app built with html, css and vanilla javascript"
              }
              link={"https://github.com/johntony366/calculator-app"}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box display="flex" justifyContent={"center"}>
            <ProjectCard
              src={"/images/ProjectImages/tic-tac-toe.png"}
              title={"Tic-tac-toe"}
              description={
                "See if you can beat the computer! Don't worry, he's not very smart"
              }
              link={"https://github.com/johntony366/tic-tac-toe"}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box display="flex" justifyContent={"center"}>
            <ProjectCard
              src={"/images/ProjectImages/sign-up-form.png"}
              title={"Sign up form"}
              description={"Simple form "}
              link={"https://github.com/johntony366/calculator-app"}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box display="flex" justifyContent={"center"}>
            <ProjectCard
              src={"/images/ProjectImages/etch-a-sketch.png"}
              title={"Etch-a-sketch"}
              description={"Sketch and let your creativity flow!"}
              link={"https://github.com/johntony366/calculator-app"}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box display="flex" justifyContent={"center"}>
            <ProjectCard
              src={"/images/ProjectImages/admin-dashboard.png"}
              title={"Admin Dashboard"}
              description={"Flexing my flexbox skills."}
              link={"https://github.com/johntony366/admin-dashboard"}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box display="flex" justifyContent={"center"}>
            <ProjectCard
              src={"/images/ProjectImages/landing-page.png"}
              title={"Landing Page"}
              description={
                "Another flex-box app, this time a landing page. Because why not"
              }
              link={"https://github.com/johntony366/landing-page"}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box display="flex" justifyContent={"center"}>
            <ProjectCard
              src={"/images/ProjectImages/blackjack.png"}
              title={"Blackjack"}
              description={"Test your luck with a game of blackjack."}
              link={"https://github.com/johntony366/Blackjack"}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box display="flex" justifyContent={"center"}>
            <ProjectCard
              src={"/images/ProjectImages/monster-battle.png"}
              title={"Monster battle"}
              description={"Bring out the hero in you. "}
              link={"https://github.com/johntony366/Blackjack"}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
Projects.title = "Projects";
export default Projects;

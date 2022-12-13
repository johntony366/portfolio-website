import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { SocialIcon } from "react-social-icons";

const Contact = () => {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        gap: "24px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h5">Hit me up on any of my socials</Typography>
      <Stack direction={"row"} spacing={2}>
        <SocialIcon fgColor="white" url="mailto:johntony366@gmail.com" />
        <SocialIcon fgColor="white" url="https://github.com/johntony366" />
        <SocialIcon
          fgColor="white"
          url="https://www.linkedin.com/in/john-tony-92aa87220/"
        />
        <SocialIcon
          fgColor="white"
          url="https://www.instagram.com/john.tony366/"
        />
      </Stack>
    </Box>
  );
};

export default Contact;

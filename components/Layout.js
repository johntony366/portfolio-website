import { Box } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <Box sx={{ height: "100vh", width: "100vw" }}>
      <Navbar />
      <Box
        sx={{
          height: "90vh",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;

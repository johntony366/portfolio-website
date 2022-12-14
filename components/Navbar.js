import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import { useRouter } from "next/router";

const pages = ["About", "Projects", "Contact"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [selectedTab, setSelectedTab] = React.useState("");
  const [width, setWidth] = React.useState(0);
  const router = useRouter();

  React.useEffect(() => {
    setWidth(window.innerWidth);
    setSelectedTab(document.title);
    function f() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", f);

    // return window.removeEventListener("resize", f);
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar position="static" sx={{ background: "#262626", maxHeight: "10vh" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <button
            onClick={() => {
              router.push("/");
              setSelectedTab("");
            }}
            style={{ display: width < 900 ? "none" : "inline-block" }}
          >
            <Typography
              variant="h6"
              noWrap
              component="p"
              sx={{
                mr: 2,
                ml: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              John Tony
            </Typography>
          </button>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                // <Link key={page} href={`/${page.toLowerCase()}`}>
                <MenuItem
                  key={page}
                  onClick={() => {
                    handleCloseNavMenu();
                    setSelectedTab(page);
                    router.push(`/${page.toLowerCase()}`);
                  }}
                  sx={{
                    backgroundColor: selectedTab == page && "rgba(0,0,0,0.2)",
                    "&:hover": {
                      backgroundColor:
                        selectedTab == page ? "rgba(0,0,0,0.2)" : "white",
                    },
                  }}
                >
                  <Typography textAlign="left">{page}</Typography>
                </MenuItem>
                // </Link>
              ))}
            </Menu>
          </Box>
          <button
            onClick={() => {
              router.push("/");
              setSelectedTab("");
            }}
            style={{
              display: width > 900 ? "none" : "inline-block",
            }}
          >
            <Typography
              variant="h5"
              noWrap
              component="p"
              textAlign={"center"}
              width="100%"
              sx={{
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              John Tony
            </Typography>
          </button>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                justifyContent: "flex-end",
              },
            }}
          >
            {pages.map((page) => (
              // <Link key={page} href={`/${page.toLowerCase()}`}>
              <Button
                key={page}
                onClick={() => {
                  handleCloseNavMenu();
                  setSelectedTab(page);
                  router.push(`/${page.toLowerCase()}`);
                }}
                sx={{
                  my: 2,
                  mx: 4,
                  color: "white",
                  backgroundColor:
                    selectedTab == page && "rgba(255,255,255,0.2)",
                  display: "block",
                  textTransform: "unset",
                  fontSize: "16px",
                  "&:hover": {
                    backgroundColor:
                      selectedTab == page
                        ? "rgba(255,255,255,0.2)"
                        : "rgba(0,0,0,0)",
                  },
                }}
              >
                {page}
              </Button>
              // </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

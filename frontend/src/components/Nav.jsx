import {
  Box,
  IconButton,
  Paper,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import {
  ShoppingCart,
  Favorite,
  ContentCopy,
  Person,
  Search,
  Clear,
} from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavLink = styled(Link)({
  textDecoration: "none",
  color: "#ffff",
  fontSize: "1.08rem",
});
const Nav = () => {
  const [searchBar, setSearchBar] = useState(true);
  return (
    <Stack direction="column">
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        px="20px"
        py="30px"
      >
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <ShoppingCart className="icon" />
          <Favorite className="icon" />
          <ContentCopy className="icon" />
        </Box>
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Typography variant="h4">BOOK</Typography>
          <Typography variant="h4" color="#D2402F">
            SHOP
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Person className="icon" />
          <IconButton onClick={() => setSearchBar((prev) => !prev)}>
            <Search className="icon" />
          </IconButton>
        </Box>
        {searchBar === false && (
          <Box
            sx={{
              position: "fixed",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              top: 0,
              left: 0,
              background: "#ffff",
              width: "100%",
              height: "200px",
              color: "black",
            }}
          >
            <Paper
              className="paper_input"
              component="form"
              sx={{
                display: "flex",
                alignItems: "center",
                minWidth: "450px",
                border: "1px solid #e3e3e3",
                p: "10px",
                boxShadow: "none",
              }}
            >
              <IconButton type="submit" className="icon">
                <Search />
              </IconButton>
              <input
                className="input-style"
                placeholder="Search..."
                style={{ width: "100%" }}
              />
              <IconButton onClick={() => setSearchBar(true)}>
                <Clear className="icon" />
              </IconButton>
            </Paper>
          </Box>
        )}
      </Stack>
      <Stack
        sx={{ background: "#E12503" }}
        height="70px"
        width="100%"
        direction="row"
        justifyContent="center"
        gap={4}
        alignItems="center"
      >
        <NavLink to="/">Home</NavLink>
        <NavLink to="/categories">Categories</NavLink>
        <NavLink to="/brands">Brands</NavLink>
        <NavLink to="/bestSeller">Best Sellers</NavLink>
        <NavLink to="/aboutUs">About us</NavLink>
      </Stack>
    </Stack>
  );
};

export default Nav;

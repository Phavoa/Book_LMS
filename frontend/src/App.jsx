import "./App.css";
import Home from "./pages/Home";

import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
// import

const App = () => {
  return (
    <Box sx={{ background: "#FFFFFF", m: 0, p: 0 }}>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;

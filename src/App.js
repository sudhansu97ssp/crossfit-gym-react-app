import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Error from "./pages/Error";

import "./App.css";
import ExerciseDetails from "./pages/ExerciseDetails";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Contact from "./pages/Contact";

const App = () => (
  <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercise/:id" element={<ExerciseDetails />} />
      <Route path="/login" element={<Signin />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<Error />} />
    </Routes>
    <Footer />
  </Box>
);

export default App;

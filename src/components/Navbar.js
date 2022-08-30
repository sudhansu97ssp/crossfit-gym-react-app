import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from "../assets/images/Logo.png";

const Navbar = () => (
  <Stack
    direction="row"
    justifyContent="space-around"
    sx={{
      gap: { sm: "60px", xs: "40px" },
      mt: { sm: "32px", xs: "20px" },
      justifyContent: "none",
    }}
    px="20px"
  >
    <Link to="/">
      <img
        src={Logo}
        alt="logo"
        style={{ width: "90px", height: "50px", margin: "0px 20px" }}
      />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "#3a1212",
          borderBottom: "3px solid #ff2625",
        }}
      >
        Home
      </Link>
      <a
        href="#exercises"
        style={{
          textDecoration: "none",
          color: "#3a1212",
          borderBottom: "3px solid #ff2625",
        }}
      >
        Exercises
      </a>
      <Link
        to="/contact"
        style={{
          textDecoration: "none",
          color: "#3a1212",
          borderBottom: "3px solid #ff2625",
        }}
      >
        Contact
      </Link>
      <Link
        to="/login"
        style={{
          textDecoration: "none",
          color: "#3a1212",
          borderBottom: "3px solid #ff2625",
        }}
      >
        Login
      </Link>
    </Stack>
  </Stack>
);

export default Navbar;

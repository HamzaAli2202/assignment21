import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const NavItem = ({ path, title }) => {
  return (
    <Link to={path}>
      <Button variant="contained" fullWidth color="info">
        {title}
      </Button>
    </Link>
  );
};

import React from "react";
import { Grid } from "@mui/material";
import { NavItem } from "./NavItem";

export const NavList = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <NavItem path="/" title="India" />
      </Grid>
      <Grid item xs={4}>
        <NavItem path="/unitedkingdom" title="UnitedKingdom" />
      </Grid>
      <Grid item xs={4}>
        <NavItem path="/unitedstate" title="UnitedState" />
      </Grid>
    </Grid>
  );
};

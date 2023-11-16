import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Card, CardContent } from "@mui/material";
import { India } from "./components/India";
import { UnitedKingdom } from "./components/UnitedKingdom";
import { UnitedState } from "./components/UnitedState";
import { NavList } from "./components/NavList";

function App() {
  return (
    <Card>
      <CardContent>
        <BrowserRouter>
          <NavList />
          <Routes>
            <Route path="/" element={<India />} />
            <Route path="/unitedkingdom" element={<UnitedKingdom />} />
            <Route path="/unitedstate" element={<UnitedState />} />
          </Routes>
        </BrowserRouter>
      </CardContent>
    </Card>
  );
}

export default App;

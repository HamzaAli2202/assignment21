import React from "react";
import { Grid, Card, CardContent, Button } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";

export const UnitedState = () => {
  const [name, setName] = useState("");
  const [path, setPath] = useState("");

  useEffect(() => {
    setPath(`US/${name}.jpg`);
  }, [name]);
  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Button
              onClick={() => setName("NewYork")}
              variant="contained"
              fullWidth
              color="warning"
            >
              New york
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              onClick={() => setName("Washington")}
              variant="contained"
              fullWidth
              color="warning"
            >
              Washington
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              onClick={() => setName("Wikiki")}
              variant="contained"
              fullWidth
              color="warning"
            >
              wikiki
            </Button>
          </Grid>
          <Grid item xs={3}></Grid>

          <Grid item xs={6}>
            <Card align="center" sx={{ bgcolor: "lavender", height: 450 }}>
              <CardContent>
                <h1>{name}</h1>
                <img style={{ height: 300 }} src={path} alt={name} />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

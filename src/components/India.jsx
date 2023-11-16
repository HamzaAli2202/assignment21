import React from "react";
import { Grid, Card, CardContent, Button } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";

export const India = () => {
  const [name, setName] = useState("");
  const [path, setPath] = useState("");

  useEffect(() => {
    setPath(`India/${name}.jpg`);
  }, [name]);
  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={2.5}>
            <Button
              onClick={() => setName("Agra")}
              fullWidth
              variant="contained"
              color="secondary"
            >
              Agra
            </Button>
          </Grid>
          <Grid item xs={2.5}>
            <Button
              onClick={() => setName("Rajasthan")}
              fullWidth
              variant="contained"
              color="secondary"
            >
              rajasthan
            </Button>
          </Grid>
          <Grid item xs={2.5}>
            <Button
              onClick={() => setName("Delhi")}
              fullWidth
              variant="contained"
              color="secondary"
            >
              Delhi
            </Button>
          </Grid>
          <Grid item fullWidth xs={2.5}>
            <Button
              onClick={() => setName("Mumbai")}
              fullWidth
              variant="contained"
              color="secondary"
            >
              Mumbai
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button
              onClick={() => setName("Goa")}
              fullWidth
              variant="contained"
              color="secondary"
            >
              goa
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

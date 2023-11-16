import React from "react";
import { Grid, Card, CardContent, Button } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";

export const UnitedKingdom = () => {
  const [name, setName] = useState("");
  const [path, setPath] = useState("");

  useEffect(() => {
    setPath(`UK/${name}.jpg`);
  }, [name]);

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Button
              onClick={() => setName("Scotland")}
              variant="contained"
              fullWidth
              color="warning"
            >
              Scotland
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              onClick={() => setName("Wales")}
              variant="contained"
              fullWidth
              color="warning"
            >
              Wales
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              onClick={() => setName("England")}
              variant="contained"
              fullWidth
              color="warning"
            >
              england
            </Button>
          </Grid>
          <Grid item xs={3}></Grid>
          <Grid textAlign="center" item xs={6}>
            <Card sx={{ bgcolor: "lavender", height: 450 }}>
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

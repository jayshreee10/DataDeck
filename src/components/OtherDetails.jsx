import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

function OtherDetails() {
  return (
    <div>
      {/* Heading aligned to the left with a left margin of 10px */}
      <Typography variant="h6" sx={{ marginLeft: "10px", textAlign: "left" }}>
        Other Details:
      </Typography>

      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{ padding: "10px" }}
      >
        <Grid container spacing={2}>
          {/* Two input fields with 45vw each */}
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              id="name"
              label="Name"
              variant="outlined"
              sx={{ width: "45vw" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              id="address"
              label="Address"
              variant="outlined"
              sx={{ width: "45vw" }}
            />
          </Grid>

          {/* Buttons: Delete and Add */}
          <Grid
            item
            xs={12}
            sx={{ display: "flex", gap: "10px", marginBottom: "10px" }}
          >
            <Button variant="outlined" color="error">
              Delete
            </Button>
            <Button variant="contained" color="primary">
              Add
            </Button>
          </Grid>

          {/* Navigation Buttons: Previous and Next */}
          <Grid
            item
            xs={12}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Button variant="outlined" color="primary">
              Previous
            </Button>
            <Button variant="outlined" color="primary">
              Next
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default OtherDetails;

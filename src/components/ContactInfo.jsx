import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

function ContactInfo() {
  return (
    <div>
      {/* Heading aligned to the left with a left margin of 10px */}
      <Typography variant="h6" sx={{ marginLeft: "10px", textAlign: "left" }}>
        Contact Info:
      </Typography>

      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{ padding: "10px" }}
      >
        <Grid container spacing={2}>
          {/* First row with 3 input fields, each 30vw */}
          <Grid item xs={4}>
            <TextField
              fullWidth
              id="name"
              label="Name"
              variant="outlined"
              sx={{ width: "30vw" }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              id="designation"
              label="Designation"
              variant="outlined"
              sx={{ width: "30vw" }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              id="role"
              label="Role"
              variant="outlined"
              sx={{ width: "30vw" }}
            />
          </Grid>

          {/* Second row with 2 input fields, each 45vw */}
          <Grid item xs={6}>
            <TextField
              fullWidth
              id="email-id"
              label="Email ID"
              variant="outlined"
              sx={{ width: "45vw" }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              id="contact-no"
              label="Contact No."
              variant="outlined"
              sx={{ width: "45vw" }}
            />
          </Grid>

          {/* Buttons aligned to the left and right */}
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

export default ContactInfo;

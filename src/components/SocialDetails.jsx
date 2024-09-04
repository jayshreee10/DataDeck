import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import FormHelperText from "@mui/material/FormHelperText";

function SocialDetails() {
  return (
    <div>
      {/* Heading aligned to the left with a left margin of 10px */}
      <Typography variant="h6" sx={{ marginLeft: "10px", textAlign: "left" }}>
        Social Details:
      </Typography>

      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{ padding: "10px" }}
      >
        <Grid container spacing={2}>
          {/* First row with 2 input fields, each 45vw */}
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
              id="contact-number"
              label="Contact Number"
              variant="outlined"
              sx={{ width: "45vw" }}
            />
          </Grid>

          {/* Second row with file upload input and subtext */}
          <Grid item xs={12}>
            <Input
              type="file"
              id="file-upload"
              inputProps={{ accept: ".jpg,.gif,.png" }}
              sx={{ display: "block", marginBottom: "8px" }}
            />
            <FormHelperText>
              Allowed JPG, GIF, PNG, Max size of 800k
            </FormHelperText>
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

export default SocialDetails;

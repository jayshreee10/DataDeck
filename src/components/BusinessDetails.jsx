import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

function BusinessDetails() {
  return (
    <div>
      {/* Heading aligned to the left with a left margin of 10px */}
      <Typography variant="h6" sx={{ marginLeft: "10px", textAlign: "left" }}>
        Business Details :
      </Typography>

      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{ padding: "10px" }}
      >
        <Grid container spacing={2}>
          {/* TextField for business details input */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="business-details"
              label="Business Details"
              variant="outlined"
              sx={{ width: "90vw" }}
            />
          </Grid>

          {/* TextArea for additional information */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="additional-info"
              label="Additional Information"
              multiline
              rows={4}
              variant="outlined"
              sx={{ width: "90vw" }}
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

export default BusinessDetails;

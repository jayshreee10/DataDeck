import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDataContext } from "../context/DataContext"; // Adjust path as needed
import { validateOtherDetails } from "../utility/Validation"; // Adjust path as needed

function OtherDetails() {
  const { formData, setFormData } = useDataContext();
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      other_details: {
        ...prevData.other_details,
        [name]: value,
      },
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handlePreviousClick = () => {
    navigate("/socialdetails"); // Adjust path as needed
  };

  const handleSubmitClick = () => {
    const newErrors = validateOtherDetails(formData.other_details);
    setErrors(newErrors);

    const noErrors = Object.values(newErrors).every((error) => error === "");

    if (noErrors) {
      // Handle form submission
      console.log("Form is valid. Submitting...");
      console.log("final data----------------");
      console.log(formData);
      // Perform form submission logic here
    } else {
      console.log("Form has errors.");
    }
  };

  return (
    <div>
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
              name="name"
              label="Name"
              variant="outlined"
              value={formData.other_details.name || ""}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
              sx={{ width: "45vw" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              id="address"
              name="address"
              label="Address"
              variant="outlined"
              value={formData.other_details.address || ""}
              onChange={handleChange}
              error={!!errors.address}
              helperText={errors.address}
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

          {/* Navigation Buttons: Previous and Submit */}
          <Grid
            item
            xs={12}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Button
              variant="outlined"
              color="primary"
              onClick={handlePreviousClick}
            >
              Previous
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmitClick}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default OtherDetails;

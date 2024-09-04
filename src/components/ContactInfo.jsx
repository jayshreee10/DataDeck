import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDataContext } from "../context/DataContext";
import { validateContactInfo } from "../utility/Validation"; // Adjust the path as necessary

function ContactInfo() {
  const { formData, setFormData } = useDataContext();
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      contact_info: {
        ...prevData.contact_info,
        [name]: value,
      },
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleNextClick = () => {
    const newErrors = validateContactInfo(formData.contact_info);
    setErrors(newErrors);

    const noErrors = Object.values(newErrors).every((error) => error === "");

    if (noErrors) {
      // Proceed to next step
      console.log("Form is valid. Proceeding to next step.");
      navigate("/socialdetails");
    } else {
      console.log(newErrors);
      console.log("Form has errors.");
    }
  };

  const handlePreviousClick = () => {
    navigate("/businessdetails");
  };

  return (
    <div>
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
              name="name"
              variant="outlined"
              value={formData.contact_info.name || ""}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
              sx={{ width: "30vw" }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              id="designation"
              label="Designation"
              name="designation"
              variant="outlined"
              value={formData.contact_info.designation || ""}
              onChange={handleChange}
              error={!!errors.designation}
              helperText={errors.designation}
              sx={{ width: "30vw" }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              id="role"
              label="Role"
              name="role"
              variant="outlined"
              value={formData.contact_info.role || ""}
              onChange={handleChange}
              error={!!errors.role}
              helperText={errors.role}
              sx={{ width: "30vw" }}
            />
          </Grid>

          {/* Second row with 2 input fields, each 45vw */}
          <Grid item xs={6}>
            <TextField
              fullWidth
              id="email-id"
              label="Email ID"
              name="emailId"
              variant="outlined"
              value={formData.contact_info.emailId || ""}
              onChange={handleChange}
              error={!!errors.emailId}
              helperText={errors.emailId}
              sx={{ width: "45vw" }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              id="contact-no"
              label="Contact No."
              name="contactNumber"
              variant="outlined"
              value={formData.contact_info.contactNumber || ""}
              onChange={handleChange}
              error={!!errors.contactNumber}
              helperText={errors.contactNumber}
              sx={{ width: "45vw" }}
            />
          </Grid>

          {/* Buttons aligned to the left and right */}
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
              variant="outlined"
              color="primary"
              onClick={handleNextClick}
            >
              Next
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default ContactInfo;

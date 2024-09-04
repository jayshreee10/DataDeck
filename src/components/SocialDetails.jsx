import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormHelperText from "@mui/material/FormHelperText";
import Grid from "@mui/material/Grid";
import Input from "@mui/material/Input";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDataContext } from "../context/DataContext";
import { validateSocialDetails } from "../utility/Validation"; // Adjust the path as necessary

function SocialDetails() {
  const { formData, setFormData } = useDataContext();
  const [errors, setErrors] = useState({});
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      social_details: {
        ...prevData.social_details,
        [name]: value,
      },
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleNextClick = () => {
    const newErrors = validateSocialDetails(formData.social_details);
    setErrors(newErrors);

    const noErrors = Object.values(newErrors).every((error) => error === "");

    if (noErrors) {
      // Proceed to next step
      console.log("Form is valid. Proceeding to next step.");
      navigate("/otherdetails"); // Update with the actual next route
    } else {
      console.log("Form has errors.");
    }
  };

  const handlePreviousClick = () => {
    navigate("/contactinfo");
  };

  const handleDeleteClick = () => {
    setFile(null);
  };

  return (
    <div>
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
              name="emailId"
              variant="outlined"
              value={formData.social_details.emailId || ""}
              onChange={handleChange}
              error={!!errors.emailId}
              helperText={errors.emailId}
              sx={{ width: "45vw" }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              id="contact-number"
              label="Contact Number"
              name="contactNumber"
              variant="outlined"
              value={formData.social_details.contactNumber || ""}
              onChange={handleChange}
              error={!!errors.contactNumber}
              helperText={errors.contactNumber}
              sx={{ width: "45vw" }}
            />
          </Grid>

          {/* Second row with file upload input and subtext */}
          <Grid item xs={12}>
            <Input
              type="file"
              id="file-upload"
              inputProps={{ accept: ".jpg,.gif,.png" }}
              onChange={handleFileChange}
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
            <Button
              variant="outlined"
              color="error"
              onClick={handleDeleteClick}
            >
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

export default SocialDetails;

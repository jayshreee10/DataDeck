import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDataContext } from "../context/DataContext";
import { validateBusinessDetails } from "../utility/Validation"; // Adjust the path as necessary

function BusinessDetails() {
  const { formData, setFormData } = useDataContext();
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      business_details: {
        ...prevData.business_details,
        [name]: value,
      },
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleNextClick = () => {
    const newErrors = validateBusinessDetails(formData.business_details);
    setErrors(newErrors);

    const noErrors = Object.values(newErrors).every((error) => error === "");

    if (noErrors) {
      // Proceed to next step
      console.log("Form is valid. Proceeding to next step.");
      navigate("/contactinfo");
    } else {
      console.log("Form has errors.");
    }
  };

  const handlePreviousClick = () => {
    navigate("/brandinfo");
  };

  return (
    <div>
      <Typography variant="h6" sx={{ marginLeft: "10px", textAlign: "left" }}>
        Business Details:
      </Typography>

      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{ padding: "10px" }}
      >
        <Grid container spacing={2}>
          {/* Business Details */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="business-details"
              label="Business Details"
              name="businessDetails"
              variant="outlined"
              value={formData.business_details.businessDetails || ""}
              onChange={handleChange}
              error={!!errors.businessDetails}
              helperText={errors.businessDetails}
              sx={{ width: "90vw" }}
            />
          </Grid>

          {/* Additional Information */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="additional-info"
              label="Additional Information"
              name="additionalInformation"
              multiline
              rows={4}
              variant="outlined"
              value={formData.business_details.additionalInformation || ""}
              onChange={handleChange}
              error={!!errors.additionalInformation}
              helperText={errors.additionalInformation}
              sx={{ width: "90vw" }}
            />
          </Grid>

          {/* Buttons */}
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

export default BusinessDetails;

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDataContext } from "../context/DataContext";
import { validateDetails } from "../utility/Validation"; // Adjust the path as necessary

function Details() {
  const { formData, setFormData } = useDataContext();
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      details: {
        ...prevData.details,
        [name]: value,
      },
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const navigate = useNavigate();

  const handleNextClick = () => {
    const newErrors = validateDetails(formData.details);
    setErrors(newErrors);

    const noErrors = Object.values(newErrors).every((error) => error === "");

    if (noErrors) {
      // Proceed to next step
      console.log("Form is valid. Proceeding to next step.");
      navigate("/brandinfo");
    } else {
      console.log("Form has errors.");
    }
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <Typography variant="h6" sx={{ marginLeft: "10px", textAlign: "left" }}>
        Details:
      </Typography>

      <Box component="form" noValidate autoComplete="off">
        <Grid container spacing={2} sx={{ padding: "10px" }}>
          {/* Company Name */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="company-name"
              label="Company Name"
              name="companyName"
              variant="outlined"
              value={formData.details.companyName}
              onChange={handleChange}
              error={!!errors.companyName}
              helperText={errors.companyName}
            />
          </Grid>

          {/* Company Type */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="company-type"
              label="Company Type"
              name="companyType"
              variant="outlined"
              value={formData.details.companyType}
              onChange={handleChange}
              error={!!errors.companyType}
              helperText={errors.companyType}
            />
          </Grid>

          {/* Alias, Company ID, Company Size */}
          <Grid item xs={4}>
            <TextField
              fullWidth
              id="alias"
              label="Alias"
              name="alias"
              variant="outlined"
              value={formData.details.alias}
              onChange={handleChange}
              error={!!errors.alias}
              helperText={errors.alias}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              id="company-id"
              label="Company ID"
              name="companyId"
              variant="outlined"
              value={formData.details.companyId}
              onChange={handleChange}
              error={!!errors.companyId}
              helperText={errors.companyId}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              id="company-size"
              label="Company Size"
              name="companySize"
              variant="outlined"
              value={formData.details.companySize}
              onChange={handleChange}
              error={!!errors.companySize}
              helperText={errors.companySize}
            />
          </Grid>

          {/* Incorporation No, Certificate, Date */}
          <Grid item xs={4}>
            <TextField
              fullWidth
              id="incorporation-no"
              label="Incorporation No."
              name="incorporationNo"
              variant="outlined"
              value={formData.details.incorporationNo}
              onChange={handleChange}
              error={!!errors.incorporationNo}
              helperText={errors.incorporationNo}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              id="incorporation-certificate"
              label="Incorporation Certificate"
              name="incorporationCertificate"
              variant="outlined"
              value={formData.details.incorporationCertificate}
              onChange={handleChange}
              error={!!errors.incorporationCertificate}
              helperText={errors.incorporationCertificate}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              id="incorporation-date"
              label="Incorporation Date"
              name="incorporationDate"
              variant="outlined"
              value={formData.details.incorporationDate}
              onChange={handleChange}
              error={!!errors.incorporationDate}
              helperText={errors.incorporationDate}
              placeholder="ex:2024-03-05"
            />
          </Grid>

          {/* PAN Details, Tax Certification */}
          <Grid item xs={6}>
            <TextField
              fullWidth
              id="pan-details"
              label="PAN Details"
              name="panDetails"
              variant="outlined"
              value={formData.details.panDetails}
              onChange={handleChange}
              error={!!errors.panDetails}
              helperText={errors.panDetails}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              id="tax-certification"
              label="Tax Certification Details"
              name="taxCertification"
              variant="outlined"
              value={formData.details.taxCertification}
              onChange={handleChange}
              error={!!errors.taxCertification}
              helperText={errors.taxCertification}
            />
          </Grid>

          {/* Country */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="country"
              label="Country"
              name="country"
              variant="outlined"
              value={formData.details.country}
              onChange={handleChange}
              error={!!errors.country}
              helperText={errors.country}
            />
          </Grid>

          {/* State, City, Pincode */}
          <Grid item xs={4}>
            <TextField
              fullWidth
              id="state"
              label="State"
              name="state"
              variant="outlined"
              value={formData.details.state}
              onChange={handleChange}
              error={!!errors.state}
              helperText={errors.state}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              id="city"
              label="City"
              name="city"
              variant="outlined"
              value={formData.details.city}
              onChange={handleChange}
              error={!!errors.city}
              helperText={errors.city}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              id="pincode"
              label="Pincode"
              name="pincode"
              variant="outlined"
              value={formData.details.pincode}
              onChange={handleChange}
              error={!!errors.pincode}
              helperText={errors.pincode}
            />
          </Grid>

          {/* Registered Office Address, Address, WhatsApp Number */}
          <Grid item xs={4}>
            <TextField
              fullWidth
              id="registered-office-address"
              label="Registered Office Address"
              name="registeredOfficeAddress"
              variant="outlined"
              value={formData.details.registeredOfficeAddress}
              onChange={handleChange}
              error={!!errors.registeredOfficeAddress}
              helperText={errors.registeredOfficeAddress}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              id="address"
              label="Address"
              name="address"
              variant="outlined"
              value={formData.details.address}
              onChange={handleChange}
              error={!!errors.address}
              helperText={errors.address}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              id="whatsapp-number"
              label="WhatsApp Number"
              name="whatsappNumber"
              variant="outlined"
              value={formData.details.whatsappNumber}
              onChange={handleChange}
              error={!!errors.whatsappNumber}
              helperText={errors.whatsappNumber}
            />
          </Grid>

          {/* Mobile Number, Email ID */}
          <Grid item xs={6}>
            <TextField
              fullWidth
              id="mobile-number"
              label="Mobile Number"
              name="mobileNumber"
              variant="outlined"
              value={formData.details.mobileNumber}
              onChange={handleChange}
              error={!!errors.mobileNumber}
              helperText={errors.mobileNumber}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              id="email-id"
              label="Email ID"
              name="emailId"
              variant="outlined"
              value={formData.details.emailId}
              onChange={handleChange}
              error={!!errors.emailId}
              helperText={errors.emailId}
            />
          </Grid>

          {/* Next Button */}
          <Grid item xs={12} sx={{ textAlign: "right" }}>
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

export default Details;

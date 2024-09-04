import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { validateAllFields } from "../utility/Validation"; // Adjust the path as necessary
import { useDataContext } from "../context/DataContext";
import { useNavigate } from "react-router-dom";

function Details() {
  const { formData, setFormData } = useDataContext();
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };
  const navigate = useNavigate();
  const handleNextClick = () => {
    const newErrors = validateAllFields(formData);
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
              sx={{ width: "96vw" }}
              value={formData.companyName}
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
              sx={{ width: "96vw" }}
              value={formData.companyType}
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
              sx={{ width: "30vw" }}
              value={formData.alias}
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
              sx={{ width: "30vw" }}
              value={formData.companyId}
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
              sx={{ width: "30vw" }}
              value={formData.companySize}
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
              sx={{ width: "30vw" }}
              value={formData.incorporationNo}
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
              sx={{ width: "30vw" }}
              value={formData.incorporationCertificate}
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
              sx={{ width: "30vw" }}
              value={formData.incorporationDate}
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
              sx={{ width: "46vw" }}
              value={formData.panDetails}
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
              sx={{ width: "46vw" }}
              value={formData.taxCertification}
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
              sx={{ width: "96vw" }}
              value={formData.country}
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
              sx={{ width: "30vw" }}
              value={formData.state}
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
              sx={{ width: "30vw" }}
              value={formData.city}
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
              sx={{ width: "30vw" }}
              value={formData.pincode}
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
              sx={{ width: "30vw" }}
              value={formData.registeredOfficeAddress}
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
              sx={{ width: "30vw" }}
              value={formData.address}
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
              sx={{ width: "30vw" }}
              value={formData.whatsappNumber}
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
              sx={{ width: "46vw" }}
              value={formData.mobileNumber}
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
              sx={{ width: "46vw" }}
              value={formData.emailId}
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

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Input from "@mui/material/Input";
import Typography from "@mui/material/Typography";
import { useDataContext } from "../context/DataContext";
import { useNavigate } from "react-router-dom";

function BrandInfo() {
  const [errors, setErrors] = useState({});
  const { formMedia, setFormMedia } = useDataContext();
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormMedia({
      ...formMedia,
      brand_info: { ...formMedia.brand_info, [name]: files[0] },
    });
    setErrors({ ...errors, [name]: "" });
  };

  const handleNextClick = () => {
    const newErrors = {};

    if (!formMedia.brand_info.upload_logo) {
      newErrors.upload_logo = "Upload logo is required.";
    }
    if (!formMedia.brand_info.header) {
      newErrors.header = "Header is required.";
    }
    if (!formMedia.brand_info.favicon) {
      newErrors.favicon = "Favicon is required.";
    }
    if (!formMedia.brand_info.footer) {
      newErrors.footer = "Footer is required.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      navigate("/businessdetails");
    }
  };

  return (
    <div>
      <Typography variant="h6" sx={{ marginLeft: "10px", textAlign: "left" }}>
        Brand Info:
      </Typography>

      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{ padding: "10px" }}
      >
        <Grid container spacing={2}>
          {/* Upload Logo */}
          <Grid item xs={12} md={6}>
            <Typography>Upload Logo</Typography>
            <Input
              type="file"
              name="upload_logo"
              inputProps={{ accept: ".jpg,.gif,.png" }}
              sx={{ display: "block", marginBottom: "8px", width: "45vw" }}
              onChange={handleFileChange}
              error={!!errors.upload_logo}
            />
            <p error={!!errors.upload_logo}>
              {errors.upload_logo || "Allowed JPG, GIF, PNG, Max size of 800k"}
            </p>
          </Grid>

          {/* Header */}
          <Grid item xs={12} md={6}>
            <Typography>Header</Typography>
            <Input
              type="file"
              name="header"
              inputProps={{ accept: ".jpg,.gif,.png" }}
              sx={{ display: "block", marginBottom: "8px", width: "45vw" }}
              onChange={handleFileChange}
              error={!!errors.header}
            />
            <p error={!!errors.header}>
              {errors.header || "Allowed JPG, GIF, PNG, Max size of 800k"}
            </p>
          </Grid>

          {/* Favicon */}
          <Grid item xs={12} md={6}>
            <Typography>Favicon</Typography>
            <Input
              type="file"
              name="favicon"
              inputProps={{ accept: ".jpg,.gif,.png" }}
              sx={{ display: "block", marginBottom: "8px", width: "45vw" }}
              onChange={handleFileChange}
              error={!!errors.favicon}
            />
            <p error={!!errors.favicon}>
              {errors.favicon || "Allowed JPG, GIF, PNG, Max size of 800k"}
            </p>
          </Grid>

          {/* Footer */}
          <Grid item xs={12} md={6}>
            <Typography>Footer</Typography>
            <Input
              type="file"
              name="footer"
              inputProps={{ accept: ".jpg,.gif,.png" }}
              sx={{ display: "block", marginBottom: "8px", width: "45vw" }}
              onChange={handleFileChange}
              error={!!errors.footer}
            />
            <p error={!!errors.footer}>
              {errors.footer || "Allowed JPG, GIF, PNG, Max size of 800k"}
            </p>
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

export default BrandInfo;

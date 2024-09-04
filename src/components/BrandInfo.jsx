import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormHelperText from "@mui/material/FormHelperText";
import Grid from "@mui/material/Grid";
import Input from "@mui/material/Input";
import Typography from "@mui/material/Typography";

function BrandInfo() {
  return (
    <div>
      {/* Heading aligned to the left with a left margin of 10px */}
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
          {/* First row with 2 file upload fields, each 45vw */}
          <Grid item xs={12} md={6}>
            <Input
              type="file"
              id="file-upload-1"
              inputProps={{ accept: ".jpg,.gif,.png" }}
              sx={{ display: "block", marginBottom: "8px", width: "45vw" }}
            />
            <FormHelperText>
              Allowed JPG, GIF, PNG, Max size of 800k
            </FormHelperText>
          </Grid>
          <Grid item xs={12} md={6}>
            <Input
              type="file"
              id="file-upload-2"
              inputProps={{ accept: ".jpg,.gif,.png" }}
              sx={{ display: "block", marginBottom: "8px", width: "45vw" }}
            />
            <FormHelperText>
              Allowed JPG, GIF, PNG, Max size of 800k
            </FormHelperText>
          </Grid>

          {/* Second row with 2 file upload fields, each 45vw */}
          <Grid item xs={12} md={6}>
            <Input
              type="file"
              id="file-upload-3"
              inputProps={{ accept: ".jpg,.gif,.png" }}
              sx={{ display: "block", marginBottom: "8px", width: "45vw" }}
            />
            <FormHelperText>
              Allowed JPG, GIF, PNG, Max size of 800k
            </FormHelperText>
          </Grid>
          <Grid item xs={12} md={6}>
            <Input
              type="file"
              id="file-upload-4"
              inputProps={{ accept: ".jpg,.gif,.png" }}
              sx={{ display: "block", marginBottom: "8px", width: "45vw" }}
            />
            <FormHelperText>
              Allowed JPG, GIF, PNG, Max size of 800k
            </FormHelperText>
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
            <Button variant="outlined" color="primary">
              Next
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default BrandInfo;

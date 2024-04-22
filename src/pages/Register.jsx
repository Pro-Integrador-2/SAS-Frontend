import React, { useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import SASAppBar from "../components/SASAppBar";
import Camera from "../components/Camera";
import FormRegister from "../components/FormRegister";

const Register = () => {
  const [image, setImage] = useState(null);

  const submitRegister = (values) => {
    alert(JSON.stringify({ ...values, image }, null, 2));
    console.log({ ...values, image });
  };

  const handleImage = (cameraImage) => {
    setImage(cameraImage);
    console.log("Image: ", image);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ maxWidth: "100%" }}>
        <SASAppBar />
        <Container
          sx={{ display: "flex", justifyContent: "center", minWidth: "100%" }}
        >
          <Grid container justifyContent={"center"} alignContent={"center"}>
            <Grid item xs={12} md={12} mb={6}>
              <Box sx={{ display: "flex", justifyContent: "center", m: 1 }}>
                <Typography variant="h3" color="#31363F" textAlign={"center"}>
                  Secure Access System
                </Typography>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              justifyContent={"center"}
              alignContent={"center"}
              textAlign={"center"}
            >
              <Camera handleImage={handleImage} />
            </Grid>

            <Grid item xs={12} md={6} mb={4}>
              <FormRegister submitRegister={submitRegister} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </LocalizationProvider>
  );
};

export default Register;

import React, { useState } from "react";
import { Box, Container, Grid, Typography, Alert, Snackbar} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import SASAppBar from "../components/SASAppBar";
import Camera from "../components/Camera";
import FormRegister from "../components/FormRegister";
import axios from "axios";

const Register = () => {
  const [image, setImage] = useState(null);
  const [showSnackbar, setShowSnackbar] = useState(false);
  
  const handleSnackbarClose = () => {
    setShowSnackbar(false);
  };

  const submitRegister = async (values) => {
    if(!image){
     setShowSnackbar(true);
    }else{

      const formData = new FormData();
    formData.append('img', image);
    formData.append('values', JSON.stringify(values));
    console.log(values)

    try {
      
      const response = await axios.post("http://127.0.0.1:5000/signup", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });




    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
    }
    }
  };

  const handleImage = (cameraImage) => {
    setImage(cameraImage);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ maxWidth: "100%" }}>
      <Snackbar open={showSnackbar} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity="error" variant="filled">
          Photography is required
        </Alert>
      </Snackbar>
        <SASAppBar />
        <Container
          sx={{ display: "flex", justifyContent: "center", minWidth: "100%" }}
        >
          <Grid container justifyContent={"center"} alignContent={"center"} spacing={2}>
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

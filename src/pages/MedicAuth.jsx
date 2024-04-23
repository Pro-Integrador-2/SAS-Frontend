import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Alert,
  Snackbar,
} from "@mui/material";
import AuthCamera from "../components/Camera";
import SASAppBar from "../components/SASAppBar";
import AuthInfo from "../components/AuthInfo";

const MedicAuth = () => {
  const [image, setImage] = useState("");
  const [verificationStatus, setVerificationStatus] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleImage = () => {
    // Simulación de la verificación de la imagen con la base de datos
    const isVerified = true; // Simulación de verificación exitosa/noExitosa

    if (isVerified) {
      setVerificationStatus(true);
      setAlertSeverity("success");
      setAlertMessage("Profesional identificado con éxito");
    } else {
      setVerificationStatus(false);
      setAlertSeverity("error");
      setAlertMessage("No se pudo verificar su información. Acceso denegado");
    }

    setShowSnackbar(true);
  };

  const handleSnackbarClose = () => {
    setShowSnackbar(false);
  };

  return (
    <Box sx={{ maxWidth: "100%" }}>
      <Snackbar open={showSnackbar} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity={alertSeverity} variant="filled">
          {alertMessage}
        </Alert>
      </Snackbar>
      <SASAppBar />
      {!verificationStatus ? (
        <Container sx={{ display: "flex", justifyContent: "center", minWidth: "100%" }}>
          <Grid container justifyContent="center" alignContent="center">
            <Grid item xs={12} md={12} mb={6}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  m: 1,
                }}
              >
                <Typography variant="h3" color="#31363F" textAlign="center">
                  Secure Access System
                </Typography>
                <Typography variant="h6" color="#31363F" textAlign="center">
                  Por favor verifique su identidad
                </Typography>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              justifyContent="center"
              alignContent="center"
              textAlign="center"
            >
              <AuthCamera handleImage={handleImage} />
            </Grid>
          </Grid>
        </Container>
      ) : (
        <Container sx={{ display: "flex", justifyContent: "center", minWidth: "100%" }}>
          <AuthInfo />
        </Container>
      )}
    </Box>
  );
};

export default MedicAuth;
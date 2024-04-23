import React, { useState } from 'react';
import { Typography, Box, Avatar } from '@mui/material';

const AuthInfo = ({ doctorData, img }) => {

    return (
      <Box>
        <Box marginTop={3}>
          <Typography variant="h4" component="h1" gutterBottom>
              Autenticación exitosa
          </Typography>
        </Box>
          {doctorData ? (
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Avatar src={URL.createObjectURL(img)} alt="Foto del médico" sx={{ width: 200, height: 200 }} />
              <Box marginTop={4}>
                <Typography variant="body1">Nombre: {doctorData.name}</Typography>
                <Typography variant="body1">Cédula: {doctorData.idNumber}</Typography>
                <Typography variant="body1">Especialidad: {doctorData.speciality}</Typography>
              </Box>
            </Box>
          ) : (
            <Typography variant="body1">No hay información disponible</Typography>
          )}
      </Box>
    );
};

export default AuthInfo;

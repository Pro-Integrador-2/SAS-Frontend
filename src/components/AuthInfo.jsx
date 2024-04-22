import React, { useState } from 'react';
import { Typography, Box, Avatar } from '@mui/material';

const AuthInfo = ({ simulatedDoctorData }) => {

    const doctorData = {
        photo: 'https://via.placeholder.com/200',
        nombre: 'Juanito',
        cedula: '1234567890',
        numeroId: 'M123',
        cargo: 'Médico general',
    };

    return (
      <Box>
        <Box marginTop={3}>
          <Typography variant="h4" component="h1" gutterBottom>
              Autenticación exitosa
          </Typography>
        </Box>
          {doctorData ? (
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Avatar src={doctorData.photo} alt="Foto del médico" sx={{ width: 200, height: 200 }} />
              <Box marginTop={4}>
                <Typography variant="body1">Nombre: {doctorData.nombre}</Typography>
                <Typography variant="body1">Cédula: {doctorData.cedula}</Typography>
                <Typography variant="body1">ID Profesional: {doctorData.numeroId}</Typography>
                <Typography variant="body1">Especialidad: {doctorData.cargo}</Typography>
              </Box>
            </Box>
          ) : (
            <Typography variant="body1">No hay información disponible</Typography>
          )}
      </Box>
    );
};

export default AuthInfo;

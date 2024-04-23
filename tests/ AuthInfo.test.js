import React from 'react';
import { shallow } from 'enzyme';
import AuthInfo from './AuthInfo';
import { Typography, Box, Avatar } from '@mui/material';

describe('AuthInfo component', () => {
  it('should render doctor information when doctorData is provided', () => {
    const simulatedDoctorData = {
      photo: 'https://via.placeholder.com/200',
      nombre: 'Juanito',
      cedula: '1234567890',
      numeroId: 'M123',
      cargo: 'Médico general',
    };
    const wrapper = shallow(<AuthInfo simulatedDoctorData={simulatedDoctorData} />);
    expect(wrapper.find(Typography).at(0).text()).toEqual('Autenticación exitosa');
    expect(wrapper.find(Avatar).prop('src')).toEqual(simulatedDoctorData.photo);
    expect(wrapper.find(Typography).at(1).text()).toEqual(`Nombre: ${simulatedDoctorData.nombre}`);
    expect(wrapper.find(Typography).at(2).text()).toEqual(`Cédula: ${simulatedDoctorData.cedula}`);
    expect(wrapper.find(Typography).at(3).text()).toEqual(`ID Profesional: ${simulatedDoctorData.numeroId}`);
    expect(wrapper.find(Typography).at(4).text()).toEqual(`Especialidad: ${simulatedDoctorData.cargo}`);
  });

  it('should render "No hay información disponible" message when doctorData is not provided', () => {
    const wrapper = shallow(<AuthInfo />);
    expect(wrapper.find(Typography).at(0).text()).toEqual('Autenticación exitosa');
    expect(wrapper.find(Typography).at(1).text()).toEqual('No hay información disponible');
  });
});

import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/icons/muscle-2.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#f2d3d3">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="5px">
      <img src={Logo} alt="logo" style={{ width: '60px', height: '60px' }} />
    </Stack>
    <Typography sx={{ fontSize: { lg: '20px', xs: '12px' } }} mt="5px" textAlign="center" pb="5px">MDO Fitness By Jose Montes De Oca Morfin &copy; 2023</Typography>
  </Box>
);

export default Footer;
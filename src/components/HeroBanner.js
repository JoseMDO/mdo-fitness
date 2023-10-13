import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/banner-9.webp';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#FF2625" fontWeight="600" fontSize="26px">MDO Fitness</Typography>
    <Typography fontWeight={700} color="#fff" sx={{ fontSize: { lg: '38px', xs: '32px' } }} mb="23px" mt="30px">
      Anyone Can Reach Their Goals <br />
      I'm Here to Help You Reach Yours.
    </Typography>
    <Typography color="#fff" fontSize="20px" fontFamily="Alegreya" lineHeight="35px">
      The hardest part of the journey is the beggining. The easiest part, is the rest. 
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>
    <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Discipline
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;
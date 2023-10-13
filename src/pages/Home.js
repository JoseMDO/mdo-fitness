import React, { useState } from 'react';
import { Box } from '@mui/material';

import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';
import Favorites from '../components/Favorites';
import ContactUs from '../components/ContactUs';

const Home = () => {
  const [favoriteExercises, setFavoriteExercises] = useState([]);
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <Box>
      <HeroBanner />
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
      <Favorites setFavoriteExercises={setFavoriteExercises} favoriteExercises={favoriteExercises} bodyPart={bodyPart}/>
      <ContactUs />
    </Box>
  );
};

export default Home;
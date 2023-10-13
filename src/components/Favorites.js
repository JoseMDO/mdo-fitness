import React, { useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';


const Favorites = ({ favoriteExercises, setFavoriteExercises, bodyPart }) => {
	
	useEffect(() => {
		const fetchExercisesData = async () => {
			let exercisesData = [];
			if (bodyPart === 'all') {
				exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
				setFavoriteExercises(exercisesData);
			} else if (bodyPart === 'back') {
				exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/back`, exerciseOptions);
				const faveBackExercises = [exercisesData[57], exercisesData[68], exercisesData[47], exercisesData[54], exercisesData[73], exercisesData[149], exercisesData[148]]
				setFavoriteExercises(faveBackExercises);
			} else if (bodyPart === 'cardio') {
				exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/cardio`, exerciseOptions);
				const faveCardioExercises = [exercisesData[10], exercisesData[27], exercisesData[26], exercisesData[14], exercisesData[21]]
				setFavoriteExercises(faveCardioExercises);
			} else if (bodyPart === 'chest') {
				exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/chest`, exerciseOptions);
				const faveChestExercises = [exercisesData[6], exercisesData[27], exercisesData[63], exercisesData[119], exercisesData[115], exercisesData[40]]
				setFavoriteExercises(faveChestExercises);
			} else if (bodyPart === 'shoulders') {
				exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/shoulders`, exerciseOptions);
				const faveShouldersExercises = [exercisesData[32], exercisesData[83], exercisesData[87], exercisesData[122], exercisesData[125], exercisesData[128]]
				setFavoriteExercises(faveShouldersExercises);
			} else if (bodyPart === 'lower arms') {
				exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/lower%20arms`, exerciseOptions);
				const faveLowerArmsExercises = [exercisesData[19], exercisesData[17], exercisesData[12]]
				setFavoriteExercises(faveLowerArmsExercises);
			} else if (bodyPart === 'upper arms') {
				exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/upper%20arms`, exerciseOptions);
				const faveUpperArmsExercises = [exercisesData[72], exercisesData[80], exercisesData[99], exercisesData[128], exercisesData[171], exercisesData[89], exercisesData[34]]
				setFavoriteExercises(faveUpperArmsExercises);
			} else if (bodyPart === 'lower legs') {
				exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/lower%20legs`, exerciseOptions);
				const faveLowerLegsExercises = [exercisesData[35], exercisesData[37]]
				setFavoriteExercises(faveLowerLegsExercises);
			} else if (bodyPart === 'upper legs') {
				exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/upper%20legs`, exerciseOptions);
				const faveUpperLegsExercises = [exercisesData[25], exercisesData[28], exercisesData[138], exercisesData[186], exercisesData[91], exercisesData[83]]
				setFavoriteExercises(faveUpperLegsExercises);
			} else if (bodyPart === 'waist') {
				exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/waist`, exerciseOptions);
				const faveWaistExercises = [exercisesData[41], exercisesData[55], exercisesData[110]]
				setFavoriteExercises(faveWaistExercises);
			} else if (bodyPart === 'neck') {
				exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/neck`, exerciseOptions);
				const faveNeckExercises = [exercisesData[0]]
				setFavoriteExercises(faveNeckExercises);
			} 
		};
		fetchExercisesData(); 
	}, [bodyPart, setFavoriteExercises]);

	//Chest[6, 27, 63, 119, 115, 40]
	//Back[57, 68, 47, 54, 73, 149, 148(Shrugs)]
	//Shoulders[32, 83, 87, 122, 125, 128]
	//Lower Arms[19, 17, 12]
	//Upper Arms[72, 80, 99, 128, 171, 89, 34]
	//Lower Legs[35, 37]
	//Upper Legs[25, 28, 138, 186, 91, 83 ]
	//Cardio[10, 27, 26, 14, 21]
	//Waist[41, 55, 110 ]
	//Neck[0]


  return (
		<Box>
			{(bodyPart === 'all') 
				? <Typography variant="h4" fontWeight="bold" color="#fff" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">Please Select a Body Part to Show My Personal Favorites</Typography>
				: <Box>
				 		<Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px" color="#fff">Personal Favorites for {bodyPart.charAt(0).toUpperCase() + bodyPart.slice(1)}</Typography>
						<Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
        			{favoriteExercises.map((exercise, idx) => (
          			<ExerciseCard key={idx} exercise={exercise} />
        			))}
      			</Stack>
					</Box>
					}	
		</Box>
  )
}

export default Favorites
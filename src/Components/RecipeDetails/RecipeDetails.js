import React from 'react';
import { Box, Grid, Card, CardContent, Button, CardActions, Typography } from '@mui/material';
import cuisineIcon from '../../assets/images/tray.png';
import dishIcon from '../../assets/images/dishes.png';


const RecipeDetails = ({ recipe  }) => {

  return (
    <div className='receipe-info'>
      <Card elevation={4} className='card-box'>
        <Box className='img-box'>
          <img src={recipe.image} alt={recipe.label} />
        </Box>
        <Box className='text-box'>
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">{recipe.label}</Typography>
            <ul className='type-list'>
              <li>
                <img src={cuisineIcon} />
                <Typography gutterBottom variant="p" component="div"> 
                  {recipe.cuisineType}
                </Typography>
              </li>
              <li>
                <img src={dishIcon} />
                <Typography gutterBottom variant="p" component="div">{recipe.dishType}</Typography>
              </li>
            </ul>
            <div className='step-box'>
              <Typography gutterBottom variant="h6" component="div">Ingredients:</Typography>
              <ul>
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient.text}</li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Box>
      </Card>
    </div>
  );
};

export default RecipeDetails;

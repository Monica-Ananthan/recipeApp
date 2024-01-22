import React, { useState } from 'react';
import { Box, Grid, Card, CardContent, Button, CardActions, Typography } from '@mui/material';


const RecipeList = ({ recipes, onSelectRecipe, onAddToFavorites }) => {
  console.log('Recipes:', recipes);

  return (
    <Box sx={{ flexGrow: 1, marginTop: '50px' }}>
      <Grid container spacing={3}>
         {recipes && recipes.map((recipe) => (
          <Grid item xs={12} sm={6} md={3} key={recipe.recipe.uri} >
            <Box sx={{ position: 'relative' }}>
              <Card elevation={4} className='card-box'>
                <Box className='img-box'>
                  <img src={recipe.recipe.image} alt={recipe.recipe.label} />
                </Box>
                <Box className="text-box">
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">{recipe.recipe.label}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      onClick={() => onSelectRecipe(recipe)}
                    >
                      View Receipe
                    </Button>
                    <Button size="small" color="secondary" onClick={() => onAddToFavorites(recipe)}>
                      Add to Favorites
                    </Button>
                  </CardActions>
                </Box>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RecipeList;
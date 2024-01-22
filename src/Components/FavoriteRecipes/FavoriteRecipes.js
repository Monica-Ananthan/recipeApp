import React from 'react';
import RecipeList from '../RecipeList/RecipeList';

const FavoriteRecipes = ({ favoriteRecipes, onSelectRecipe }) => {

  return (
    <div className='favor-recipe'>
      <h2>Your Favorite Recipes</h2>
      {favoriteRecipes.length > 0 ? (
        <RecipeList recipes={favoriteRecipes} onSelectRecipe={onSelectRecipe}  />
      ) : (
        <h1 className='info-text'>No favorite recipes yet.</h1>
      )}
    </div>
  );
};

export default FavoriteRecipes;

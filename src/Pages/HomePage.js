import React, { useState, useEffect } from 'react';
import SearchBar from '../Components/SearchBar/SearchBar';
import RecipeList from '../Components/RecipeList/RecipeList';
import RecipeDetails from '../Components/RecipeDetails/RecipeDetails';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import API_KEYS from '../Config';
import FavoriteRecipes from '../Components/FavoriteRecipes/FavoriteRecipes'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

  const onSelectRecipe = (recipe) => {
    setSelectedRecipe(recipe);
  }
  const onAddToFavorites = (recipe) => {
    setFavoriteRecipes((prevFavorites) => [...prevFavorites, recipe]);
  }

  const { RECEIPE_APP_ID, RECEIPE_APP_KEY } = API_KEYS; // API keys from config file - gitignore

  const handleSearch = (query) => {
    console.log('Search query:', query);

    //I have used Edamam Receipe API
    fetch(`https://api.edamam.com/search?q=${query}&app_id=${RECEIPE_APP_ID}&app_key=${RECEIPE_APP_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("DATA", data)
        setRecipes(data.hits);
        setSelectedRecipe(null);
        setShowFavorites(false);
      })
      .catch((error) => console.error('Error fetching recipes:', error));
  };


  return (
    <Container maxWidth="lg">
      <div>
        <div className='search-wrap'>
          <SearchBar onSearch={handleSearch} />
          <div>
            <Button className='favor-btn' size='large' color="primary" onClick={() => setShowFavorites(true)}>
              <FavoriteBorderIcon />
            </Button>
          </div>
        </div>

        <div className='recipe-container'>
          <div className='recipe-wrap'>
            {!selectedRecipe && !showFavorites && (
              <RecipeList recipes={recipes} onSelectRecipe={onSelectRecipe} onAddToFavorites={onAddToFavorites} />
            )}

            {selectedRecipe && (
              <RecipeDetails recipe={selectedRecipe.recipe} />
            )}

            {showFavorites && (
              <FavoriteRecipes favoriteRecipes={favoriteRecipes} onSelectRecipe={onSelectRecipe} />
            )}

            {recipes.length === 0 && (
              <h1 className='info-text'>Search your Recipe !!</h1>
            )}

          </div>
        </div>
      </div>
    </Container>
  );
};

export default HomePage;


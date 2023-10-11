"use client";

import {useState} from 'react';

export default function CreateRecipe() {
  const [recipe, setRecipe] = useState({
    title: '',
    description: '',
    ingredients: '',
    instructions: '',
    headerImage: '',
    headerImageAltText: '',
  });

  const handleChange = (e) => {
    setRecipe({
      ...recipe,
      [e.target.name]: e.target.value,
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(recipe);

    const response = await fetch('/api/submit', {
      method: 'POST',
      body: recipe,
    });

    console.log(response);
  };

  return (
    <div>
      <h2>Create Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            value={recipe.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={recipe.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="ingredients">Ingredients</label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={recipe.ingredients}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="instructions">Instructions</label>
          <textarea
            id="instructions"
            name="instructions"
            value={recipe.instructions}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="headerImage">Header Image</label>
          <input
            id="headerImage"
            name="headerImage"
            type="text"
            value={recipe.headerImage}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="headerImageAltText">Header Image</label>
          <input
            id="headerImageAltText"
            name="headerImageAltText"
            type="text"
            value={recipe.headerImage}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

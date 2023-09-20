"use client";

import {useState} from 'react';
import {useRouter} from 'next/router';

import {insertRecipe} from '@/api-lib/recipes';


export default function CreateRecipe() {
  const router = useRouter();

  const [recipe, setRecipe] = useState({
    title: '',
    description: '',
    ingredients: '',
    instructions: '',
    headerImage: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newRecipe = await insertRecipe(recipe);
      router.push(`/recipes/${newRecipe._id}`);
    } catch (error) {
      console.error(`Error creating recipe: ${error}`);
    }
  };

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;

    setRecipe({
      ...recipe,
      [name]: target.value,
    });
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
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

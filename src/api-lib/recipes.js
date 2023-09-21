import clientPromise from '@/db/mongodb.js';
import { Petemoss } from 'next/font/google';

async function getRecipeCollection() {
  const client = await clientPromise;
  const db = client.db();
  const collection = db.collection("recipes");
  return collection;
}

export default async function handler(req, res) {
  const { method } = req;

  const recipes = await getRecipeCollection();

  if (method === 'POST') {
    try {
      res.status(201).json({ success: true, data: req.body });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  }
}

// CREATE RECIPE
async function insertRecipe(recipe) {
  const newRecipe = await getRecipeCollection().insertOne(recipe);
  return newRecipe;
}

// READ RECIPE
async function getRecipes(query={}) {
  const recipes = await getRecipeCollection();
  return recipes.find(query).toArray();
}

// UPDATE RECIPE
async function updateRecipe(id, newRecipe) {
  const recipe = await getRecipeCollection().updateOne({_id: id}, {$set: newRecipe});
  return recipe;
}

// DELETE RECIPE
async function deleteRecipe(id) {
  const recipe = await getRecipeCollection().deleteOne({_id: id});
  return recipe;
}

module.exports = {
  insertRecipe,
  getRecipes,
  updateRecipe,
  deleteRecipe
}

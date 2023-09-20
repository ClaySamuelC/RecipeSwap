import { clientPromise } from '../db/mongodb.js';

async function getRecipeCollection() {
  const client = await clientPromise;
  const db = client.db();
  const collection = db.collection("recipes");
  return collection;
}

// CREATE RECIPE
async function insertRecipe(recipe) {
  const newRecipe = await getRecipeCollection().insertOne(recipe);
  return newRecipe;
}

// READ RECIPE
async function getRecipes(query={}) {
  const recipe = await getRecipeCollection().find(query).toArray();
  return recipe;
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

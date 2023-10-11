const clientPromise = require('@/db/mongodb.js');

let db, recipes;

async function init() {
  if (db) return;
  const client = await clientPromise;
  db = client.db('RecipeSwap');
  
  recipes = db.collection('recipes');
};

export async function POST(req, res) {
  try {
    await init();
    const recipe = await recipes.insertOne(req.body);
    return recipe;
  } catch (error) {
    console.error(`Error in POST request:, ${error}`);
    return { error: 'Failed to create recipe' };
  }
}

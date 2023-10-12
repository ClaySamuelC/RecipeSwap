import { NextResponse } from 'next/server';

const { getClient } = require('@/db/mongodb.js');

let db, recipes;

async function init() {
  if (db) return;
  const client = await getClient();
  db = client.db('RecipeSwap');
  
  recipes = db.collection('recipes');
};

export async function GET() {
  try {
    await init();

    const allRecipes = await recipes.find({}).toArray();

    return new NextResponse(
      {
        status: 200,
        body: allRecipes,
      }
    )
  } catch (error) {
    console.error(`Error in GET request:, ${error}`);
    return new NextResponse(
      {
        status: 500,
        body: { error: error.message },
      }
    )
  }
}

export async function POST(request) {
  const recipe = await request.json();
  try {
    await init();
    await recipes.insertOne(recipe);
    return new NextResponse(
      {
        status: 200,
        body: recipe,
      }
    )
  } catch (error) {
    console.error(`Error in POST request:, ${error}`);
    return new NextResponse(
      {
        status: 500,
        body: { error: error.message },
      }
    )
  }
}

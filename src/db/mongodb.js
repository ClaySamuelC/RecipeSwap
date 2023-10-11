require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');

if (!process.env.MONGODB_URI) {
  throw new Error('Add Mongo URI to .env.local')
}

const uri = process.env.MONGODB_URI;

let client;

async function initClient() {
  client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprectationErrors: true,
    }
  });
  await client.connect()
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error(`Error connecting to DB: ${error}`));

  return client;
}

export async function getClient() {
  return await initClient();
}

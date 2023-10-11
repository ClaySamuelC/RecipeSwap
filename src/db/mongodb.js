require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');

if (!process.env.MONGODB_URI) {
  throw new Error('Add Mongo URI to .env.local')
}

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprectationErrors: true,
  }
});

let clientPromise;

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = await client.connect()
      .then(() => {
        console.log(`MongoDB connection established successfully`);
      }).catch((error) => {
        console.error(`MongoDB connection error: ${error}`);
      });
  }
  clientPromise = global._mongoClientPromise;
} else {
  clientPromise = client.connect();
}

export default clientPromise;

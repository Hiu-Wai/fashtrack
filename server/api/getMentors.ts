import { MongoClient } from 'mongodb';

export default defineEventHandler(async (event) => {
  // Load environment variables
  const mongodbUri = process.env.MONGODB_URI;
  const dbName = process.env.MONGODB_DB;

  if (!mongodbUri || !dbName) {
    throw new Error('MongoDB credentials are not set in the .env file.');
  }

  // Connect to MongoDB
  const client = new MongoClient(mongodbUri);
  try {
    await client.connect();
    const db = client.db(dbName);
    const mentorsCollection = db.collection('mentorsCollection');

    // Fetch data from the collection
    const mentors = await mentorsCollection.find({}).toArray();

    // Return the data as JSON
    return {
      success: true,
      data: mentors,
    };
  } catch (error) {
    console.error('Error fetching mentors:', error);
    return {
      success: false,
      message: 'Failed to fetch mentors.',
    };
  } finally {
    // Ensure the client is closed after operation
    await client.close();
  }
});

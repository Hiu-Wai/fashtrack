import { MongoClient } from "mongodb";

export default defineEventHandler(async (event) => {
  const uri = process.env.MONGODB_URI;
  const dbName = process.env.MONGODB_DB;

  if (!uri || !dbName) {
    throw new Error("MongoDB URI or database name is not defined in environment variables.");
  }

  const client = new MongoClient(uri);

  try {
    // Connect to MongoDB
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection("TestCollection"); // Replace with your collection name

    // Fetch data (modify query as needed)
    const data = await collection.find({}).toArray();

    return { success: true, data };
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    return { success: false, error: error.message };
  } finally {
    // Ensure the client is closed
    await client.close();
  }
});

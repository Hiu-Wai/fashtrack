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
    const collection = db.collection("joblistingsCollection"); // Replace with your collection name

    // Fetch data (modify query as needed)
    const jobData = await collection.find({}).toArray();

    const companiesCollection = db.collection("companiesCollection");

    // for each job, add the company name using the job.companyId
    for (let job of jobData) {
      const company = await companiesCollection.findOne({ _id: job.companyId });
      job.companyName = company.name;
    }

    return { success: true, data: jobData };


  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    return { success: false, error: error.message };
  } finally {
    // Ensure the client is closed
    await client.close();
  }
});

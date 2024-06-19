import { MongoClient, ServerApiVersion } from "mongodb";

const uri: string = process.env.MONGO_URI ?? "mongodb+srv://gtxnewsletter:xhQqDbW4vLYhX63i@gtx.71q9aod.mongodb.net/?retryWrites=true&w=majority&appName=GTX";


if (!uri) {
  throw new Error("MongoDB URI not specified in environment variables");
}

let cachedClient: MongoClient | null = null;

export async function connectToDatabase(): Promise<MongoClient> {
  if (cachedClient) {
    return cachedClient;
  }

  try {
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    await client.connect();
    cachedClient = client;
    return client;
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    throw new Error("Failed to connect to MongoDB");
  }
}

// src/lib/dbConnect.ts
import mongoose from 'mongoose';

// Explicitly define the Mongoose cache type
interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// Extend the global object with our Mongoose cache type
// This tells TypeScript that `global.mongoose` exists and what its structure is.
declare global {
  var mongoose: MongooseCache;
}

const MONGODB_URI = process.env.MONGODB_URI;

// Check if MONGODB_URI is defined. If not, throw an error.
// This ensures MONGODB_URI is always a string when used later.
if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

// Initialize cached variable from global object or create it if it doesn't exist
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

// Function to connect to the database
async function dbConnect() {
  // If a connection already exists, return it
  if (cached.conn) {
    return cached.conn;
  }

  // If there's no pending connection promise, create one
  if (!cached.promise) {
    const opts = {
      bufferCommands: false, // Line 35: This is a standard Mongoose option
    };

    // Connect to MongoDB. The '!' asserts that MONGODB_URI is not null/undefined here.
    cached.promise = mongoose.connect(MONGODB_URI!, opts).then((mongooseInstance) => {
      return mongooseInstance;
    });
  }

  // Await the connection promise and cache the connection object
  try {
    cached.conn = await cached.promise;
  } catch (e) {
    // If connection fails, reset the promise to allow retries
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default dbConnect;
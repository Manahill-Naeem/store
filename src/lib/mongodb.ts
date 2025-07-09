// src/lib/mongodb.ts
import mongoose from 'mongoose';

// 1. Define the interface for our cached Mongoose connection
interface CachedMongoose {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// 2. Extend the global object's type to include our custom mongoose cache
// This tells TypeScript that `global.mongoose` will exist and what its shape is.
declare global {
  var mongoose: CachedMongoose; // Use 'var' for global declarations
}

const MONGODB_URI = process.env.MONGODB_URI;

// 3. Ensure MONGODB_URI is defined before proceeding.
// The '!' operator in mongoose.connect(MONGODB_URI!, opts) tells TypeScript
// that MONGODB_URI will not be null or undefined at that point due to this check.
if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

// Initialize our cached object from the global scope or create it if it doesn't exist
let cached = global.mongoose; // Line 22 from before - should be fine with declare global

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectDB() {
  // If a connection already exists, return it
  if (cached.conn) {
    return cached.conn;
  }

  // If there's no pending connection promise, create one
  if (!cached.promise) {
    const opts = {
      bufferCommands: false, // Line 35 from before - this option is correct.
      // Other options can be added here if needed, e.g., useNewUrlParser: true, useUnifiedTopology: true
      // However, for Mongoose 6+ and Next.js 13+, these are often default or deprecated.
    };

    // Connect to MongoDB. Using MONGODB_URI! to assert it's a string.
    cached.promise = mongoose.connect(MONGODB_URI!, opts).then((mongooseInstance) => {
      return mongooseInstance;
    });
  }

  // Await the connection promise and cache the connection object
  try {
    cached.conn = await cached.promise;
  } catch (e) {
    // If connection fails, reset the promise to allow retries on next attempt
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}
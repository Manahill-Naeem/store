// src/models/Product.ts
import mongoose, { Schema } from 'mongoose'; // Make sure 'Document' is NOT imported from mongoose if not directly used elsewhere in this file

export interface IProduct { // <-- THIS IS THE KEY CHANGE: NO "extends Document"
  _id: string; // This MUST be 'string'
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  rating: number;
  reviews: number;
  createdAt?: Date; // Optional, as these are auto-generated
  updatedAt?: Date; // Optional
}

const ProductSchema: Schema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    imageUrl: { type: String, required: true },
    category: { type: String, required: true },
    rating: { type: Number, default: 0, min: 0, max: 5 },
    reviews: { type: Number, default: 0, min: 0 },
  },
  {
    timestamps: true,
  }
);

// When retrieving from Mongoose, the _id will implicitly be converted to string for JSON.
// The model itself uses IProduct as its base type.
const Product = mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);

export default Product;
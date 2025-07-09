// src/models/User.ts
import mongoose, { Schema } from 'mongoose';

export interface IUser {
  email: string;
  password: string; // Real app mein isko hashed form mein store karain
  name?: string;
  role?: 'user' | 'admin'; // Role add kar sakte hain
}

const UserSchema: Schema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // PRODUCTION: Use bcrypt to hash passwords
    name: { type: String },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default User;
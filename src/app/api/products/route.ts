// src/app/api/products/route.ts
import { NextResponse } from 'next/server'; // API route se response dene ke liye
import dbConnect from '@/lib/dbConnect';   // Database connection helper import karain
import Product from '@/models/Product';     // Humara Product Mongoose model import karain

// Ye function /api/products par GET requests ko handle karega.
export async function GET() {
  await dbConnect(); // Database se connect hon

  try {
    // MongoDB se saaray products find karain
    // .find({}) ka matlab hai ke saaray documents fetch karo
    const products = await Product.find({});

    // Products ko JSON format mein return karain aur HTTP status 200 (OK) dain
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    // Agar koi error ho toh console mein log karain
    console.error('Failed to fetch products:', error);
    // Error message ke saath HTTP status 500 (Internal Server Error) return karain
    return NextResponse.json(
      { message: 'Failed to fetch products', error: (error as Error).message },
      { status: 500 }
    );
  }
}

// Ye function /api/products par POST requests ko handle karega.
// Isko hum initial data add karnay ya naye products save karnay ke liye use karengay.
export async function POST(req: Request) {
  await dbConnect(); // Database se connect hon

  try {
    const body = await req.json(); // Request body se JSON data extract karain (jo frontend se aayega)

    // Basic validation: Check karain ke zaroori fields mojood hain ya nahi
    if (!body.name || !body.price || !body.imageUrl || !body.category) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 }); // 400 = Bad Request
    }

    // Request body data se naya Mongoose product object banayen
    const newProduct = new Product(body);
    // Is product ko database mein save karain
    await newProduct.save();

    // Naye banay hue product ko JSON format mein return karain aur HTTP status 201 (Created) dain
    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    console.error('Failed to add product:', error);
    return NextResponse.json(
      { message: 'Failed to add product', error: (error as Error).message },
      { status: 500 }
    );
  }
}
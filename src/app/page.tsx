// src/app/page.tsx
import Link from 'next/link';
import Image from 'next/image'; // <-- Add this line for Image component

export const metadata = { // <-- Add metadata here for the Home page
  title: 'Home - Mobile Accessories Store',
  description: 'Your one-stop shop for high-quality mobile accessories, chargers, cases, and more.',
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20 px-4 mb-12 rounded-lg shadow-xl text-center">
        <div className="container mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            Discover Your Next Must-Have Accessory!
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            From chargers to cases, find the perfect match for your mobile.
          </p>
          <Link
            href="/products"
            className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold shadow-lg transition duration-300 transform hover:scale-105 inline-block"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Dummy Featured Products Section (Later will use real product cards) */}
      <section className="py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* These are placeholder divs for now. We will replace them with actual ProductCard components later. */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            {/* CHANGED: Replaced <img> with <Image /> */}
            <Image
              src="https://via.placeholder.com/200x200?text=Accessory+1"
              alt="Accessory 1"
              width={200} // Set explicit width
              height={200} // Set explicit height
              className="mx-auto mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold mb-2">Wireless Earbuds</h3>
            <p className="text-gray-600 mb-3">$49.99</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">View Product</button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            {/* CHANGED: Replaced <img> with <Image /> */}
            <Image
              src="https://via.placeholder.com/200x200?text=Accessory+2"
              alt="Accessory 2"
              width={200} // Set explicit width
              height={200} // Set explicit height
              className="mx-auto mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold mb-2">Fast Charger (65W)</h3>
            <p className="text-gray-600 mb-3">$29.99</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">View Product</button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            {/* CHANGED: Replaced <img> with <Image /> */}
            <Image
              src="https://via.placeholder.com/200x200?text=Accessory+3"
              alt="Accessory 3"
              width={200} // Set explicit width
              height={200} // Set explicit height
              className="mx-auto mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold mb-2">Durable Phone Case</h3>
            <p className="text-gray-600 mb-3">$15.99</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">View Product</button>
          </div>
        </div>
        <div className="text-center mt-10">
          <Link
            href="/products"
            className="bg-gray-200 text-gray-800 hover:bg-gray-300 px-6 py-3 rounded-md text-lg font-medium transition duration-300"
          >
            View All Products &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
// src/app/products/page.tsx
'use client';

import { useState, useEffect } from 'react';
import ProductCard from '@/components/ProductCard';
import { IProduct } from '@/models/Product'; // Make sure this import is correct!
import Link from 'next/link';

export default function ProductsPage() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await fetch('/api/products');

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status} - ${res.statusText}`);
        }
        const data: IProduct[] = await res.json(); // TypeScript should recognize this as IProduct[]
        setProducts(data);
      } catch (err) {
        setError('Failed to load products. Please try again later.');
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Humari Products</h1>
        <p className="text-xl text-gray-700">Products load ho rahay hain...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12 text-red-600">
        <h1 className="text-4xl font-bold mb-8">Error!</h1>
        <p className="text-xl">{error}</p>
        <Link href="/" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
          Go to Home
        </Link>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Humari Products</h1>
        <p className="text-xl text-gray-700">Koi products nahi milay. Database mein products add karain.</p>
        <Link href="/" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
          Go to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
        Humari Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* THIS IS THE CHANGE: Explicitly type 'product' as IProduct */}
        {products.map((product: IProduct) => (
          <ProductCard key={product._id} product={product} /> 
        ))}
      </div>
    </div>
  );
}
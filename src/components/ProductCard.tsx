// src/components/ProductCard.tsx
import { IProduct } from '@/models/Product'; // Humara Product interface import karain
import Image from 'next/image'; // Next.js Image component for optimization
import Link from 'next/link';

interface ProductCardProps {
  product: IProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full">
      <div className="relative w-full h-48 sm:h-56 overflow-hidden">
        <Image
          src={product.imageUrl}
          alt={product.name}
          layout="fill" // Covers the parent container
          objectFit="cover" // Ensures the image covers the area, cropping if necessary
          className="transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-800 mb-2 truncate">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2 flex-grow">
          {product.description}
        </p>
        <div className="flex justify-between items-center mt-auto pt-3 border-t border-gray-100">
          <span className="text-2xl font-bold text-blue-600">
            ${product.price.toFixed(2)}
          </span>
          <Link href={`/products/${product._id}`} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 text-sm">
            View Details
          </Link>
        </div>
        {/* Optional: Rating and Reviews - will implement properly later */}
        {product.rating > 0 && (
            <div className="flex items-center text-yellow-500 mt-2 text-sm">
                {/* Render star icons based on product.rating */}
                {'★'.repeat(Math.floor(product.rating))}
                {'☆'.repeat(5 - Math.floor(product.rating))}
                <span className="ml-1 text-gray-500">({product.reviews} reviews)</span>
            </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
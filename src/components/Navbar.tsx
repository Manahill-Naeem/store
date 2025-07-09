// src/components/Navbar.tsx
'use client'; // This directive makes it a Client Component because we use useState.

import Link from 'next/link';
import { useState } from 'react'; // useState hook import karain
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa'; // Cart, Hamburger, Close icons

const DUMMY_CART_ITEM_COUNT = 2; // Testing ke liye dummy count, aap isko 0 bhi rakh sakte hain

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State mobile menu ki visibility control karnay ke liye

  return (
    <nav className="bg-gray-800 p-4 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Logo / Name */}
        <Link href="/" className="text-2xl font-bold">
          Mobile Store
        </Link>

        {/* Desktop Menu - md (medium) screen size se upar show hoga */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="hover:text-gray-300 transition duration-200">
            Home
          </Link>
          <Link href="/products" className="hover:text-gray-300 transition duration-200">
            Products
          </Link>
          <Link href="/about" className="hover:text-gray-300 transition duration-200">
            About
          </Link>
          <Link href="/currency-converter" className="hover:text-gray-300 transition duration-200">
            Currency
          </Link>

          {/* Cart Icon for Desktop */}
          <Link href="/cart" className="relative hover:text-gray-300 transition duration-200">
            <FaShoppingCart className="h-6 w-6" /> {/* Cart Icon */}
            {DUMMY_CART_ITEM_COUNT > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {DUMMY_CART_ITEM_COUNT}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu Button (Hamburger) - md screen size se neeche show hoga */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Cart Icon for Mobile (optional, agar aap isko mobile menu ke andar nahi rakhna chahte) */}
          <Link href="/cart" className="relative hover:text-gray-300 transition duration-200">
            <FaShoppingCart className="h-6 w-6" />
            {DUMMY_CART_ITEM_COUNT > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {DUMMY_CART_ITEM_COUNT}
              </span>
            )}
          </Link>

          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? (
              <FaTimes className="h-6 w-6" /> // Close icon jab menu khula ho
            ) : (
              <FaBars className="h-6 w-6" /> // Hamburger icon jab menu band ho
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown - md screen size se neeche show hoga jab isOpen true ho */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-gray-700 rounded-md py-2 px-4 space-y-2">
          <Link href="/" className="block py-2 text-white hover:bg-gray-600 rounded-md" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/products" className="block py-2 text-white hover:bg-gray-600 rounded-md" onClick={() => setIsOpen(false)}>
            Products
          </Link>
          <Link href="/about" className="block py-2 text-white hover:bg-gray-600 rounded-md" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="/currency-converter" className="block py-2 text-white hover:bg-gray-600 rounded-md" onClick={() => setIsOpen(false)}>
            Currency
          </Link>
          {/* Agar aap chahte hain ke mobile menu mein Cart link bhi ho */}
          {/* <Link href="/cart" className="block py-2 text-white hover:bg-gray-600 rounded-md" onClick={() => setIsOpen(false)}>
            Cart ({DUMMY_CART_ITEM_COUNT})
          </Link> */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
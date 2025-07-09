// src/components/Footer.tsx
import Link from 'next/link'; // For navigation links
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Social media icons

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8 mb-8">

          {/* Company Info / Brand Name */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Mobile Store</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your ultimate destination for high-quality mobile accessories. We offer a wide range of products to enhance your mobile experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors duration-200">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/currency-converter" className="hover:text-white transition-colors duration-200">
                  Currency Converter
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Contact Info</h4>
            <address className="not-italic space-y-2 text-gray-400">
              <p>123 Tech Avenue, Gadget City, TX 78701</p>
              <p>Email: <a href="mailto:info@mobilestore.com" className="hover:text-white transition-colors duration-200">info@mobilestore.com</a></p>
              <p>Phone: <a href="tel:+1234567890" className="hover:text-white transition-colors duration-200">+1 (234) 567-890</a></p>
            </address>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                <FaFacebookF className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                <FaLinkedinIn className="h-6 w-6" />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright Section */}
        <div className="text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Mobile Store. All rights reserved.</p>
          <p>Crafted with elegance using Next.js & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
// src/app/about/page.tsx
import Link from 'next/link';

export const metadata = {
  title: 'About Us - Mobile Store',
  description: 'Learn more about our mobile accessories store and our mission.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">About Our Mobile Store</h1>

      <section className="bg-white p-8 rounded-lg shadow-md mb-8">
        <h2 className="text-3xl font-semibold text-blue-700 mb-4">Our Story</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Welcome to Mobile Store, your one-stop shop for premium mobile accessories. We started with a simple vision: to provide high-quality, durable, and stylish accessories that complement your mobile lifestyle. In today&apos;s fast-paced world, your mobile device is more than just a phone; it&apos;s a companion, a tool, and a window to the world. We believe it deserves the best protection and enhancement.
        </p>
        <p className="text-gray-700 leading-relaxed">
          From our humble beginnings, we&apos;ve grown into a trusted online retailer, thanks to our commitment to customer satisfaction and a curated selection of products. Every item in our store is hand-picked and tested to ensure it meets our rigorous standards of quality and performance.
        </p>
      </section>

      <section className="bg-white p-8 rounded-lg shadow-md mb-8">
        <h2 className="text-3xl font-semibold text-blue-700 mb-4">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          Our mission is to empower mobile users by offering innovative and reliable accessories that seamlessly integrate with their devices. We aim to:
        </p>
        <ul className="list-disc list-inside text-gray-700 ml-4 mt-4 space-y-2">
          <li>Provide a diverse range of high-quality products.</li>
          <li>Ensure exceptional customer service and support.</li>
          <li>Stay ahead of technological trends to bring you the latest innovations.</li>
          <li>Offer competitive prices without compromising on quality.</li>
        </ul>
      </section>

      <section className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-blue-700 mb-4">Why Choose Us?</h2>
        <p className="text-gray-700 leading-relaxed">
          We stand out because we genuinely care about your mobile experience. Our team is passionate about technology and dedicated to helping you find the perfect accessory. We offer:
        </p>
        <ul className="list-disc list-inside text-gray-700 ml-4 mt-4 space-y-2">
          <li>Expertly curated selection.</li>
          <li>Fast and reliable shipping.</li>
          <li>Hassle-free returns.</li>
          <li>Dedicated customer support.</li>
        </ul>
      </section>

      <div className="text-center mt-10">
        <Link href="/contact" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105">
          Contact Us
        </Link>
      </div>
    </div>
  );
}
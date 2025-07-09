/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // ... agar koi aur configuration bhi ho toh woh yahan hogi
};

// CHANGE THIS LINE:
// module.exports = nextConfig; // <-- REMOVE THIS LINE

// TO THIS:
export default nextConfig; // <-- ADD THIS LINE
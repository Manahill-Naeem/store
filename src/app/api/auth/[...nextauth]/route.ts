// src/app/api/auth/[...nextauth]/route.ts
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import dbConnect from '@/lib/dbConnect'; // Assuming dbConnect.ts is the correct file
import User from '@/models/User';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'jsmith@example.com' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        await dbConnect();

        const user = await User.findOne({ email: credentials?.email });

        if (user) {
          if (credentials?.password === user.password) {
            return { id: user._id.toString(), email: user.email, name: user.name || 'Admin' };
          }
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: '/admin/login',
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      // Fix for 'session.user' possibly 'undefined' and type compatibility
      if (token && session.user) {
        // Ensure session.user properties are string or undefined/null
        session.user.id = token.id as string; // token.id will be string from JWT callback
        session.user.email = token.email || null; // Ensure it's string or null
        session.user.name = token.name || null; // Ensure it's string or null
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
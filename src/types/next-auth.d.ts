// types/next-auth.d.ts
import 'next-auth';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      id: string; // <-- Add the 'id' property here
      name?: string | null;
      email?: string | null;
      image?: string | null;
    } & DefaultSession['user']; // Keep other properties from DefaultSession
  }

  /**
   * The shape of the user object that will be passed to the `jwt` and `session` callbacks.
   */
  interface User {
    id: string; // <-- Add the 'id' property here if it's not already there for custom users
  }
}

declare module 'next-auth/jwt' {
  /**
   * Returned by the `jwt` callback and `getToken`, when using JWT sessions
   */
  interface JWT {
    id: string; // <-- Add the 'id' property here
  }
}
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "admin" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        const { username, password } = credentials;

        if (username === "admin" && password === "admin123") {
          return {
            id: "1",
            name: "Admin",
            email: "admin@example.com",
          };
        }

        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET ?? "CHANGE_THIS_SECRET",
  pages: {
    signIn: "/",
  },
  debug: process.env.NODE_ENV === "development",
});

export { handler as GET, handler as POST };

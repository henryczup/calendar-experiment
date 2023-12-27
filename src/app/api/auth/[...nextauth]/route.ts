import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID ?? "",
          clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
        })
      ],
    secret: process.env.SECRET,
};

const authHandler = NextAuth(authOptions);
export { authHandler as GET, authHandler as POST}

function Provider(arg0: { clientId: string | undefined; clientSecret: string | undefined; }) {
    throw new Error("Function not implemented.");
}

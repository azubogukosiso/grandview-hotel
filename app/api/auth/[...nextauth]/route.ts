import { NextRequest, NextResponse } from "next/server";
import NextAuth from "next-auth/next";
import User from "@/app/(models)/User.model";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions } from "next-auth";
import bcrypt from "bcrypt";
import { signUpCheck } from "@/app/(functions)/signUpCheck";
import { signInCheck } from "@/app/(functions)/signInCheck";

export const authOptions: NextAuthOptions = {
  providers: [
    {
      id: "googleCustomer",
      name: "googleCustomer",
      type: "oauth",
      wellKnown: "https://accounts.google.com/.well-known/openid-configuration",
      authorization: { params: { scope: "openid email profile" } },
      idToken: true,
      checks: ["pkce", "state"],
      async profile(profile) {
        try {
          const user = await User.findOne({
            email: profile.email,
            role: "customer",
          });

          if (user) {
            return {
              ...profile,
              id: profile.sub,
              role: user.role,
              office: user.office,
            };
          }
        } catch (error) {
          return { ...profile, error };
        }
      },
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    },
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "example@gmail.com",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials: any) {
        const { fullname, email, password } = credentials;
        const signUp = Boolean(credentials?.signUp);

        if (signUp) {
          // IF ACTION IS FOR SIGNING UP...
          const signUpCheckResult = await signUpCheck(
            fullname,
            email,
            password
          );

          const { errors } = signUpCheckResult; // DESTRUCTURE ERROR MESSAGES RETURNED FROM SIGNUPCHECK FXN

          const hashedPassword = await bcrypt.hash(password, 10);

          // IF NO ERRORS, CREATE USER'S PROFILE
          if (!errors.fullname && !errors.email && !errors.password) {
            const user = await User.create({
              fullname,
              email,
              password: hashedPassword,
            });

            if (user) {
              return user;
            } else {
              throw "Something went wrong when creating your profile";
            }
          } else {
            // IF ERRORS, RETURN ERROR MESSAGES TO CLIENT
            const jsonErrors = JSON.stringify(errors);
            throw new Error(jsonErrors);
          }
        } else {
          const { email, password } = credentials;

          const signInCheckResult = await signInCheck(email, password);

          if (signInCheckResult.user) {
            const { user } = signInCheckResult;
            return user;
          } else {
            const { errors } = signInCheckResult;
            const jsonErrors = JSON.stringify(errors);
            throw new Error(jsonErrors);
          }
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: { token: any; user: any }) {
      // PASS USER'S ID, USERNAME, EMAIL AND ROLE TO TOKEN OBJECT
      if (user) {
        return {
          ...token,
          id: user._id,
          fullname: user.fullname,
          email: user.email,
          role: user.role,
        };
      }

      return token;
    },

    async session({ session, token }: { session: any; token: any }) {
      // TAKE TOKEN'S USERNAME, ROLE, EMAIL AND ID (PASSED FROM USER OBJECT ABOVE) TO SESSION
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          fullname: token.fullname,
          email: token.email,
          role: token.role,
        },
      };
    },
  },
  secret: process.env.SECRET,
  session: {
    strategy: "jwt",
  },
  debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

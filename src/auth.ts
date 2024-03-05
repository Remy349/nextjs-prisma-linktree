import NextAuth from "next-auth";
import { authConfig } from "@/auth.config";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { prisma } from "@/libs/prisma";
import bcrypt from "bcrypt";

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({
            email: z.string().email(),
            password: z.string(),
          })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;

          const user = await prisma.user.findFirst({
            where: { emailAddress: email },
          });

          if (!user) return null;

          const passwordMatch = await bcrypt.compare(password, user.password);

          if (!passwordMatch) return user;
        }

        console.log("Invalid credentials");

        return null;
      },
    }),
  ],
});

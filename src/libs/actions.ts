"use server";

import { prisma } from "./prisma";

export const getLinksInUser = async (email: string) => {
  const links = await prisma.link.findMany({
    where: { user: { email } },
  });

  return links;
};

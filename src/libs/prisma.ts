import { PrismaClient } from "@prisma/client";

class PrismaSingleton {
  private static instance: PrismaClient | undefined;

  private constructor() {}

  public static getInstance(): PrismaClient {
    if (!PrismaSingleton.instance) {
      PrismaSingleton.instance = new PrismaClient();
    }

    return PrismaSingleton.instance;
  }
}

export const prisma =
  process.env.NODE_ENV === "development"
    ? PrismaSingleton.getInstance()
    : new PrismaClient();

import { PrismaClient } from "@prisma/client";

class PrismaSingleton {
  private static instance: PrismaClient;

  private constructor() {}

  public static getInstance(): PrismaClient {
    if (!PrismaSingleton.instance) {
      PrismaSingleton.instance = new PrismaClient();
      console.log("New PrismaClient instance.");
    }

    return PrismaSingleton.instance;
  }
}

export const prisma =
  process.env.NODE_ENV !== "production"
    ? PrismaSingleton.getInstance()
    : new PrismaClient();

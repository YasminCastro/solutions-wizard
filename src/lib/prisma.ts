// lib/prisma.ts
import { PrismaClient } from "@prisma/client";

const PrismaInstance = (() => {
  let instance: PrismaClient;

  async function createInstance() {
    try {
      const prisma = new PrismaClient();

      instance = prisma;
    } catch (error: any) {
      console.log("error", error);
    }

    return instance;
  }

  return {
    getInstance: async function () {
      if (!instance) {
        const createdInstance = await createInstance();

        instance = createdInstance;
      }

      return instance;
    },
  };
})();

export default PrismaInstance;

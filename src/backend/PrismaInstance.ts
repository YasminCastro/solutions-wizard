import { PrismaClient } from "@prisma/client";

const PrismaInstance = (() => {
  let instance: PrismaClient;

  async function createInstance() {
    const prisma = new PrismaClient();

    return prisma;
  }

  return {
    getInstance: async function () {
      if (!instance) {
        const createdInstance = await createInstance();

        return createdInstance;
      }

      return instance;
    },
  };
})();

export default PrismaInstance;

import { PrismaClient } from "@prisma/client";

const PrismaInstance = (() => {
  let instance: PrismaClient;

  async function createInstance() {
    instance = new PrismaClient();
    return instance;
  }

  return {
    getInstance: async function () {
      console.log("INSTANCE", instance);
      if (!instance) {
        instance = await createInstance();

        return instance;
      }

      return instance;
    },
  };
})();

export default PrismaInstance;

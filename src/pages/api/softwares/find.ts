import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, Software } from "@prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Software[]>
) {
  try {
    const prisma = new PrismaClient();

    console.log("prisma", prisma);

    const softwares = await prisma.software.findMany();

    console.log("softwares", softwares);

    res.status(200).json(softwares);
  } catch (error: any) {
    res.status(500).json(error.message);
  }
}

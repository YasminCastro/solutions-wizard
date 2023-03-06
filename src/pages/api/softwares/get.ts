import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const prisma = new PrismaClient();

    const softwares = await prisma.software.findMany();

    res.status(200).json(softwares);
  } catch (error: any) {
    console.log(error);
    res.status(500).json(error.message);
  }
}

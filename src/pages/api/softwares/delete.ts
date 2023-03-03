import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { id } = req.body;
    const prisma = new PrismaClient();

    const deleted = await prisma.software.delete({
      where: { id },
    });

    res.status(200).json(deleted);
  } catch (error: any) {
    console.log(error);
    res.status(500).json(error.message);
  }
}

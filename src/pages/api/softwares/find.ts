import type { NextApiRequest, NextApiResponse } from "next";
import PrismaInstance from "@/backend/PrismaInstance";
import { PrismaClient, Software } from "@prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Software[]>
) {
  try {
    const prisma = new PrismaClient();

    const softwares = await prisma.software.findMany();

    res.status(200).json(softwares);
  } catch (error: any) {
    res.status(500).json(error.message);
  }
}

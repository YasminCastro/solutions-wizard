import type { NextApiRequest, NextApiResponse } from "next";
import PrismaInstance from "@/backend/PrismaInstance";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { name } = req.body;
    const prisma = await PrismaInstance.getInstance();

    const created = await prisma.software.create({ data: { name } });

    res.status(200).json(created);
  } catch (error: any) {
    res.status(500).json(error.message);
  }
}

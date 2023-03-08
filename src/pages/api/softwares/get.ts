import type { NextApiRequest, NextApiResponse } from "next";
import PrismaInstance from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const prisma = await PrismaInstance.getInstance();

    const softwares = await prisma.software.findMany({
      orderBy: { name: "asc" },
    });

    res.status(200).json(softwares);
  } catch (error: any) {
    console.log(error);
    res.status(500).json(error.message);
  }
}

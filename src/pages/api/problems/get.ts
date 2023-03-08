import type { NextApiRequest, NextApiResponse } from "next";
import PrismaInstance from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { softwareId } = req.query;

    if (!softwareId) {
      throw new Error("softwareId is missing");
    }

    const parsedSoftwareId = parseInt(softwareId.toString());

    const prisma = await PrismaInstance.getInstance();

    const problems = await prisma.problem.findMany({
      where: { softwareId: parsedSoftwareId },
    });

    res.status(200).json(problems);
  } catch (error: any) {
    console.log(error);
    res.status(500).json(error.message);
  }
}

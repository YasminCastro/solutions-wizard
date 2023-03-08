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

    const softwareName = await prisma.software.findUnique({
      where: { id: parsedSoftwareId },
    });

    if (!softwareName) {
      throw new Error("Software not found");
    }

    const problems = await prisma.problem.findMany({
      where: { softwareId: parsedSoftwareId },
      orderBy: { title: "asc" },
    });

    res.status(200).json({ problems, softwareName: softwareName.name });
  } catch (error: any) {
    console.log(error);
    res.status(500).json(error.message);
  }
}

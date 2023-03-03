import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import moment from "moment";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { name } = req.body;
    const prisma = new PrismaClient();

    const createdAt = moment().toISOString();

    const created = await prisma.software.create({
      data: { name, createdAt },
    });

    res.status(200).json(created);
  } catch (error: any) {
    console.log(error);
    res.status(500).json(error.message);
  }
}

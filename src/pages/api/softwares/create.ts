import type { NextApiRequest, NextApiResponse } from "next";
import moment from "moment";
import PrismaInstance from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { name } = req.body;
    const prisma = await PrismaInstance.getInstance();

    const createdAt = moment().toISOString();

    const created = await prisma.software.create({
      data: { name, createdAt },
    });

    res.status(200).json(created);
  } catch (error: any) {
    if (error.message.includes("Unique constraint failed on the fields")) {
      res.status(200).json({ message: "Nome deve ser unico." });
    } else {
      console.log(error.message);
      res.status(200).json({
        message:
          "Erro interno, tente novamente mais tarde ou entre em contato com suporte.",
      });
    }
  }
}

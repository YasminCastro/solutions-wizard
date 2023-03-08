import type { NextApiRequest, NextApiResponse } from "next";
import moment from "moment";
import PrismaInstance from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { title, description, tags, imagesUrl, softwareId } = req.body;
    const prisma = await PrismaInstance.getInstance();

    const createdAt = moment().toISOString();
    const updatedAt = moment().toISOString();

    const created = await prisma.problem.create({
      data: {
        title,
        description,
        tags,
        imagesUrl,
        softwareId: parseInt(softwareId),
        createdAt,
        updatedAt,
      },
    });

    res.status(200).json({ created });
  } catch (error: any) {
    if (error.message.includes("Unique constraint failed on the fields")) {
      res.status(200).json({ message: "Título deve ser unico." });
    } else {
      console.log(error.message);
      res.status(200).json({
        message:
          "Erro interno, tente novamente mais tarde ou entre em contato com suporte.",
      });
    }
  }
}

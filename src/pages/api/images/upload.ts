import type { NextApiRequest, NextApiResponse } from "next";
import moment from "moment";
import PrismaInstance from "@/lib/prisma";
import { s3 } from "@/lib/bucket";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const body = req.body;

    const formDataObj = Object.fromEntries(body.entries());
    // const fileParams = {
    //   Bucket: process.env.BUCKET_NAME,
    //   Key: name,
    //   Expires: 600,
    //   ContentType: type,
    //   ACL: "public-read",
    // };

    // const url = await s3.getSignedUrlPromise("putObject", fileParams);

    // console.log(url);

    res.status(200).json({});
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

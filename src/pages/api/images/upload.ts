import type { NextApiRequest, NextApiResponse } from "next";
import { S3Client, AbortMultipartUploadCommand } from "@aws-sdk/client-s3";
import { AWS_CONFIG } from "@/config";
import moment from "moment";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { name, type } = req.body;

    const fileName = `${name}-${moment().format()}`;

    // const command = new AbortMultipartUploadCommand({
    //   Bucket: AWS_CONFIG.bucketName,
    //   Key: `${name}-${moment().format()}`,
    // });

    // const data = await client.send(command);

    res.status(200).json({});
  } catch (error: any) {
    console.log(error);
    res.status(400).json({ message: error });
  }
}

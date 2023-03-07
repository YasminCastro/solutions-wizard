import { S3 } from "aws-sdk";
import { S3Client } from "@aws-sdk/client-s3";
import { AWS_CONFIG } from "@/config";

if (!process.env.ACCESS_KEY) {
  throw new Error("ACCESS_KEY missing");
}

if (!process.env.SECRET_KEY) {
  throw new Error("SECRET_KEY missing");
}

export const s3Instance = new S3Client({
  region: AWS_CONFIG.region,
  credentials: {
    accessKeyId: AWS_CONFIG.accessKeyId,
    secretAccessKey: AWS_CONFIG.secretAccessKey,
  },
});

export const s3 = new S3({
  region: "us-east-1",
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECRET_KEY,
  signatureVersion: "v4",
});

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "1mb",
    },
  },
};

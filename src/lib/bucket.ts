import { S3 } from "aws-sdk";

if (!process.env.ACCESS_KEY) {
  throw new Error("ACCESS_KEY missing");
}

if (!process.env.SECRET_KEY) {
  throw new Error("SECRET_KEY missing");
}

export const s3 = new S3({
  region: "us-east-1",
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECRET_KEY,
  signatureVersion: "v3",
});

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "1mb",
    },
  },
};

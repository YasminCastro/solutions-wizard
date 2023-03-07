if (!process.env.ACCESS_KEY) {
  throw new Error("ACCESS_KEY missing");
}

if (!process.env.SECRET_KEY) {
  throw new Error("SECRET_KEY missing");
}

export const LEFT_PANEL_WIDTH = 250;

export const AWS_CONFIG = {
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECRET_KEY,
  bucketName: "solutions-wizard",
  region: "us-east-1",
};

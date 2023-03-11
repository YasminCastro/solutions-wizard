if (!process.env.ACCESS_KEY) {
  throw new Error("ACCESS_KEY missing");
}

if (!process.env.SECRET_KEY) {
  throw new Error("SECRET_KEY missing");
}

if (!process.env.TOKEN_SECRET) {
  throw new Error("TOKEN_SECRET missing");
}

export const LEFT_PANEL_WIDTH = 250;

export const AWS_CONFIG = {
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECRET_KEY,
  bucketName: "solutions-wizard",
  region: "us-east-1",
};

export const AUTH_CONFIG = {
  TOKEN_SECRET: process.env.TOKEN_SECRET,
  EXPIRES_IN: 604800, // 7 days in seconds
};

if (!process.env.ACCESS_KEY) {
  throw new Error("ACCESS_KEY missing");
}

if (!process.env.SECRET_KEY) {
  throw new Error("SECRET_KEY missing");
}

if (!process.env.LOGIN_ID) {
  throw new Error("LOGIN_ID missing");
}

if (!process.env.LOGIN_USERNAME) {
  throw new Error("LOGIN_USERNAME missing");
}

if (!process.env.LOGIN_HASH) {
  throw new Error("LOGIN_HASH missing");
}

if (!process.env.LOGIN_SALT) {
  throw new Error("LOGIN_SALT missing");
}

export const LEFT_PANEL_WIDTH = 250;

export const AWS_CONFIG = {
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECRET_KEY,
  bucketName: "solutions-wizard",
  region: "us-east-1",
};

export const AUTH_CONFIG = {
  LOGIN_ID: process.env.LOGIN_ID,
  LOGIN_USERNAME: process.env.LOGIN_USERNAME,
  LOGIN_HASH: process.env.LOGIN_HASH,
  LOGIN_SALT: process.env.LOGIN_SALT,
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    ACCESS_KEY: process.env.ACCESS_KEY,
    SECRET_KEY: process.env.SECRET_KEY,
    LOGIN_ID: process.env.LOGIN_ID,
    LOGIN_USERNAME: process.env.LOGIN_USERNAME,
    LOGIN_HASH: process.env.LOGIN_HASH,
    LOGIN_SALT: process.env.LOGIN_SALT,
    TOKEN_SECRET: process.env.TOKEN_SECRET,
  },
};

module.exports = nextConfig;

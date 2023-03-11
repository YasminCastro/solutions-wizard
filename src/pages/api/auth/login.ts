import allowCors from "@/backend/middleware/allowCors";
import { AUTH_CONFIG } from "@/config";
import PrismaInstance from "@/lib/prisma";
import jwt from "jsonwebtoken";
import crypto from "crypto";

import { NextApiRequest, NextApiResponse } from "next";

interface IBody {
  password: string;
  username: string;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { password, username } = req.body as IBody;

    if (!password && !username) {
      return res.status(400).json({
        status: "error",
        error: "Request missing username or password ",
      });
    }

    const prisma = await PrismaInstance.getInstance();

    // check find user

    const userFound = await prisma.user.findFirst({
      where: { username },
    });

    if (!userFound) {
      throw new Error("Usuário não encontrado!");
    }

    // check password

    const inputHash = crypto
      .pbkdf2Sync(password, userFound.salt, 1000, 64, "sha512")
      .toString("hex");
    const passwordsMatch = userFound.hash === inputHash;

    if (!passwordsMatch) {
      throw new Error("Senha incorreta!");
    }

    const payload = {
      userId: userFound.id,
      username: userFound.username,
    };

    // create token

    const token = jwt.sign(payload, AUTH_CONFIG.TOKEN_SECRET, {
      expiresIn: AUTH_CONFIG.EXPIRES_IN,
    });

    return res.status(200).json({
      success: true,
      token,
      user: payload,
      expiresIn: AUTH_CONFIG.EXPIRES_IN,
    });
  } catch (error: any) {
    return res.json({ success: false, message: error.message });
  }
};

export default allowCors(handler);

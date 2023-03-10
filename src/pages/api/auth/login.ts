import { findUser, validatePassword } from "@/auth/user";
import allowCors from "@/backend/middleware/allowCors";
import { AUTH_CONFIG } from "@/config";
import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";

interface IBody {
  password: string;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { password } = req.body as IBody;

    if (!password) {
      return res.status(400).json({
        status: "error",
        error: "Request missing password",
      });
    }

    const userFound = findUser("glaucia");

    if (!userFound) {
      throw new Error("Usuário não encontrado!");
    }

    // check password

    const isValid = validatePassword(userFound, password);

    if (!isValid) {
      throw new Error("Senha incorreta!");
    }

    const payload = {
      userId: userFound.id,
      username: userFound.username,
    };

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

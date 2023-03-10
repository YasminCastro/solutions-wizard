import crypto from "crypto";
import PrismaInstance from "@/lib/prisma";
import moment from "moment";

export default async function signup(req: any, res: any) {
  try {
    const { password, username } = req.body;

    const salt = crypto.randomBytes(16).toString("hex");
    const hash = crypto
      .pbkdf2Sync(password, salt, 1000, 64, "sha512")
      .toString("hex");

    const user = {
      username,
      hash,
      salt,
      createdAt: moment().format(),
    };

    const prisma = await PrismaInstance.getInstance();

    await prisma.user.create({
      data: user,
    });

    res.status(200).send({ done: true });
  } catch (error: any) {
    console.error(error);
    res.status(500).end(error.message);
  }
}

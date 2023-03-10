import { AUTH_CONFIG } from "@/config";
import * as jose from "jose";

const authMiddleware = async (token: any): Promise<boolean> => {
  try {
    const { payload } = await jose.jwtVerify(
      token,
      new TextEncoder().encode(AUTH_CONFIG.TOKEN_SECRET)
    );

    if (!payload) {
      throw new Error("Token invalid");
    }

    return true;
  } catch (error) {
    return false;
  }
};
export default authMiddleware;

import { NextRequest, NextResponse } from "next/server";
import authMiddleware from "./backend/middleware/authMiddleware";

//https://github.com/vercel/next.js/discussions/38227

// Supports both a single value or an array of matches

export const config = {
  matcher: ["/dashboard", "/software", "/signup", "/problem"],
};

export default async function middleware(req: NextRequest) {
  const token = req.cookies.get("token");

  if (!token) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  const isAuth = await authMiddleware(token.value);

  if (!isAuth) {
    req.cookies.delete("user");
    return NextResponse.redirect(new URL("/", req.url));
  }
}

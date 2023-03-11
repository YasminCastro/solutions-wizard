import { NextRequest, NextResponse } from "next/server";
import authMiddleware from "./backend/middleware/authMiddleware";

//https://github.com/vercel/next.js/discussions/38227

// Supports both a single value or an array of matches

export const config = {
  matcher: ["/((?!api|static|favicon.ico|icons|manifest.json|_next).*)"],
};

export default async function middleware(req: NextRequest) {
  const token = req.cookies.get("token");

  if (req.nextUrl.pathname !== "/") {
    if (!token) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    const isAuth = await authMiddleware(token.value);

    if (!isAuth) {
      req.cookies.delete("user");
      return NextResponse.redirect(new URL("/", req.url));
    }
  } else if (token) {
    const isAuth = await authMiddleware(token.value);

    if (isAuth) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
  }
}

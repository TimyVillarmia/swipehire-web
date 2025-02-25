// app/middleware.ts
import { cookies } from "next/headers";
import { NextResponse, NextRequest } from "next/server";
import { decrypt, getUserIdFromCookie } from "@/lib/sessions";
import { fetchUserRecruitProfileStatus } from "@/lib/utils";
import { getInternProfileStatusById } from "./lib/data";

const protectedRoutes = ["/dashboard", "/setup"];
const publicRoutes = ["/login", "/register"];

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const userId = await getUserIdFromCookie();

  // Paths that don't need authentication or profile setup check
  if (path.startsWith("/_next") || path.startsWith("/api") || path === "/") {
    return NextResponse.next();
  }

  // Authentication check
  if (!userId) {
    if (protectedRoutes.includes(path)) {
      return NextResponse.redirect(new URL("/login", req.nextUrl));
    }
    return NextResponse.next(); // Allow unauthenticated access to public routes or other unprotected routes.
  }

  // Authenticated user logic
  if (publicRoutes.includes(path)) {
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
  }

  if (path === "/dashboard") {
    const profileStatus = await fetchUserRecruitProfileStatus(userId);
    const internProfileStatus = await getInternProfileStatusById(userId);
    if (!profileStatus && !internProfileStatus) {
      return NextResponse.redirect(new URL("/setup", req.nextUrl));
    }
  }

  if (path === "/setup") {
    const recruiterProfileStatus = await fetchUserRecruitProfileStatus(userId);
    const internProfileStatus = await getInternProfileStatusById(userId);
    if (recruiterProfileStatus && internProfileStatus) {
      return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
    } 
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/setup", "/login", "/register"],
};

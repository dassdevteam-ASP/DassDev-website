import { NextResponse } from "next/server";

const LAUNCH_AT = process.env.LAUNCH_AT || "2026-09-10T18:00:00+05:30";

export function proxy(request) {
  const { pathname } = request.nextUrl;

  const now = Date.now();
  const launchTime = new Date(LAUNCH_AT).getTime();

  const isLaunched = now >= launchTime;

  // Launch page itself must always remain accessible.
  if (pathname.startsWith("/launch")) {
    return NextResponse.next();
  }

  // Static files and Next.js internals must remain accessible.
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/icon") ||
    pathname.startsWith("/apple-icon") ||
    pathname.startsWith("/manifest") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Before launch → send visitors to launch page.
  if (!isLaunched) {
    const launchUrl = request.nextUrl.clone();

    launchUrl.pathname = "/launch";
    launchUrl.search = "";

    return NextResponse.redirect(launchUrl);
  }

  // After launch → website works normally.
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Run middleware on all routes except:
     * - _next/static
     * - _next/image
     * - favicon
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};

import { NextResponse } from "next/server";

const LAUNCH_AT =
  process.env.LAUNCH_AT ||
  "2026-09-04T15:00:00+05:30";

export function proxy(request) {
  const { pathname } = request.nextUrl;

  // Allow the launch page itself
  if (pathname.startsWith("/launch")) {
    return NextResponse.next();
  }

  // Allow Next.js internals and static files
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

  const now = Date.now();
  const launchTime = new Date(LAUNCH_AT).getTime();

  const isLaunchTimeReached = now >= launchTime;

  // Check whether this visitor has clicked
  // "Enter DASS DEV"
  const hasEntered = request.cookies.get(
    "dassdev_launch_entered"
  )?.value === "1";

  /*
   * BEFORE LAUNCH
   *
   * Everyone stays on /launch.
   */
  if (!isLaunchTimeReached) {
    const launchUrl = request.nextUrl.clone();

    launchUrl.pathname = "/launch";
    launchUrl.search = "";

    return NextResponse.redirect(launchUrl);
  }

  /*
   * AFTER LAUNCH
   *
   * Launch page remains visible until
   * the visitor clicks the Enter button.
   */
  if (!hasEntered) {
    const launchUrl = request.nextUrl.clone();

    launchUrl.pathname = "/launch";
    launchUrl.search = "";

    return NextResponse.redirect(launchUrl);
  }

  /*
   * Visitor has entered.
   * Allow the actual website.
   */
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
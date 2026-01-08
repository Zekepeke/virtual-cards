import { NextResponse, type NextRequest } from "next/server";

export default async function proxy(req: NextRequest) {
  // ✅ DEV BYPASS (no magic link needed)
  if (process.env.AUTH_BYPASS === "true") {
    return NextResponse.next();
  }

  // ...keep the rest of your existing proxy.ts logic below...
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico)).*)",
  ],
};
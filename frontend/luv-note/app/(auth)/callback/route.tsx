import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const next = url.searchParams.get("next") || "/auth/callback";

  // Supabase sets the session in the browser automatically for OAuth.
  // For magic links, Supabase also handles it client-side when link opens.
  return NextResponse.redirect(new URL(next, url.origin));
}
// app/(auth)/callback/route.tsx
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const url = new URL(req.url);
  // Redirect to the actual auth callback page
  return NextResponse.redirect(new URL("/auth/callback" + url.search + url.hash, url.origin));
}
import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);

  const token_hash = url.searchParams.get("token_hash");
  const typeRaw = url.searchParams.get("type") || "email";
  const next = url.searchParams.get("next") || "/onboarding";

  // Safety: only allow internal redirects
  const safeNext = next.startsWith("/") ? next : "/onboarding";

  if (!token_hash) {
    return NextResponse.redirect(new URL(`/login?next=${encodeURIComponent(safeNext)}`, url.origin));
  }

  // Create the redirect response up front so we can attach cookies to it
  const res = NextResponse.redirect(new URL(safeNext, url.origin));

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll: () => req.cookies.getAll(),
        setAll: (cookiesToSet) => {
          cookiesToSet.forEach(({ name, value, options }) => {
            res.cookies.set(name, value, options);
          });
        },
      },
    }
  );

  // Coerce deprecated magiclink -> email (per Supabase JS docs)
  const type = typeRaw === "magiclink" ? "email" : typeRaw;

  const { error } = await supabase.auth.verifyOtp({
    token_hash,
    // @ts-expect-error supabase type unions vary by version
    type,
  });

  if (error) {
    return NextResponse.redirect(
      new URL(`/login?next=${encodeURIComponent(safeNext)}&error=${encodeURIComponent(error.message)}`, url.origin)
    );
  }

  return res;
}

import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);

  const token_hash = url.searchParams.get("token_hash");
  const type = url.searchParams.get("type") || "email"; 
  const next = url.searchParams.get("next") || "/onboarding";

  // If missing params, bounce to login
  if (!token_hash) {
    return NextResponse.redirect(
      new URL(`/login?next=${encodeURIComponent(next)}`, url.origin)
    );
  }

  // IMPORTANT: create a response object FIRST so we can attach cookies to it
  const redirectResponse = NextResponse.redirect(new URL(next, url.origin));

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!, // or ANON if that's what you use
    {
      cookies: {
        // read cookies from the incoming request
        getAll: () => req.cookies.getAll(),
        // write cookies onto the outgoing response
        setAll: (cookiesToSet) => {
          cookiesToSet.forEach(({ name, value, options }) => {
            redirectResponse.cookies.set(name, value, options);
          });
        },
      },
    }
  );

  const { error } = await supabase.auth.verifyOtp({
    token_hash,
    // @ts-expect-error runtime accepts 'email'
    type,
  });

  if (error) {
    return NextResponse.redirect(
      new URL(
        `/login?next=${encodeURIComponent(next)}&error=${encodeURIComponent(error.message)}`,
        url.origin
      )
    );
  }

  return redirectResponse;
}

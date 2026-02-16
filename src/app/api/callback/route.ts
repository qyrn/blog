import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");
  const state = request.nextUrl.searchParams.get("state");
  const cookieStore = await cookies();
  const storedState = cookieStore.get("oauth_state")?.value;

  cookieStore.delete("oauth_state");

  if (!code) {
    return new NextResponse("Missing code parameter", { status: 400 });
  }

  if (!state || state !== storedState) {
    return new NextResponse("Invalid state parameter", { status: 403 });
  }

  const response = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      client_id: process.env.GITHUB_OAUTH_CLIENT_ID,
      client_secret: process.env.GITHUB_OAUTH_CLIENT_SECRET,
      code,
    }),
  });

  const data = await response.json();

  if (data.error || !data.access_token) {
    return new NextResponse(`GitHub OAuth error: ${data.error_description || data.error || "Unknown error"}`, { status: 400 });
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const tokenData = JSON.stringify({ token: data.access_token, provider: "github" });

  const script = `
    <!DOCTYPE html>
    <html>
    <head><title>Authorization</title></head>
    <body>
    <script>
      (function() {
        const allowedOrigin = "${siteUrl}";
        function receiveMessage(e) {
          if (e.origin !== allowedOrigin) return;
          window.opener.postMessage(
            'authorization:github:success:${tokenData.replace(/'/g, "\\'")}',
            allowedOrigin
          );
          window.removeEventListener("message", receiveMessage, false);
        }
        window.addEventListener("message", receiveMessage, false);
        window.opener.postMessage("authorizing:github", allowedOrigin);
      })();
    </script>
    </body>
    </html>
  `;

  return new NextResponse(script, {
    headers: { "Content-Type": "text/html" },
  });
}

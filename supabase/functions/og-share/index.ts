const pages: Record<string, { title: string; description: string; image: string; path: string }> = {
  sixweeks: {
    title: "6 Week Habit Stack",
    description: "Give me 6 weeks to install the habit stack and I'll give you a body you're actually proud of.",
    image: "https://habit-kickstart.lovable.app/og-sixweeks.png",
    path: "/sixweeks",
  },
  habitkickstart: {
    title: "10-Day Habit Kickstart",
    description: "Join the free 10-day Habit Kickstart and learn the system that's helped hundreds of over-30s lose fat, get their energy back, and feel confident again.",
    image: "https://habit-kickstart.lovable.app/og-habitkickstart.png",
    path: "/habitkickstart",
  },
};

const SITE_URL = "https://habit-kickstart.lovable.app";

Deno.serve((req) => {
  const url = new URL(req.url);
  const slug = url.pathname.replace(/^\/og-share\/?/, "").replace(/\/$/, "");

  const page = pages[slug];
  if (!page) {
    return new Response("Not found", { status: 404 });
  }

  const redirectUrl = `${SITE_URL}${page.path}`;

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>${page.title}</title>
  <meta name="description" content="${page.description}" />
  <meta property="og:title" content="${page.title}" />
  <meta property="og:description" content="${page.description}" />
  <meta property="og:image" content="${page.image}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="${redirectUrl}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${page.title}" />
  <meta name="twitter:description" content="${page.description}" />
  <meta name="twitter:image" content="${page.image}" />
  <meta http-equiv="refresh" content="0;url=${redirectUrl}" />
</head>
<body>
  <script>window.location.replace("${redirectUrl}");</script>
  <p>Redirecting to <a href="${redirectUrl}">${page.title}</a>...</p>
</body>
</html>`;

  return new Response(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
});

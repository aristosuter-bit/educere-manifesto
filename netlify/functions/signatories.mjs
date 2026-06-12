// Returns the public list of manifesto signatories from Netlify Forms.
// Emails are collected for contact purposes only and are NEVER exposed here.
// Moderation: delete a submission in the Netlify dashboard and it
// disappears from the site within a minute (cache TTL).

const FORM_ID = "6a2ba82463dd3a00081d167a"; // form "endorse"

export default async function handler() {
  const token = process.env.NETLIFY_API_TOKEN;
  if (!token) {
    return Response.json({ error: "not configured" }, { status: 500 });
  }

  const res = await fetch(
    `https://api.netlify.com/api/v1/forms/${FORM_ID}/submissions?per_page=1000`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  if (!res.ok) {
    return Response.json({ error: "upstream error" }, { status: 502 });
  }

  const submissions = await res.json();
  const signatories = submissions
    .filter((s) => (s.data?.name || "").trim().length > 1)
    .map((s) => ({
      name: String(s.data.name).slice(0, 120),
      role: String(s.data.role || "").slice(0, 40),
      canton: String(s.data.canton || "").slice(0, 40),
      comment: String(s.data.comment || "").slice(0, 280),
      created_at: s.created_at,
    }))
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

  return Response.json(signatories, {
    headers: {
      "Cache-Control": "public, max-age=60",
      "Access-Control-Allow-Origin": "*",
    },
  });
}

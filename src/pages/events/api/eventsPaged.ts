import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ params, request }) => {
  const url = new URL(request.url);
  const page = url.searchParams.get("page") ?? "1";
  const limit = url.searchParams.get("limit") ?? "10";

  // Llamas a tu API externa / backend
  const resp = await fetch(
    `https://api.festiva.no:8001/api/event/paged?page=${page}&limit=${limit}`
  );
  if (!resp.ok) {
    return new Response(JSON.stringify({ error: "Error fetching events" }), {
      status: resp.status,
      headers: { "Content-Type": "application/json" },
    });
  }
  const data = await resp.json();

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};

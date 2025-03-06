import { comments } from "@/app/api/comments/data";
import { type NextRequest } from "next/server";

// Get all comments if searchParams not match
export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const query = searchParams.get("query");

  console.log("query is :", query);

  const filteredComments = query
    ? comments.filter((comment) => comment.comment.includes(query))
    : comments;

  console.log("filteredComments array is: ", filteredComments);

  return Response.json(filteredComments);
}

export async function POST(req: Request) {
  const comment = await req.json();
  const newComment = {
    id: comments.length + 1,
    comment: comment.text,
  };

  comments.push(newComment);

  return new Response(JSON.stringify(newComment), {
    headers: { "content-type": "application/json; charset=UTF-8" },
    status: 201,
  });
}

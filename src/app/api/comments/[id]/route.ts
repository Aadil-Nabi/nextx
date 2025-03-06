import {comments} from "@/app/api/comments/data";

// Get one comment based on id passed in the body.
export async function GET(req: Request, {params}: { params: Promise<{ id: string }> }) {
    const {id} = await params;

    const comment = comments.find(comment => comment.id === parseInt(id));
    if (!comment) {
        return new Response(JSON.stringify("No comment found."), {
            headers: {'content-type': 'application/json'},
            status: 404
        },)
    }
    return Response.json(comment);

}

export async function PATCH(req: Request, {params}: { params: Promise<{ id: string }> }) {
    const {id} = await params;
    const body = await req.json()
    const {text} = body;

    const index = comments.findIndex(comment => comment.id === parseInt(id));
    comments[index].comment = text
    return Response.json(comments[index]);
}

export async function DELETE(req: Request, {params}: { params: Promise<{ id: string }> }) {
    const {id} = await params;

    const index = comments.findIndex((comment) => comment.id === parseInt(id));

    comments.splice(index, 1);

    return new Response(
        JSON.stringify("Comment deleted successfully."),
        {headers: {'content-type': 'application/json'}, status: 200},

    )

}
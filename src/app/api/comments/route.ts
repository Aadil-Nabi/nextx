import {comments} from "@/app/api/comments/data";

export async function GET(){
    return Response.json(comments)
}

export async function POST(req: Request  ){
    const comment = await req.json()
    const  newComment = {
        id: comments.length +1,
        comment: comment.text,
    };

    comments.push(newComment);

   return new Response(
       JSON.stringify(newComment),
       {headers:{"content-type":"application/json; charset=UTF-8"}, status:201}
   )
}
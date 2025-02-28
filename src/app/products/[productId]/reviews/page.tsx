import Link from "next/link";

export  default async function ProductReviews({params}:{params: Promise<{productId: string}>}){
    const {productId} = await params;
    const reviewId = "10"
    return <div>
        Reviews for Product {productId}
        <div className="px-4 py-5 sm:p-6">
            <Link href={`/products/${productId}/reviews/${reviewId}`}
                  className="bg-black text-zinc-50 rounded mr-4">Reviews</Link>
        </div>
    </div>
}
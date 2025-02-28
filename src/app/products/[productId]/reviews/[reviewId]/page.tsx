
import {notFound} from "next/navigation";

const company = 'Thales CM';
const copyright = "All rights reserved. Thales PS 2025";

function getRandomNumber(count: number) {
    return Math.floor(Math.random()*count)
}

export default async function ProductReviews({params, searchParams
}: {
    params: Promise<{ productId: string; reviewId: string }>;
    searchParams: Promise<{lang: string}> }) {

        const review = getRandomNumber(2);
        if (review === 1) {
            throw new Error("Error loading a review ")
        }

    const {productId, reviewId} = await params;
    const { lang  } = await searchParams;
        if (parseInt(reviewId)> 1000) {
         notFound()
        }
    return (<div className="container m-20">
            <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow-2xl">
                <div className="px-4 py-5 sm:px-6">
                    {company}
                </div>
                <div className="px-4 py-5 sm:p-6">
                    Review {reviewId} for Product {productId}
                   <h1> Reading in lang {lang}</h1>
                </div>
                <div className="px-4 py-4 sm:px-6">
                    {copyright}
                </div>
            </div>

        </div>

    )


}
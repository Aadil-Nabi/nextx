
type Props = {
    params: Promise<{productId: string}>
}

export  default async function  ProductDetails({params}:Props) {
    const  {productId} = await params;
    return <div>
        This is the product {productId}
    </div>
}
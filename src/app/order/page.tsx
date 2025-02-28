'use client'

import { useRouter } from "next/navigation"



export default function OrderPage(){
    const router = useRouter()
    const handleClick = ()=>{
        router.push("/products")
        router.push("/")
}

    return <>
         <div>
        Order Page
        
        </div>
        <button className="bg-black rounded-lg text-white m-2 p-2 font-light" onClick={handleClick}>Place Order</button>
    </>
}
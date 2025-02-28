'use client'

import { useRouter } from "next/navigation"
import { startTransition } from "react"

// useRouter and startTransition is used to reload from the server, not from client.

export default function ErrorBoundary({error, reset}:{error: Error, reset: ()=>void}){

    const router = useRouter()
    const reload = ()=>{
        startTransition(()=>{
            router.refresh();
            reset()
        })
    }

    return <>
    <div className="container mr-5">
        <p>{error.message}</p>
        <button onClick={()=> reload()} className="bg-black text-white p-2 rounded-lg">Try Again</button>
    </div>
    
    </>
}
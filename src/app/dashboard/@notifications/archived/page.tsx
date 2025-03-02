'use client'

import {redirect} from "next/navigation";

const  handleClick = ()=>{
    redirect("/dashboard");
}

export default function ArchivedPage(){
    return (
        <>
            <h1 className="text-black font-bold">Archived Notifications</h1>
        <ol className="breadcrumb mt-5">
            <li>message from aadil</li>
            <li>message from janu</li>
        </ol>
            <button
                className="bg-black text-white rounded p-2 m-2"
                onClick={() => {handleClick()}}
            >Latest Notifications</button>
        </>
    )

}
import "./globals.css";
import React from "react";
import {Metadata} from "next";

export const  metadata: Metadata = {
    title:{
        default: "My Next App",
        template: "%s | Next App"
    },
    description: "my-app",
}

export default function RootLayout({
   children,
    }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="h-full bg-white">
        <body className="h-full">

        {children}

        </body>
        </html>
    )
}

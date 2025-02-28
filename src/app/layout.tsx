import "./globals.css";
import React from "react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
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
        <html lang="en">
        <body>
        <Header/>
        {children}
        <Footer/>
        </body>
        </html>
    )
}

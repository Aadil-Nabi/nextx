"use client"
import React from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";

const navLinks= [
    {name: "Home", href: "/" },
    {name: "About", href: "/about" },
    {name:"Register", href: "/register" },
    {name: "Login", href: "/login" },
    {name: "forgot-password", href: "/forgot-password" },
]



export default function AuthLayout(
    {
     children,
     }: {
    children: React.ReactNode
}) {
    const pathname = usePathname();
    return (
        <div>
            {navLinks.map((link) => {
                const isActive = pathname === link.href || pathname.startsWith(link.href) &&  link.href !== "/";
                return (
                    <Link className={isActive? "font-bold mr-4 text-blue-700": "font-normal text-black"} href={link.href} key={link.name}>{link.name}</Link>
                );
            })}
            {children}
        </div>
    )
}

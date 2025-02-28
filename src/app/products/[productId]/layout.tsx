import "./globals.css";

// Root layout in plain JSX
// export default function RootLayout({ children }) {
//     return (
//         <html lang="en">
//         <body>{children}</body>
//         </html>
//     )
// }

export const  metadata = {
    title: "my-app",
    description: "my-app",
}

export default function RootLayout({
   children,
    }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    )
}

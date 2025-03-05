import React from "react";
// Root layout in plain JSX
// export default function RootLayout({ children }) {
//     return (
//         <html lang="en">
//         <body>{children}</body>
//         </html>
//     )
// }

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}

      <h1>Featured Products !!</h1>
    </>
  );
}

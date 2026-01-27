import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "SoterCare - Links",
    description: "SoterCare Links",
    icons: {
        icon: '/favicon.ico',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body suppressHydrationWarning>{children}</body>
        </html>
    );
}

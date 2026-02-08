import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Southern Silage, LLC",
    description: "Farm feeding equipment and supplies",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body style={{ margin: 0, padding: 0 }}>{children}</body>
        </html>
    );
}

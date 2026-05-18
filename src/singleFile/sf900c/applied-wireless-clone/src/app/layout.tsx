import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";

export const metadata: Metadata = {
  title: "SF900C-RX Remote Control Receiver, Long Range - Applied Wireless",
  description: "The SF900C-RX receivers, when used with SFT900C handheld transmitters, are designed to provide a quick and cost effective solution for a variety of wireless switching applications with range of up to 2+ miles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased" suppressHydrationWarning>
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}

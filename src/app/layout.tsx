import { Metadata } from "next";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/libs/utils";
import { Navbar } from "@/components/navbar";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Linktree",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("antialiased", inter.className)}>
        <Navbar />
        <main className="mt-16">{children}</main>
        <Toaster position="top-right" closeButton richColors />
      </body>
    </html>
  );
}

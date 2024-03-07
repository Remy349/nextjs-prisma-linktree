import { Metadata } from "next";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/libs/utils";
import { Navbar } from "@/components/dashboard/navbar";
import { Toaster } from "sonner";
import Provider from "@/context/provider";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Linktree",
    default: "Linktree",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("antialiased", inter.className)}>
        <Provider>
          <Navbar />
          <main className="mt-16">{children}</main>
        </Provider>
        <Toaster position="top-right" closeButton richColors />
      </body>
    </html>
  );
}

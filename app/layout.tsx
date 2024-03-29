import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/SideBar";
import { SessionProvider } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "./apis/auth/[...nextauth]";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
  }) {
  const session = await getServerSession(authOptions)
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          {!session ? (
          <Login/>
          ): (    
          <div className="flex">
            {/* Sidebar */}
            <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
              <SideBar />
            </div>

            {/* Client Provider - Notification  */}
            <div className="bg-[#343541] flex-1">{children}</div>
          </div>
          ) }
        </SessionProvider>
      </body>
    </html>
  );
}

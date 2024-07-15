import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import {
  ClerkProvider,
  SignIn,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs';

const jetbrains = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Code",
  description: "A Dev Web App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={jetbrains.className}>
          <SignedOut>
            <div className="flex justify-center items-center h-screen">
              <SignIn />
            </div>
          </SignedOut>
          <SignedIn>
            <UserButton />
            <NavBar />
            {children}
          </SignedIn>
        </body>
      </html>
    </ClerkProvider>
  );
}
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FPL - 🚀 Boost your Profile bio with ai powered + SEO based Gigs",
  description: "A website that helps User to get a template of the data filled by the user to login in a Freelancing Website , they can store the data herer and also can improvise it by using AI . This web app helps new users or New Freelancers to  make their Prolie look greate and well optimized for SEO and Look profession + no need to write the same content for different platform just  , fill once and get a template for others platforms. Just Fill form and  Click on genrate button and get a template for dresired Platform , and now you can copy and paste it on them. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} overflow-y-hidden ${geistMono.variable} dark bg-black text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";

import localFont from "next/font/local";
import { SessionProvider } from "next-auth/react";

import "./globals.css";
import ThemeProvider from "@/context/Theme";
import { auth } from "@/auth";

const inter = localFont({
  variable: "--font-inter",
  src: "./fonts/InterVF.ttf",
  weight: "100 200 300 400 500 600 700 800 900",
});

const spaceGroTestk = localFont({
  variable: "--font-space-grotesk",
  src: "./fonts/SpaceGroteskVF.ttf",
  weight: "300 400 500 600 700",
});

export const metadata: Metadata = {
  title: "Dev Overflow",
  description:
    "A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.",
  icons: {
    icon: "/favicon.ico",
  },
};

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const session = await auth();

  return (
    <html lang="en" suppressHydrationWarning>
      <SessionProvider session={session}>
        <body
          className={`${inter.className} ${spaceGroTestk.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </SessionProvider>
    </html>
  );
};

export default RootLayout;

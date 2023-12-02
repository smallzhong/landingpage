import "./globals.css";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className="ctp-latte dark:ctp-mocha bg-background bg-ctp-base">
    <div className="min-h-screen w-screen flex justify-center">
      <SessionProvider>
        {children}
      </SessionProvider>
    </div>
    </body>
    </html>
  );
}
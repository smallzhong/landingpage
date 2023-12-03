import "./globals.css";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    {/* THEME: you can switch to another variant by changing the class name below */}
    <body className="ctp-latte dark:ctp-mocha bg-background">
    <div className="min-h-screen w-screen flex justify-center">
      <SessionProvider>
        {children}
      </SessionProvider>
    </div>
    </body>
    </html>
  );
}
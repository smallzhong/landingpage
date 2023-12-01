import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className="ctp-latte dark:ctp-mocha bg-background bg-ctp-base">{children}</body>
    </html>
  );
}
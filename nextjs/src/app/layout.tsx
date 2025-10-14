import "./globals.css";
import Navbar from "./components/layout/Navbar";

export const metadata = {
  title: "Next.js App",
  description: "Simple Next.js App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="p-6">{children}</main>
      </body>
    </html>
  )
}
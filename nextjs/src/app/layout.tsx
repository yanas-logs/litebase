import "./styles/globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

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
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex items-center justify-center bg-gray-50">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

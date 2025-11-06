import type { LayoutProps } from "rwsdk/router";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "../components/Footer";

export function AppLayout({ children, requestInfo }: LayoutProps) {
  return (
    <div className="app">
      <header>
        <Navbar />
        {requestInfo && (
          <div style={{ color: "#888", fontSize: "0.9rem", marginTop: "4px" }}>
            {new URL(requestInfo.request.url).pathname}
          </div>
        )}
      </header>

      <main style={{ padding: "2rem" }}>{children}</main>

      <Footer/>
    </div>
  );
}

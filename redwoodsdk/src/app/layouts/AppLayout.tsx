import type { LayoutProps } from "rwsdk/router";
import { Navbar } from "@/app/components/Navbar";

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

      <footer
        style={{
          marginTop: "2rem",
          textAlign: "center",
          borderTop: "1px solid #333",
          padding: "1rem",
          color: "#aaa",
        }}
      >
        &copy; {new Date().getFullYear()} RedwoodSDK
      </footer>
    </div>
  );
}

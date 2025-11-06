'use client'

import * as React from "react";

export default function TermsPage() {
  return (
    <div style={{ padding: "2rem", lineHeight: "1.8" }}>
      <h1>Terms of Service</h1>
      <p>
        Welcome to <strong>RedwoodSDK</strong>. By using our website or
        services, you agree to the following terms and conditions.
      </p>

      <h2>1. Use of the Service</h2>
      <p>
        You agree to use this service in compliance with all applicable laws and
        not to use it for any unlawful activities.
      </p>

      <h2>2. Limitation of Liability</h2>
      <p>
        RedwoodSDK is not responsible for any damages resulting from the use or
        inability to use our services.
      </p>

      <h2>3. Modifications</h2>
      <p>
        We reserve the right to modify or discontinue our service at any time,
        with or without notice.
      </p>

      <p style={{ marginTop: "2rem", color: "#888" }}>
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
}

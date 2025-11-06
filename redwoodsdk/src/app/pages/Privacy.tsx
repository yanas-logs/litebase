'use client'

import * as React from "react";

export default function PrivacyPage() {
  return (
    <div style={{ padding: "2rem", lineHeight: "1.8" }}>
      <h1>Privacy Policy</h1>
      <p>
        At <strong>RedwoodSDK</strong>, your privacy is important to us. This
        policy explains how we collect, use, and protect your personal
        information.
      </p>

      <h2>1. Information We Collect</h2>
      <p>
        We may collect basic usage data, such as your browser type, IP address,
        and interaction with our website, to improve our services.
      </p>

      <h2>2. How We Use Information</h2>
      <p>
        Your information helps us enhance user experience and provide better
        performance and security across our platform.
      </p>

      <h2>3. Data Security</h2>
      <p>
        We take reasonable steps to protect your information but cannot
        guarantee absolute security.
      </p>

      <p style={{ marginTop: "2rem", color: "#888" }}>
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
}

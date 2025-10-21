"use client";

import React from "react";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-center"
      style={{ backgroundImage: "url('/image-cozy-library.webp')" }}
    >
      {/* Overlay more darker for readable */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Main Content */}
      <div className="relative z-10 text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Welcome to Our Next.js App
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200">
          Building modern web applications with ease and efficiency.
        </p>
        <Button variant="primary" size="lg">
          Get Started
        </Button>
      </div>
    </section>
  );
}

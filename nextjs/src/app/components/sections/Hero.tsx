"use client";

import React from "react";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="bg-gray-100 py-25">
        <div className="container mx-auto px-4 text-center"> 
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Welcome to Our Next.js App
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700">
                Building modern web applications with ease and efficiency.
            </p>
            <Button variant="primary" size="lg">
                Get Started
            </Button>
        </div>
    </section>
  );
}
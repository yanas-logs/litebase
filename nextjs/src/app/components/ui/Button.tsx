"use client";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "primary" | "secondary" | "outline" | "ghost" | "danger";
    size?: "sm" | "md" | "lg";
    loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    variant = "default",
    size = "md",
    loading = false,
    children,
    className = "",
    ...props
}) => {
    // 🧩 Base styles
    let base =
        "inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50";

    // 🎨 Variant
    const variants: Record<string, string> = {
        default: "bg-gray-200 hover:bg-gray-300 text-gray-900",
        primary: "bg-blue-600 hover:bg-blue-700 text-white",
        secondary: "bg-gray-800 hover:bg-gray-900 text-white",
        outline: "border border-gray-300 text-gray-800 hover:bg-gray-100",
        ghost: "bg-transparent hover:bg-gray-100",
        danger: "bg-red-600 hover:bg-red-700 text-white",
    };

    // 📏 Size
    const sizes: Record<string, string> = {
        sm: "text-sm px-3 py-1.5",
        md: "text-base px-4 py-2",
        lg: "text-lg px-6 py-3",
    };

    // 🧠 Manual Merge Tailwind
    const combinedClass = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

    return (
        <button className={combinedClass} disabled={loading || props.disabled} {...props}>
            {loading ? (
                <span className="flex items-center gap-2">
                    <svg
                        className="animate-spin h-4 w-4 text-current"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        ></circle>
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
                        ></path>
                    </svg>
                    Loading...
                </span>
            ) : (
                children
            )}
        </button>
    );
};

export default Button;

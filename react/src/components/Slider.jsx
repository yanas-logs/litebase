import { useState, useEffect } from "react";
import "./css/Slider.css";

export const Slider = () => {
    const [current, setCurrent] = useState(0);
    const images = [];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="slider">Slider</div>
    )
}

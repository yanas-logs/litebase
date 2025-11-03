import React from "react";
import styles from "./Navbar.module.css";

export const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>RedwoodSDK</div>
            <ul className={styles.navLinks}>
                <li><a href="/">Home</a></li>
                <li><a href="#">Docs</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    );
};

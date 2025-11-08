import React from 'react'
import { Link } from '@tanstack/react-router'

export function Navbar() {
    return (
        <nav style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'center',
            background: '#222',
            color: 'white',
            padding: '1rem 2rem',
        }}>
            <Link to="/" style={linkStyle}>Home</Link>
            <Link to="/about" style={linkStyle}>About</Link>
            <Link to="/contact" style={linkStyle}>Contact</Link>
        </nav>
    )
}

const linkStyle: React.CSSProperties = {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 500,
}

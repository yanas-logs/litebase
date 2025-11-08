import { Link } from '@tanstack/react-router'

export function Navbar() {
    return (
        <nav style={{
            display: 'flex',
            gap: '1rem',
            padding: '1rem',
            background: '#222',
            color: 'white'
        }}>
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
            <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
        </nav>
    )
}

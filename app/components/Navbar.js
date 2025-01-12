// app/components/Navbar.js
import Link from 'next/link';
import '../styles/navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/meals">Meals</Link></li>
        <li><Link href="/meals/ranking">Ranking</Link></li>
        <li><Link href="/meals/share">Share a Meal</Link></li>
        <li><Link href="/community">Community</Link></li>
      </ul>
    </nav>
  );
}

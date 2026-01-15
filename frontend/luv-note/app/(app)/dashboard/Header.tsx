"use client"

import React from 'react'
import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">LuvNote</div>
        <nav className="nav-links">
          <ul>
            <li><Link href="/dashboard">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/features">Features</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: '01 Landing' },
  { href: '/dashboard', label: '02 Dashboard' },
  { href: '/ask-builder', label: '03 Ask Builder' },
  { href: '/session', label: '04 Session' },
  { href: '/inbox', label: '05 Guide Inbox' },
  { href: '/impact', label: '06 Impact' },
]

export default function DevNav() {
  const pathname = usePathname()

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: 'var(--forest)',
        padding: '0 32px',
        display: 'flex',
        alignItems: 'center',
        gap: 0,
        height: '52px',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
      }}
    >
      <span
        style={{
          fontFamily: '"Playfair Display", serif',
          color: 'var(--cream)',
          fontSize: '17px',
          fontWeight: 700,
          marginRight: '32px',
          letterSpacing: '-0.3px',
          flexShrink: 0,
        }}
      >
        Bridge<span style={{ color: 'var(--amber)' }}>Up</span>
      </span>

      <div style={{ display: 'flex', gap: '2px', overflowX: 'auto', flex: 1 }}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            style={{
              color:
                pathname === link.href
                  ? 'var(--cream)'
                  : 'rgba(245,240,232,0.65)',
              textDecoration: 'none',
              fontSize: '12px',
              fontWeight: 500,
              padding: '6px 12px',
              borderRadius: '6px',
              whiteSpace: 'nowrap',
              background:
                pathname === link.href
                  ? 'rgba(255,255,255,0.08)'
                  : 'transparent',
              transition: 'all 0.2s',
              letterSpacing: '0.2px',
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <span
        style={{
          background: 'var(--amber)',
          color: 'var(--forest)',
          fontSize: '10px',
          fontWeight: 700,
          padding: '3px 8px',
          borderRadius: '20px',
          letterSpacing: '0.5px',
          textTransform: 'uppercase',
          flexShrink: 0,
        }}
      >
        v1.0
      </span>
    </nav>
  )
}

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/#how-it-works', label: 'How It Works' },
  { href: '/guides', label: 'Find a Guide' },
  { href: '/#stories', label: 'Stories' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const isLanding = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const isDashboardPage = ['/dashboard','/ask-builder','/session','/inbox','/impact','/guides'].some(p => pathname.startsWith(p))

  if (isDashboardPage) return null

  const navBg = isLanding
    ? scrolled ? 'rgba(245,240,232,0.96)' : 'transparent'
    : 'rgba(245,240,232,0.96)'

  const linkColor = isLanding && !scrolled ? 'rgba(245,240,232,0.9)' : 'var(--earth)'
  const logoColor = isLanding && !scrolled ? 'white' : 'var(--forest)'

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 900,
          height: '72px',
          background: navBg,
          backdropFilter: scrolled || !isLanding ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled || !isLanding ? 'blur(16px)' : 'none',
          boxShadow: scrolled || !isLanding ? '0 1px 0 rgba(28,58,46,0.1)' : 'none',
          transition: 'background 0.3s ease, box-shadow 0.3s ease',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            height: '100%',
            padding: '0 24px',
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', flexShrink: 0 }}>
            <span
              style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: '22px',
                fontWeight: 700,
                color: logoColor,
                letterSpacing: '-0.5px',
                transition: 'color 0.3s',
              }}
            >
              Bridge<span style={{ color: 'var(--amber)' }}>Up</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: '4px', flex: 1 }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: linkColor,
                  fontSize: '14px',
                  fontWeight: 500,
                  padding: '8px 14px',
                  borderRadius: '8px',
                  transition: 'all 0.2s',
                  opacity: 0.85,
                }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.background = 'rgba(28,58,46,0.07)' }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.background = 'transparent' }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginLeft: 'auto' }}>
            <Link
              href="/signin"
              style={{
                color: linkColor,
                fontSize: '14px',
                fontWeight: 600,
                padding: '9px 18px',
                borderRadius: '10px',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(28,58,46,0.07)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent' }}
            >
              Sign in
            </Link>
            <Link
              href="/signup"
              className="btn btn-primary btn-sm"
              style={{ textDecoration: 'none' }}
            >
              Get started
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="hide-desktop"
            onClick={() => setMobileOpen(true)}
            style={{
              marginLeft: 'auto',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              borderRadius: '8px',
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
            }}
            aria-label="Open menu"
          >
            {[0,1,2].map((i) => (
              <span
                key={i}
                style={{
                  display: 'block',
                  width: i === 1 ? '18px' : '24px',
                  height: '2px',
                  background: logoColor,
                  borderRadius: '1px',
                  transition: 'width 0.2s',
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`mobile-nav-overlay ${mobileOpen ? 'open' : ''}`}
        style={{ zIndex: 950 }}
      >
        {/* Close button */}
        <button
          onClick={() => setMobileOpen(false)}
          style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            background: 'rgba(255,255,255,0.1)',
            border: 'none',
            cursor: 'pointer',
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '20px',
          }}
          aria-label="Close menu"
        >
          ✕
        </button>

        {/* Mobile logo */}
        <div style={{ marginBottom: '48px' }}>
          <span style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: '26px',
            fontWeight: 700,
            color: 'white',
          }}>
            Bridge<span style={{ color: 'var(--amber)' }}>Up</span>
          </span>
        </div>

        {/* Mobile nav links */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                color: 'rgba(245,240,232,0.85)',
                fontSize: '24px',
                fontWeight: 600,
                fontFamily: '"Playfair Display", serif',
                padding: '12px 0',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                display: 'block',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile CTAs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '32px' }}>
          <Link
            href="/signup"
            className="btn btn-primary"
            onClick={() => setMobileOpen(false)}
            style={{ textDecoration: 'none', textAlign: 'center', padding: '16px', fontSize: '16px' }}
          >
            Get started — it&apos;s free
          </Link>
          <Link
            href="/signin"
            className="btn btn-outline-white"
            onClick={() => setMobileOpen(false)}
            style={{ textDecoration: 'none', textAlign: 'center', padding: '15px', fontSize: '16px' }}
          >
            Sign in
          </Link>
        </div>
      </div>
    </>
  )
}

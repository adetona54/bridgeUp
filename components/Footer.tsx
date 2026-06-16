import Link from 'next/link'

const footerLinks = {
  Product: [
    { label: 'How it works', href: '/#how-it-works' },
    { label: 'Find a guide', href: '/guides' },
    { label: 'Become a guide', href: '/signup?role=guide' },
    { label: 'Pricing', href: '/#pricing' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '/careers' },
    { label: 'Press', href: '/press' },
  ],
  Support: [
    { label: 'Help center', href: '/help' },
    { label: 'Community', href: '/community' },
    { label: 'Contact us', href: '/contact' },
    { label: 'Status', href: '/status' },
  ],
  Legal: [
    { label: 'Privacy policy', href: '/privacy' },
    { label: 'Terms of service', href: '/terms' },
    { label: 'Cookie policy', href: '/cookies' },
  ],
}

export default function Footer() {
  return (
    <footer style={{ background: 'var(--forest)', color: 'rgba(245,240,232,0.75)' }}>
      {/* Main footer */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '72px 24px 48px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '48px',
        }}
      >
        {/* Brand column */}
        <div style={{ gridColumn: '1 / -1', maxWidth: '320px' }}>
          <span style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: '24px',
            fontWeight: 700,
            color: 'white',
          }}>
            Bridge<span style={{ color: 'var(--amber)' }}>Up</span>
          </span>
          <p style={{ marginTop: '16px', fontSize: '14px', lineHeight: 1.7, color: 'rgba(245,240,232,0.6)' }}>
            Connecting Africa&apos;s next generation of leaders with the professionals who&apos;ve walked the path before them. Real conversations. Real growth.
          </p>
          {/* Social links */}
          <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
            {[
              { label: 'Twitter', icon: '𝕏' },
              { label: 'LinkedIn', icon: 'in' },
              { label: 'Instagram', icon: '◉' },
            ].map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '9px',
                  background: 'rgba(255,255,255,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'rgba(245,240,232,0.7)',
                  fontSize: s.icon === 'in' ? '13px' : '14px',
                  fontWeight: 700,
                  transition: 'all 0.2s',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.15)'
                  e.currentTarget.style.color = 'white'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
                  e.currentTarget.style.color = 'rgba(245,240,232,0.7)'
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([group, links]) => (
          <div key={group}>
            <h4 style={{
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '1px',
              textTransform: 'uppercase',
              color: 'rgba(245,240,232,0.45)',
              marginBottom: '16px',
              fontFamily: 'Inter, sans-serif',
            }}>
              {group}
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    style={{
                      color: 'rgba(245,240,232,0.65)',
                      fontSize: '14px',
                      transition: 'color 0.2s',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'white' }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(245,240,232,0.65)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '20px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <p style={{ fontSize: '13px', color: 'rgba(245,240,232,0.45)' }}>
            © 2026 BridgeUp Technologies Ltd. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '4px' }}>
            {['🇳🇬', '🇬🇭', '🇰🇪', '🇿🇦', '🇪🇹', '🇷🇼'].map((flag) => (
              <span key={flag} style={{ fontSize: '18px' }}>{flag}</span>
            ))}
          </div>
          <p style={{ fontSize: '13px', color: 'rgba(245,240,232,0.35)' }}>
            Made with ♥ for Africa
          </p>
        </div>
      </div>
    </footer>
  )
}

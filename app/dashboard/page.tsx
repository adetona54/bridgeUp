'use client'

import Link from 'next/link'

const guides = [
  {
    letter: 'T',
    bg: 'linear-gradient(135deg,#1C3A2E,#2D5A40)',
    name: 'Tunde Adebayo',
    role: 'VP Eng · Fintech Startup',
    bio: '"Open to early-stage builders with sharp questions."',
    tags: ['Fintech'],
    slots: '2 slots',
  },
  {
    letter: 'C',
    bg: 'linear-gradient(135deg,#5B3A8A,#3D2560)',
    name: 'Chisom Eze',
    role: 'Product Lead · Paystack',
    bio: '"Especially love talking to engineers who want to pivot to PM."',
    tags: ['Product'],
    slots: '4 slots',
  },
  {
    letter: 'A',
    bg: 'linear-gradient(135deg,#1A5276,#0E2E42)',
    name: 'Amina Bello',
    role: 'Software Engineer · Google',
    bio: '"Happy to review code, discuss FAANG paths, or just answer questions."',
    tags: ['Engineering'],
    slots: '1 slot',
  },
  {
    letter: 'N',
    bg: 'linear-gradient(135deg,#884EA0,#6C3483)',
    name: 'Ngozi Osei',
    role: 'Founder · HealthTech',
    bio: '"Building for Africa is different. Come curious."',
    tags: ['HealthTech'],
    slots: null,
    saved: true,
  },
]

export default function DashboardPage() {
  return (
    <div style={{ background: 'var(--cream)', paddingTop: '52px', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '40px' }}>

        {/* App shell */}
        <div
          style={{
            background: 'var(--cream)',
            borderRadius: '32px',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-lift)',
            border: '1px solid rgba(28,58,46,0.14)',
            display: 'flex',
            minHeight: '640px',
          }}
        >
          {/* Sidebar */}
          <aside
            style={{
              width: '220px',
              background: 'var(--forest)',
              padding: '28px 0',
              display: 'flex',
              flexDirection: 'column',
              flexShrink: 0,
            }}
          >
            <div
              style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: '20px',
                fontWeight: 700,
                color: 'var(--cream)',
                padding: '0 24px 24px',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              Bridge<span style={{ color: 'var(--amber)' }}>Up</span>
            </div>

            <nav style={{ padding: '16px 12px', flex: 1 }}>
              {[
                { icon: '🃏', label: 'My Feed', active: true, href: '/dashboard' },
                { icon: '📅', label: 'Sessions', href: '/session' },
                { icon: '📬', label: 'Requests', href: '#' },
                { icon: '🌱', label: 'Portfolio', href: '#' },
                { icon: '💬', label: 'Starters', href: '#' },
                { icon: '🤝', label: 'Warm Intros', href: '#' },
              ].map((item) => (
                <Link key={item.label} href={item.href || '#'} style={{ textDecoration: 'none' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '10px 12px',
                      borderRadius: '12px',
                      color: item.active ? 'var(--amber)' : 'rgba(245,240,232,0.6)',
                      fontSize: '13px',
                      fontWeight: 500,
                      cursor: 'pointer',
                      marginBottom: '2px',
                      background: item.active ? 'rgba(232,168,48,0.15)' : 'transparent',
                    }}
                  >
                    <span style={{ fontSize: '16px', width: '20px', textAlign: 'center' }}>
                      {item.icon}
                    </span>
                    {item.label}
                  </div>
                </Link>
              ))}
            </nav>

            <div
              style={{
                padding: '16px 16px 0',
                borderTop: '1px solid rgba(255,255,255,0.08)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <div
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg,var(--amber),#C8881A)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--forest)',
                  fontWeight: 800,
                  fontSize: '13px',
                  flexShrink: 0,
                }}
              >
                A
              </div>
              <div style={{ overflow: 'hidden' }}>
                <strong
                  style={{
                    display: 'block',
                    fontSize: '12px',
                    color: 'var(--cream)',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  Adaeze Okonkwo
                </strong>
                <span style={{ fontSize: '11px', color: 'rgba(245,240,232,0.45)' }}>
                  Seeker · UNILAG CS
                </span>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <main style={{ flex: 1, padding: '32px 36px', overflowY: 'auto' }}>
            {/* Header */}
            <div style={{ marginBottom: '28px' }}>
              <h2
                style={{
                  fontFamily: '"Playfair Display", serif',
                  fontSize: '26px',
                  fontWeight: 700,
                  color: 'var(--forest)',
                }}
              >
                Good morning, Adaeze ✦
              </h2>
              <p style={{ fontSize: '14px', color: 'var(--earth-light)', marginTop: '4px' }}>
                You have 3 new matches and a session tomorrow at 10am.
              </p>
            </div>

            {/* Stats */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3,1fr)',
                gap: '14px',
                marginBottom: '28px',
              }}
            >
              {[
                { label: 'Sessions this quarter', value: '2', sub: 'Goal: 2 ✓ on track' },
                { label: 'Connections made', value: '5', sub: 'Across 3 industries' },
                { label: 'Requests accepted', value: '60%', sub: 'Above platform avg (40%)' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    background: 'white',
                    borderRadius: '20px',
                    padding: '18px 20px',
                    border: '1px solid rgba(28,58,46,0.08)',
                  }}
                >
                  <div
                    style={{
                      fontSize: '11px',
                      fontWeight: 600,
                      color: 'var(--earth-light)',
                      letterSpacing: '0.4px',
                      textTransform: 'uppercase',
                      marginBottom: '6px',
                    }}
                  >
                    {stat.label}
                  </div>
                  <div
                    style={{
                      fontSize: '28px',
                      fontWeight: 700,
                      color: 'var(--forest)',
                      fontFamily: '"Playfair Display", serif',
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--earth-light)', marginTop: '4px' }}>
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>

            {/* Feed */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '16px',
              }}
            >
              <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--forest)' }}>
                Today&apos;s Connections
              </h3>
              <span style={{ fontSize: '12px', color: 'var(--earth-light)' }}>
                Refreshes in 6h · 3 of 5 new
              </span>
            </div>

            <div
              style={{
                display: 'flex',
                gap: '14px',
                overflowX: 'auto',
                paddingBottom: '8px',
              }}
            >
              {guides.map((guide) => (
                <div
                  key={guide.name}
                  className="feed-card"
                  style={{
                    background: 'white',
                    borderRadius: '20px',
                    padding: '20px',
                    minWidth: '220px',
                    border: guide.saved
                      ? '1px dashed rgba(28,58,46,0.14)'
                      : '1px solid rgba(28,58,46,0.08)',
                    boxShadow: 'var(--shadow-card)',
                    flexShrink: 0,
                    opacity: guide.saved ? 0.6 : 1,
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      marginBottom: '12px',
                      background: guide.bg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: '16px',
                      color: 'var(--cream)',
                    }}
                  >
                    {guide.letter}
                  </div>
                  <h4 style={{ fontSize: '14px', fontWeight: 600, color: 'var(--earth)' }}>
                    {guide.name}
                  </h4>
                  <div
                    style={{
                      fontSize: '11px',
                      color: 'var(--earth-light)',
                      marginTop: '2px',
                      marginBottom: '10px',
                    }}
                  >
                    {guide.role}
                  </div>
                  <div
                    style={{
                      fontSize: '12px',
                      color: 'var(--earth-light)',
                      lineHeight: 1.5,
                      marginBottom: '12px',
                    }}
                  >
                    {guide.bio}
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      gap: '4px',
                      flexWrap: 'wrap',
                      marginBottom: '10px',
                    }}
                  >
                    {guide.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          background: 'rgba(28,58,46,0.08)',
                          color: 'var(--forest)',
                          fontSize: '10px',
                          fontWeight: 600,
                          padding: '4px 10px',
                          borderRadius: '20px',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                    {guide.slots && (
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          background: 'rgba(232,168,48,0.15)',
                          color: '#8B6000',
                          fontSize: '10px',
                          fontWeight: 600,
                          padding: '4px 10px',
                          borderRadius: '20px',
                        }}
                      >
                        {guide.slots}
                      </span>
                    )}
                    {guide.saved && (
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          background: 'rgba(28,58,46,0.08)',
                          color: 'var(--earth-light)',
                          fontSize: '10px',
                          fontWeight: 600,
                          padding: '4px 10px',
                          borderRadius: '20px',
                        }}
                      >
                        Saved
                      </span>
                    )}
                  </div>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <Link href="/ask-builder" style={{ flex: 1 }}>
                      <button
                        style={{
                          width: '100%',
                          padding: '7px',
                          borderRadius: '8px',
                          border: 'none',
                          cursor: 'pointer',
                          fontSize: '12px',
                          fontWeight: 600,
                          background: 'var(--forest)',
                          color: 'var(--cream)',
                        }}
                      >
                        Request
                      </button>
                    </Link>
                    <button
                      style={{
                        flex: 1,
                        padding: '7px',
                        borderRadius: '8px',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '12px',
                        fontWeight: 600,
                        background: 'rgba(28,58,46,0.08)',
                        color: 'var(--earth-light)',
                      }}
                    >
                      {guide.saved ? 'Remove' : 'Skip'}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Upcoming session */}
            <div
              style={{
                background: 'linear-gradient(135deg,var(--forest),var(--moss))',
                borderRadius: '20px',
                padding: '18px 22px',
                marginTop: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
              }}
            >
              <div style={{ fontSize: '28px' }}>📅</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--cream)' }}>
                  Session tomorrow — Tunde Adebayo
                </div>
                <div
                  style={{
                    fontSize: '12px',
                    color: 'rgba(245,240,232,0.65)',
                    marginTop: '2px',
                  }}
                >
                  Thursday, 10:00am · 30 min · Fintech product feedback
                </div>
              </div>
              <Link href="/session">
                <button
                  style={{
                    background: 'var(--amber)',
                    color: 'var(--forest)',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '12px',
                    fontWeight: 700,
                    padding: '9px 16px',
                    borderRadius: '12px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Prepare →
                </button>
              </Link>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

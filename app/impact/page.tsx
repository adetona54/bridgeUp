'use client'

import Link from 'next/link'

const stats = [
  { num: '12', label: 'Sessions completed', change: '↑ 4 from last quarter' },
  { num: '9', label: 'Unique professionals helped', change: 'Across 4 industries' },
  { num: '4', label: 'States represented', change: 'Lagos, Abuja, Ibadan, PH' },
  { num: '92%', label: 'Confidence increase reported', change: 'By seekers post-session' },
]

const endorsements = [
  { count: '9×', label: 'Gave actionable feedback' },
  { count: '7×', label: 'Generous with their time' },
  { count: '6×', label: 'Clear communicator' },
  { count: '5×', label: 'Challenged my thinking' },
  { count: '4×', label: 'Made me feel capable' },
  { count: '3×', label: 'Connected me to someone else' },
]

const geoData = [
  { city: 'Lagos', pct: 65 },
  { city: 'Abuja', pct: 20 },
  { city: 'Ibadan', pct: 10 },
  { city: 'Port Harcourt', pct: 5 },
]

export default function ImpactPage() {
  return (
    <div
      style={{
        background: 'rgba(28,58,46,0.03)',
        paddingTop: '52px',
        minHeight: '100vh',
      }}
    >
      <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '40px' }}>

        {/* Back link */}
        <div style={{ marginBottom: '24px' }}>
          <Link href="/inbox">
            <button
              style={{
                background: 'transparent',
                color: 'var(--earth-light)',
                border: 'none',
                cursor: 'pointer',
                fontSize: '13px',
                padding: 0,
              }}
            >
              ← Back to Guide Inbox
            </button>
          </Link>
        </div>

        {/* Impact shell */}
        <div
          style={{
            background: 'white',
            borderRadius: '32px',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-lift)',
            border: '1px solid rgba(28,58,46,0.14)',
          }}
        >
          {/* Header */}
          <div
            style={{
              background: 'var(--forest)',
              padding: '32px 36px',
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
            }}
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg,var(--amber),#C8881A)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '22px',
                fontWeight: 800,
                color: 'var(--forest)',
                border: '3px solid rgba(255,255,255,0.2)',
                flexShrink: 0,
              }}
            >
              T
            </div>
            <div>
              <h2
                style={{
                  fontFamily: '"Playfair Display", serif',
                  color: 'var(--cream)',
                  fontSize: '22px',
                }}
              >
                Tunde Adebayo
              </h2>
              <p style={{ color: 'rgba(245,240,232,0.65)', fontSize: '13px', marginTop: '2px' }}>
                VP Engineering · Your giving-back record
              </p>
            </div>
            <div style={{ marginLeft: 'auto' }}>
              <span
                style={{
                  background: 'rgba(232,168,48,0.15)',
                  color: 'var(--amber)',
                  fontSize: '12px',
                  fontWeight: 700,
                  padding: '6px 14px',
                  borderRadius: '20px',
                }}
              >
                Q2 2026
              </span>
            </div>
          </div>

          {/* Stats row */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4,1fr)',
              borderBottom: '1px solid rgba(28,58,46,0.14)',
            }}
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                style={{
                  padding: '24px 28px',
                  textAlign: 'center',
                  borderRight:
                    i < stats.length - 1 ? '1px solid rgba(28,58,46,0.14)' : 'none',
                }}
              >
                <div
                  style={{
                    fontFamily: '"Playfair Display", serif',
                    fontSize: '36px',
                    fontWeight: 700,
                    color: 'var(--forest)',
                    lineHeight: 1,
                  }}
                >
                  {stat.num}
                </div>
                <div
                  style={{
                    fontSize: '12px',
                    color: 'var(--earth-light)',
                    marginTop: '6px',
                    fontWeight: 500,
                  }}
                >
                  {stat.label}
                </div>
                <div
                  style={{
                    fontSize: '11px',
                    color: 'var(--moss)',
                    fontWeight: 600,
                    marginTop: '3px',
                  }}
                >
                  {stat.change}
                </div>
              </div>
            ))}
          </div>

          {/* Body */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
            }}
          >
            {/* Left column */}
            <div
              style={{
                padding: '28px',
                borderRight: '1px solid rgba(28,58,46,0.14)',
              }}
            >
              <h3
                style={{
                  fontSize: '14px',
                  fontWeight: 700,
                  color: 'var(--forest)',
                  marginBottom: '16px',
                }}
              >
                How people describe you
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
                {endorsements.map((e) => (
                  <div
                    key={e.label}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      background: 'rgba(28,58,46,0.08)',
                      color: 'var(--forest)',
                      fontSize: '12px',
                      fontWeight: 500,
                      padding: '6px 14px',
                      borderRadius: '20px',
                    }}
                  >
                    <span style={{ fontWeight: 800, color: 'var(--moss)' }}>{e.count}</span>{' '}
                    {e.label}
                  </div>
                ))}
              </div>

              <h3
                style={{
                  fontSize: '14px',
                  fontWeight: 700,
                  color: 'var(--forest)',
                  marginBottom: '16px',
                }}
              >
                Geographic reach
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {geoData.map((geo) => (
                  <div
                    key={geo.city}
                    style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
                  >
                    <div
                      style={{
                        fontSize: '12px',
                        color: 'var(--earth)',
                        width: '100px',
                        flexShrink: 0,
                      }}
                    >
                      {geo.city}
                    </div>
                    <div
                      style={{
                        flex: 1,
                        height: '6px',
                        background: 'rgba(28,58,46,0.14)',
                        borderRadius: '3px',
                        overflow: 'hidden',
                      }}
                    >
                      <div
                        style={{
                          height: '100%',
                          width: `${geo.pct}%`,
                          background: 'linear-gradient(90deg,var(--forest),var(--moss))',
                          borderRadius: '3px',
                        }}
                      />
                    </div>
                    <div
                      style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        color: 'var(--forest)',
                        width: '32px',
                        textAlign: 'right',
                        flexShrink: 0,
                      }}
                    >
                      {geo.pct}%
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column */}
            <div style={{ padding: '28px' }}>
              <h3
                style={{
                  fontSize: '14px',
                  fontWeight: 700,
                  color: 'var(--forest)',
                  marginBottom: '6px',
                }}
              >
                Your &ldquo;Giving Back&rdquo; card
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--earth-light)', marginBottom: '0' }}>
                Share this on LinkedIn or your website — one tap to export as an image.
              </p>

              {/* Sharing card */}
              <div
                style={{
                  background: 'var(--forest)',
                  borderRadius: '20px',
                  padding: '20px',
                  marginTop: '16px',
                }}
              >
                <div
                  style={{
                    fontSize: '10px',
                    fontWeight: 700,
                    color: 'var(--amber)',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    marginBottom: '8px',
                  }}
                >
                  BridgeUp · Q2 2026
                </div>
                <h4
                  style={{
                    fontFamily: '"Playfair Display", serif',
                    color: 'var(--cream)',
                    fontSize: '16px',
                    marginBottom: '4px',
                  }}
                >
                  Tunde Adebayo
                </h4>
                <p style={{ color: 'rgba(245,240,232,0.65)', fontSize: '12px' }}>
                  VP Engineering · Giving back to the next generation of African tech talent
                </p>
                <div style={{ display: 'flex', gap: '20px', marginTop: '14px', marginBottom: '14px' }}>
                  {[
                    { num: '12', label: 'sessions' },
                    { num: '9', label: 'professionals' },
                    { num: '4', label: 'states' },
                  ].map((s) => (
                    <div key={s.label}>
                      <strong
                        style={{
                          display: 'block',
                          fontSize: '22px',
                          fontWeight: 700,
                          color: 'var(--amber)',
                          fontFamily: '"Playfair Display", serif',
                          lineHeight: 1,
                        }}
                      >
                        {s.num}
                      </strong>
                      <span style={{ fontSize: '11px', color: 'rgba(245,240,232,0.5)' }}>
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>
                <div
                  style={{
                    fontSize: '11px',
                    fontStyle: 'italic',
                    color: 'rgba(245,240,232,0.5)',
                    borderTop: '1px solid rgba(255,255,255,0.08)',
                    paddingTop: '10px',
                  }}
                >
                  &ldquo;Gave actionable feedback · Clear communicator · Generous with their time&rdquo;
                </div>
              </div>

              <button
                style={{
                  marginTop: '12px',
                  width: '100%',
                  background: 'transparent',
                  color: 'var(--forest)',
                  border: '1.5px solid rgba(28,58,46,0.14)',
                  cursor: 'pointer',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                  fontWeight: 500,
                  padding: '9px 18px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                }}
              >
                📤 Export as image
              </button>

              {/* Next quarter goal */}
              <div
                style={{
                  marginTop: '24px',
                  padding: '16px',
                  background: 'rgba(232,168,48,0.08)',
                  borderRadius: '12px',
                  border: '1px solid rgba(232,168,48,0.2)',
                }}
              >
                <div
                  style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    color: '#8B6000',
                    marginBottom: '6px',
                  }}
                >
                  Q3 2026 Goal
                </div>
                <p style={{ fontSize: '13px', color: 'var(--earth-light)' }}>
                  You&apos;re on track to reach{' '}
                  <strong style={{ color: 'var(--earth)' }}>15 professionals</strong> next quarter.
                  Consider adding one Group Office Hours session to multiply your reach.
                </p>
                <button
                  style={{
                    marginTop: '10px',
                    background: 'var(--amber)',
                    color: 'var(--forest)',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '12px',
                    fontWeight: 700,
                    padding: '8px 16px',
                    borderRadius: '8px',
                  }}
                >
                  Schedule Group Office Hours →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

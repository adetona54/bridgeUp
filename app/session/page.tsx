'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const agendaItems = [
  { label: 'Introductions', time: '0 – 3 min', status: 'done' },
  { label: 'Adaeze shares one-pager', time: '3 – 8 min', status: 'done' },
  { label: 'Tunde\'s feedback', time: '8 – 22 min', status: 'active', now: true },
  { label: 'Your questions', time: '22 – 28 min', status: 'pending' },
  { label: 'Next steps & close', time: '28 – 30 min', status: 'pending' },
]

const endorsements = [
  'Clear communicator',
  'Gave actionable feedback',
  'Generous with their time',
  'Challenged my thinking',
]

export default function SessionPage() {
  const [seconds, setSeconds] = useState(18 * 60 + 42)
  const [sessionEnded, setSessionEnded] = useState(false)
  const [selectedEndorsements, setSelectedEndorsements] = useState<string[]>(['Clear communicator'])
  const [reflection, setReflection] = useState('')

  useEffect(() => {
    if (sessionEnded) return
    const interval = setInterval(() => {
      setSeconds((s) => {
        if (s <= 0) {
          setSessionEnded(true)
          return 0
        }
        return s - 1
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [sessionEnded])

  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  const timerDisplay = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`

  const toggleEndorsement = (e: string) => {
    setSelectedEndorsements((prev) =>
      prev.includes(e) ? prev.filter((x) => x !== e) : [...prev, e]
    )
  }

  return (
    <div
      style={{
        background: 'rgba(28,58,46,0.04)',
        paddingTop: '52px',
        minHeight: '100vh',
      }}
    >
      <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '40px' }}>
        {/* Session shell */}
        <div
          style={{
            background: 'var(--forest)',
            borderRadius: '32px',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-lift)',
          }}
        >
          {/* Top bar */}
          <div
            style={{
              padding: '16px 24px',
              background: 'rgba(0,0,0,0.2)',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <span
              style={{
                fontFamily: '"Playfair Display", serif',
                color: 'var(--cream)',
                fontSize: '16px',
                fontWeight: 700,
              }}
            >
              Bridge<span style={{ color: 'var(--amber)' }}>Up</span>
            </span>
            <span
              style={{
                fontSize: '13px',
                color: 'rgba(245,240,232,0.7)',
                background: 'rgba(255,255,255,0.08)',
                padding: '5px 12px',
                borderRadius: '20px',
              }}
            >
              💬 Fintech investor pitch feedback
            </span>
            <div
              style={{
                marginLeft: 'auto',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  border: `3px solid ${seconds < 300 ? 'rgba(232,168,48,0.6)' : 'rgba(255,255,255,0.15)'}`,
                  borderTopColor: 'var(--amber)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '11px',
                  fontWeight: 700,
                  color: 'var(--cream)',
                }}
              >
                {timerDisplay}
              </div>
              <div>
                <div style={{ fontSize: '12px', color: 'rgba(245,240,232,0.7)' }}>
                  remaining
                </div>
                <div style={{ fontSize: '10px', color: 'var(--amber)' }}>30 min session</div>
              </div>
            </div>
          </div>

          {/* Video area */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 280px',
              gap: '16px',
              padding: '20px 24px',
            }}
          >
            {/* Tunde video */}
            <div
              style={{
                background: 'rgba(0,0,0,0.3)',
                borderRadius: '20px',
                aspectRatio: '4/3',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'flex-start',
                padding: '12px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%,-50%)',
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg,var(--forest),var(--moss))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  fontWeight: 800,
                  color: 'var(--cream)',
                }}
              >
                T
              </div>
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(transparent,rgba(0,0,0,0.5))',
                  height: '60%',
                }}
              />
              <div
                style={{
                  position: 'relative',
                  zIndex: 1,
                  fontSize: '12px',
                  fontWeight: 600,
                  color: 'var(--cream)',
                  background: 'rgba(0,0,0,0.4)',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                🎙️ Tunde Adebayo
              </div>
            </div>

            {/* Adaeze video */}
            <div
              style={{
                background: 'rgba(0,0,0,0.3)',
                borderRadius: '20px',
                aspectRatio: '4/3',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'flex-start',
                padding: '12px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%,-50%)',
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg,var(--amber),#C8881A)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  fontWeight: 800,
                  color: 'var(--forest)',
                }}
              >
                A
              </div>
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(transparent,rgba(0,0,0,0.5))',
                  height: '60%',
                }}
              />
              <div
                style={{
                  position: 'relative',
                  zIndex: 1,
                  fontSize: '12px',
                  fontWeight: 600,
                  color: 'var(--cream)',
                  background: 'rgba(0,0,0,0.4)',
                  padding: '4px 10px',
                  borderRadius: '6px',
                }}
              >
                You · Adaeze
              </div>
            </div>

            {/* Session panel */}
            <div
              style={{
                background: 'rgba(245,240,232,0.06)',
                borderRadius: '20px',
                padding: '18px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <h4
                style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  color: 'rgba(245,240,232,0.5)',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                }}
              >
                Session Agenda
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {agendaItems.map((item) => (
                  <div key={item.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <div
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        marginTop: '6px',
                        flexShrink: 0,
                        background:
                          item.status === 'done'
                            ? 'var(--amber)'
                            : item.status === 'active'
                            ? 'var(--cream)'
                            : 'rgba(255,255,255,0.2)',
                      }}
                    />
                    <div>
                      <div
                        style={{
                          fontSize: '12px',
                          color:
                            item.status === 'done'
                              ? 'rgba(245,240,232,0.4)'
                              : item.status === 'active'
                              ? 'var(--cream)'
                              : 'rgba(245,240,232,0.75)',
                          lineHeight: 1.4,
                          fontWeight: item.status === 'active' ? 600 : 400,
                          textDecoration: item.status === 'done' ? 'line-through' : 'none',
                        }}
                      >
                        {item.label}
                      </div>
                      <div
                        style={{
                          fontSize: '10px',
                          color: item.now ? 'var(--amber)' : 'rgba(245,240,232,0.4)',
                          marginTop: '1px',
                        }}
                      >
                        {item.time}
                        {item.now && ' · now'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginTop: 'auto',
                  paddingTop: '12px',
                  borderTop: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <div
                  style={{
                    fontSize: '11px',
                    color: 'rgba(245,240,232,0.4)',
                    marginBottom: '6px',
                  }}
                >
                  CONVERSATION STARTER
                </div>
                <div
                  style={{
                    fontSize: '12px',
                    color: 'rgba(245,240,232,0.7)',
                    lineHeight: 1.5,
                    fontStyle: 'italic',
                  }}
                >
                  &ldquo;What&apos;s the one thing Nigerian investors ask that most founders get wrong?&rdquo;
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div
            style={{
              padding: '14px 24px',
              background: 'rgba(0,0,0,0.2)',
              display: 'flex',
              justifyContent: 'center',
              gap: '12px',
              alignItems: 'center',
            }}
          >
            {['🎙️', '📷', '💬', '🖥️'].map((icon) => (
              <button
                key={icon}
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  border: 'none',
                  cursor: 'pointer',
                  background: 'rgba(255,255,255,0.12)',
                  color: 'var(--cream)',
                  fontSize: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {icon}
              </button>
            ))}
            <button
              onClick={() => setSessionEnded(true)}
              style={{
                width: '54px',
                height: '54px',
                borderRadius: '50%',
                border: 'none',
                cursor: 'pointer',
                background: '#C0392B',
                color: 'var(--cream)',
                fontSize: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              title="End session"
            >
              📵
            </button>
          </div>
        </div>

        {/* Post-session card */}
        {sessionEnded && (
          <div
            style={{
              marginTop: '20px',
              background: 'white',
              borderRadius: '32px',
              padding: '28px 36px',
              border: '1px solid rgba(28,58,46,0.14)',
              display: 'flex',
              gap: '24px',
              alignItems: 'flex-start',
            }}
          >
            <div style={{ fontSize: '36px' }}>🎉</div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontFamily: '"Playfair Display", serif',
                  fontSize: '20px',
                  fontWeight: 700,
                  color: 'var(--forest)',
                  marginBottom: '6px',
                }}
              >
                Session complete — well done, Adaeze.
              </div>
              <div
                style={{
                  fontSize: '14px',
                  color: 'var(--earth-light)',
                  marginBottom: '20px',
                }}
              >
                Take 2 minutes to reflect. What did you leave with that you didn&apos;t have before?
              </div>
              <textarea
                value={reflection}
                onChange={(e) => setReflection(e.target.value)}
                placeholder="e.g. Tunde pointed out that my one-pager leads with features, not the problem. He suggested I reframe around the ₦800bn gap in informal credit tracking..."
                style={{
                  width: '100%',
                  border: '1.5px solid rgba(28,58,46,0.14)',
                  borderRadius: '12px',
                  padding: '12px 14px',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  color: 'var(--earth)',
                  background: 'white',
                  outline: 'none',
                  minHeight: '72px',
                  resize: 'vertical',
                  lineHeight: 1.55,
                }}
              />

              <div style={{ marginTop: '14px' }}>
                <div
                  style={{
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'var(--forest)',
                    marginBottom: '10px',
                  }}
                >
                  How would you describe Tunde? (pick all that apply)
                </div>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {endorsements.map((e) => (
                    <button
                      key={e}
                      onClick={() => toggleEndorsement(e)}
                      style={{
                        padding: '8px 16px',
                        borderRadius: '20px',
                        border: `1.5px solid ${selectedEndorsements.includes(e) ? 'var(--forest)' : 'rgba(28,58,46,0.14)'}`,
                        background: selectedEndorsements.includes(e)
                          ? 'var(--forest)'
                          : 'transparent',
                        color: selectedEndorsements.includes(e)
                          ? 'var(--cream)'
                          : 'var(--earth)',
                        fontSize: '12px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.15s',
                      }}
                    >
                      {e}
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
                <Link href="/dashboard">
                  <button
                    style={{
                      background: 'var(--amber)',
                      color: 'var(--forest)',
                      border: 'none',
                      cursor: 'pointer',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '14px',
                      fontWeight: 700,
                      padding: '12px 24px',
                      borderRadius: '12px',
                    }}
                  >
                    Save reflection →
                  </button>
                </Link>
                <Link href="/impact">
                  <button
                    style={{
                      background: 'transparent',
                      color: 'var(--forest)',
                      border: '1.5px solid rgba(28,58,46,0.14)',
                      cursor: 'pointer',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '13px',
                      fontWeight: 500,
                      padding: '9px 18px',
                      borderRadius: '12px',
                    }}
                  >
                    View impact →
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

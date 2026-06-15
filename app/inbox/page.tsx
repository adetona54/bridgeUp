'use client'

import { useState } from 'react'
import Link from 'next/link'

const requests = [
  {
    id: 'adaeze',
    letter: 'A',
    bg: 'linear-gradient(135deg,#1C3A2E,#2D5A40)',
    name: 'Adaeze Okonkwo',
    time: '2h ago',
    preview: 'Feedback on fintech pitch deck — UNILAG CS student, 2 competitions won',
    score: 84,
    scoreLabel: 'Highly prepared',
    scoreStyle: 'high',
    type: 'Feedback',
    duration: '30 min',
    about:
      'Second-year Computer Science student at UNILAG. Won a state-level coding competition and a regional STEM award. Currently building a fintech app for informal loan tracking between friends and family. Preparing for first angel investor pitch.',
    ask: 'Feedback on how to frame the problem in her pitch deck for a Nigerian fintech investor who has seen a lot of ideas. She will come with a prepared one-pager.',
    quote:
      "I'm a second-year CS student at UNILAG building a fintech app that helps users track informal loans between friends and family. I won a state-level coding competition last year and I'm now preparing to pitch to angel investors.",
    reasons: ['Specific ask', 'Relevant to your expertise', 'Coming prepared', 'Fintech match'],
    emoji: '👩🏾‍💻',
  },
  {
    id: 'emeka',
    letter: 'E',
    bg: 'linear-gradient(135deg,#884EA0,#6C3483)',
    name: 'Emeka Nwosu',
    time: '5h ago',
    preview: 'Pivoting from marketing to PM — MBA in progress, wants to understand the switch',
    score: 71,
    scoreLabel: 'Well-structured',
    scoreStyle: 'mid',
    type: 'Career advice',
    duration: '30 min',
    about:
      'Marketing executive pivoting to product management. MBA in progress. Strong strategic background, zero network in tech. Has done research into the PM role and is serious about the transition.',
    ask: 'Understand the career path from marketing to PM — specifically what skills gap he needs to close and how to position his marketing experience as an asset.',
    quote:
      "I've sent 20 LinkedIn messages. I've heard back from zero. I need to understand what PMs who made a similar switch actually did differently.",
    reasons: ['Career switch story matches your path', 'Well-researched ask', 'Clear goal'],
    emoji: '👨🏽‍💼',
  },
  {
    id: 'fatima',
    letter: 'F',
    bg: 'linear-gradient(135deg,#1A5276,#0E2E42)',
    name: 'Fatima Abubakar',
    time: 'Yesterday',
    preview: 'Cloud engineering career path — first-gen professional from Abuja, strong developer',
    score: 79,
    scoreLabel: 'Highly prepared',
    scoreStyle: 'high',
    type: 'Industry insight',
    duration: '15 min',
    about:
      'Recent STEM graduate from Abuja. First in her family to work in tech. Strong developer skills in cloud infrastructure. No professional network, no mentors, no frame of reference for what career progression looks like.',
    ask: 'What does a cloud engineering career path look like — from junior to senior — and what should she be building in years 1–3?',
    quote:
      "Everyone I admire feels unreachable. Like they're on a different planet. I just want to understand if I'm on the right track.",
    reasons: ['First-gen professional match', 'Specific career question', 'Short session — low time ask'],
    emoji: '👩🏽‍💻',
  },
]

export default function InboxPage() {
  const [selected, setSelected] = useState(requests[0])

  return (
    <div
      style={{
        background: 'var(--cream)',
        paddingTop: '52px',
        minHeight: '100vh',
      }}
    >
      <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '40px' }}>

        {/* Guide sidebar at top */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '24px',
          }}
        >
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg,var(--amber),#C8881A)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--forest)',
              fontWeight: 800,
              fontSize: '18px',
            }}
          >
            T
          </div>
          <div>
            <h2
              style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: '22px',
                fontWeight: 700,
                color: 'var(--forest)',
              }}
            >
              Tunde Adebayo — Guide Inbox
            </h2>
            <p style={{ fontSize: '13px', color: 'var(--earth-light)' }}>
              VP Engineering · 3 curated requests · 11 filtered by AI
            </p>
          </div>
          <div style={{ marginLeft: 'auto' }}>
            <Link href="/impact">
              <button
                style={{
                  background: 'var(--forest)',
                  color: 'var(--cream)',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                  fontWeight: 600,
                  padding: '9px 18px',
                  borderRadius: '12px',
                }}
              >
                View impact →
              </button>
            </Link>
          </div>
        </div>

        {/* Inbox shell */}
        <div
          style={{
            background: 'var(--cream)',
            borderRadius: '32px',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-lift)',
            border: '1px solid rgba(28,58,46,0.14)',
            display: 'flex',
            minHeight: '620px',
          }}
        >
          {/* Left: request list */}
          <div
            style={{
              width: '340px',
              borderRight: '1px solid rgba(28,58,46,0.14)',
              display: 'flex',
              flexDirection: 'column',
              flexShrink: 0,
            }}
          >
            <div
              style={{
                padding: '20px 20px 14px',
                borderBottom: '1px solid rgba(28,58,46,0.14)',
              }}
            >
              <h3
                style={{
                  fontSize: '16px',
                  fontWeight: 700,
                  color: 'var(--forest)',
                  fontFamily: '"Playfair Display", serif',
                }}
              >
                Requests
              </h3>
              <p style={{ fontSize: '12px', color: 'var(--earth-light)', marginTop: '2px' }}>
                3 curated · 11 filtered by AI
              </p>
            </div>

            {/* Filters */}
            <div
              style={{
                display: 'flex',
                gap: '6px',
                padding: '12px 20px',
                borderBottom: '1px solid rgba(28,58,46,0.14)',
                overflowX: 'auto',
              }}
            >
              {['All', 'Feedback', 'Career', 'Industry'].map((f, i) => (
                <button
                  key={f}
                  style={{
                    padding: '5px 12px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    border: 'none',
                    background: i === 0 ? 'var(--forest)' : 'rgba(28,58,46,0.08)',
                    color: i === 0 ? 'var(--cream)' : 'var(--earth-light)',
                  }}
                >
                  {f}
                </button>
              ))}
            </div>

            {/* Request items */}
            <div style={{ overflowY: 'auto', flex: 1 }}>
              {requests.map((req) => (
                <div
                  key={req.id}
                  onClick={() => setSelected(req)}
                  style={{
                    padding: '16px 20px',
                    borderBottom: '1px solid rgba(28,58,46,0.08)',
                    cursor: 'pointer',
                    background:
                      selected.id === req.id
                        ? 'rgba(28,58,46,0.05)'
                        : 'transparent',
                    borderLeft:
                      selected.id === req.id
                        ? '3px solid var(--forest)'
                        : '3px solid transparent',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      marginBottom: '6px',
                    }}
                  >
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: req.bg,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '12px',
                        fontWeight: 700,
                        color: 'var(--cream)',
                        flexShrink: 0,
                      }}
                    >
                      {req.letter}
                    </div>
                    <div
                      style={{
                        fontSize: '13px',
                        fontWeight: 600,
                        color: 'var(--earth)',
                        flex: 1,
                      }}
                    >
                      {req.name}
                    </div>
                    <div style={{ fontSize: '11px', color: 'var(--earth-light)' }}>
                      {req.time}
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: '12px',
                      color: 'var(--earth-light)',
                      lineHeight: 1.45,
                    }}
                  >
                    {req.preview}
                  </div>
                  <div style={{ marginTop: '6px' }}>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        fontSize: '10px',
                        fontWeight: 700,
                        padding: '2px 8px',
                        borderRadius: '10px',
                        letterSpacing: '0.3px',
                        background:
                          req.scoreStyle === 'high'
                            ? 'rgba(28,58,46,0.1)'
                            : 'rgba(232,168,48,0.12)',
                        color:
                          req.scoreStyle === 'high' ? 'var(--forest)' : '#8B6000',
                      }}
                    >
                      {req.scoreStyle === 'high' ? '✦' : '◈'} {req.score} — {req.scoreLabel}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: detail */}
          <div style={{ flex: 1, padding: '28px 32px', overflowY: 'auto' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
                marginBottom: '24px',
                paddingBottom: '24px',
                borderBottom: '1px solid rgba(28,58,46,0.14)',
              }}
            >
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  background: selected.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                  fontWeight: 800,
                  color: 'var(--cream)',
                  flexShrink: 0,
                }}
              >
                {selected.letter}
              </div>
              <div>
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: 'var(--earth)',
                    fontFamily: '"Playfair Display", serif',
                  }}
                >
                  {selected.name}
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--earth-light)', marginTop: '2px' }}>
                  {selected.about.split('.')[0]}.
                </p>
              </div>
              <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: 'rgba(28,58,46,0.08)',
                    color: 'var(--forest)',
                    fontSize: '12px',
                    fontWeight: 700,
                    padding: '5px 12px',
                    borderRadius: '20px',
                  }}
                >
                  ✦ Score: {selected.score} / 100
                </div>
                <div
                  style={{
                    fontSize: '11px',
                    color: 'var(--earth-light)',
                    marginTop: '6px',
                  }}
                >
                  {selected.type} · {selected.duration}
                </div>
              </div>
            </div>

            {/* About seeker */}
            <div
              style={{
                background: 'rgba(28,58,46,0.08)',
                borderRadius: '12px',
                padding: '16px',
                display: 'flex',
                gap: '12px',
                alignItems: 'flex-start',
                marginBottom: '20px',
              }}
            >
              <div style={{ fontSize: '24px' }}>{selected.emoji}</div>
              <div>
                <strong style={{ fontSize: '13px', color: 'var(--earth)', fontWeight: 600 }}>
                  About {selected.name.split(' ')[0]}
                </strong>
                <p
                  style={{
                    fontSize: '12px',
                    color: 'var(--earth-light)',
                    marginTop: '3px',
                    lineHeight: 1.45,
                  }}
                >
                  {selected.about}
                </p>
              </div>
            </div>

            {/* What they're asking */}
            <div style={{ marginBottom: '20px' }}>
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  color: 'var(--earth-light)',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                  marginBottom: '8px',
                }}
              >
                What they&apos;re asking for
              </div>
              <p style={{ fontSize: '14px', color: 'var(--earth)', lineHeight: 1.6 }}>
                {selected.ask}
              </p>
            </div>

            {/* In their words */}
            <div style={{ marginBottom: '20px' }}>
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  color: 'var(--earth-light)',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                  marginBottom: '8px',
                }}
              >
                In their words
              </div>
              <p
                style={{
                  fontSize: '14px',
                  color: 'var(--earth-light)',
                  lineHeight: 1.6,
                  fontStyle: 'italic',
                }}
              >
                &ldquo;{selected.quote}&rdquo;
              </p>
            </div>

            {/* Why AI scored high */}
            <div style={{ marginBottom: '24px' }}>
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  color: 'var(--earth-light)',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                  marginBottom: '8px',
                }}
              >
                Why AI scored this highly
              </div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '6px' }}>
                {selected.reasons.map((r) => (
                  <span
                    key={r}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      background: 'rgba(28,58,46,0.1)',
                      color: 'var(--forest)',
                      fontSize: '11px',
                      fontWeight: 600,
                      padding: '4px 10px',
                      borderRadius: '20px',
                      gap: '4px',
                    }}
                  >
                    ✓ {r}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', gap: '10px' }}>
              <Link href="/session">
                <button
                  style={{
                    background: 'var(--amber)',
                    color: 'var(--forest)',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    fontWeight: 700,
                    padding: '12px 28px',
                    borderRadius: '12px',
                  }}
                >
                  Accept — offer a time slot →
                </button>
              </Link>
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
                Pass quietly
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

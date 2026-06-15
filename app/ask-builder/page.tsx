'use client'

import { useState } from 'react'
import Link from 'next/link'

const askTypes = [
  {
    icon: '💬',
    label: 'Feedback on my work',
    desc: 'Get a professional\'s eyes on a project, pitch, or portfolio',
  },
  {
    icon: '🗺️',
    label: 'Career advice',
    desc: 'Decisions, pivots, paths — talk through where you\'re headed',
  },
  {
    icon: '🔭',
    label: 'Industry insight',
    desc: 'Understand a space, trend, or company from the inside',
  },
  {
    icon: '🤝',
    label: 'Collaboration',
    desc: 'Explore working together on something specific',
  },
]

const steps = ['Ask type', 'Your context', 'Desired outcome', 'Preview & send']

export default function AskBuilderPage() {
  const [selectedType, setSelectedType] = useState(0)
  const [step, setStep] = useState(1)
  const [context, setContext] = useState(
    "I'm a second-year CS student at UNILAG building a fintech app that helps users track informal loans between friends and family. I won a state-level coding competition last year and I'm now preparing to pitch to angel investors."
  )
  const [outcome, setOutcome] = useState(
    "I'd like specific feedback on how to frame the problem in my pitch deck for a Nigerian fintech investor who has seen a lot of ideas."
  )

  const qualityScore = 84

  return (
    <div
      style={{
        background: 'var(--cream)',
        paddingTop: '52px',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 40px',
      }}
    >
      <div
        style={{
          background: 'var(--cream)',
          borderRadius: '32px',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-lift)',
          border: '1px solid rgba(28,58,46,0.14)',
          maxWidth: '720px',
          width: '100%',
          marginTop: '52px',
        }}
      >
        {/* Header */}
        <div
          style={{
            background: 'var(--forest)',
            padding: '24px 32px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              background: 'rgba(232,168,48,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px',
              flexShrink: 0,
            }}
          >
            ✍️
          </div>
          <div>
            <h2
              style={{
                fontFamily: '"Playfair Display", serif',
                color: 'var(--cream)',
                fontSize: '22px',
                fontWeight: 700,
              }}
            >
              Build your ask
            </h2>
            <p style={{ color: 'rgba(245,240,232,0.65)', fontSize: '13px', marginTop: '2px' }}>
              Requesting a session with Tunde Adebayo · VP Engineering
            </p>
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: '32px' }}>
          {/* Progress steps */}
          <div style={{ display: 'flex', gap: 0, marginBottom: '32px' }}>
            {steps.map((s, i) => {
              const idx = i + 1
              const isDone = idx < step
              const isActive = idx === step
              return (
                <div
                  key={s}
                  style={{
                    flex: 1,
                    position: 'relative',
                    textAlign: 'center',
                  }}
                >
                  {i < steps.length - 1 && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '14px',
                        left: '50%',
                        width: '100%',
                        height: '2px',
                        background:
                          isDone || isActive
                            ? 'var(--forest)'
                            : 'rgba(28,58,46,0.14)',
                      }}
                    />
                  )}
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: isDone
                        ? 'var(--amber)'
                        : isActive
                        ? 'var(--forest)'
                        : 'rgba(28,58,46,0.14)',
                      color: isDone
                        ? 'var(--forest)'
                        : isActive
                        ? 'var(--cream)'
                        : 'var(--earth-light)',
                      fontSize: '12px',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 6px',
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    {isDone ? '✓' : idx}
                  </div>
                  <div
                    style={{
                      fontSize: '11px',
                      color: isActive ? 'var(--forest)' : 'var(--earth-light)',
                      fontWeight: isActive ? 600 : 500,
                    }}
                  >
                    {s}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Step 1 content visible always for demo */}
          <div style={{ marginBottom: '20px' }}>
            <label
              style={{
                fontSize: '13px',
                fontWeight: 600,
                color: 'var(--forest)',
                marginBottom: '6px',
                display: 'block',
              }}
            >
              What kind of help are you looking for?
            </label>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '10px',
                marginBottom: '24px',
              }}
            >
              {askTypes.map((type, i) => (
                <div
                  key={type.label}
                  onClick={() => setSelectedType(i)}
                  style={{
                    border: `1.5px solid ${i === selectedType ? 'var(--forest)' : 'rgba(28,58,46,0.14)'}`,
                    borderRadius: '12px',
                    padding: '16px',
                    cursor: 'pointer',
                    background:
                      i === selectedType ? 'rgba(28,58,46,0.04)' : 'transparent',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    transition: 'all 0.2s',
                  }}
                >
                  <div style={{ fontSize: '20px' }}>{type.icon}</div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--earth)' }}>
                      {type.label}
                    </div>
                    <div
                      style={{
                        fontSize: '11px',
                        color: 'var(--earth-light)',
                        marginTop: '2px',
                        lineHeight: 1.4,
                      }}
                    >
                      {type.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Context */}
          <div style={{ marginBottom: '20px' }}>
            <label
              style={{
                fontSize: '13px',
                fontWeight: 600,
                color: 'var(--forest)',
                marginBottom: '6px',
                display: 'block',
              }}
            >
              Your context{' '}
              <span style={{ color: 'var(--earth-light)', fontWeight: 400 }}>(2 sentences max)</span>
            </label>
            <span
              style={{
                fontSize: '11px',
                color: 'var(--earth-light)',
                marginBottom: '8px',
                display: 'block',
              }}
            >
              Who are you and what are you building or working on right now?
            </span>
            <textarea
              value={context}
              onChange={(e) => setContext(e.target.value)}
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
                minHeight: '90px',
                resize: 'vertical',
                lineHeight: 1.55,
              }}
            />
            <div style={{ fontSize: '11px', color: 'var(--earth-light)', textAlign: 'right', marginTop: '4px' }}>
              {context.length} / 300
            </div>
          </div>

          {/* Outcome */}
          <div style={{ marginBottom: '20px' }}>
            <label
              style={{
                fontSize: '13px',
                fontWeight: 600,
                color: 'var(--forest)',
                marginBottom: '6px',
                display: 'block',
              }}
            >
              Desired outcome
            </label>
            <span
              style={{
                fontSize: '11px',
                color: 'var(--earth-light)',
                marginBottom: '8px',
                display: 'block',
              }}
            >
              What would a successful 30-minute conversation leave you with?
            </span>
            <textarea
              value={outcome}
              onChange={(e) => setOutcome(e.target.value)}
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
          </div>

          {/* AI Preview */}
          <div
            style={{
              background: 'rgba(28,58,46,0.04)',
              border: '1px solid rgba(28,58,46,0.12)',
              borderRadius: '12px',
              padding: '16px',
              marginBottom: '20px',
            }}
          >
            <div
              style={{
                fontSize: '11px',
                fontWeight: 700,
                color: 'var(--forest)',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                marginBottom: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <span style={{ color: 'var(--amber)' }}>✦</span>
              How your request will look to Tunde
            </div>
            <p
              style={{
                fontSize: '13px',
                color: 'var(--earth)',
                lineHeight: 1.6,
                fontStyle: 'italic',
              }}
            >
              &ldquo;Hi Tunde — I&apos;m Adaeze, a CS student at UNILAG building a fintech app for
              informal loan tracking. I&apos;ve won regional competitions and I&apos;m now moving toward
              an investor pitch. I&apos;d love 30 minutes of feedback specifically on how to frame
              the problem for a Nigerian fintech investor who&apos;s seen a lot of ideas. I&apos;ll come
              with a clear one-pager so you&apos;re not starting from scratch.&rdquo;
            </p>

            {/* Quality meter */}
            <div style={{ marginTop: '12px' }}>
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  color: 'var(--forest)',
                  marginBottom: '6px',
                }}
              >
                Request quality score
              </div>
              <div
                style={{
                  height: '6px',
                  background: 'rgba(28,58,46,0.14)',
                  borderRadius: '3px',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    height: '100%',
                    width: `${qualityScore}%`,
                    background: 'linear-gradient(90deg,var(--moss),var(--amber))',
                    borderRadius: '3px',
                  }}
                />
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: '4px',
                }}
              >
                <span style={{ fontSize: '11px', color: 'var(--earth-light)' }}>
                  Clear, specific, prepared ✓
                </span>
                <span
                  style={{
                    fontSize: '13px',
                    fontWeight: 700,
                    color: 'var(--forest)',
                  }}
                >
                  {qualityScore} / 100
                </span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
            <Link href="/dashboard">
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
                ← Back
              </button>
            </Link>
            <Link href="/inbox">
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
                Send request →
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

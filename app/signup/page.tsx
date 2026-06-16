'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

const SEEKER_PERKS = [
  { icon: '🎯', text: 'AI-matched to guides who fit your exact situation' },
  { icon: '✍️', text: 'Guided ask builder so you arrive prepared' },
  { icon: '📅', text: 'Flexible 15 or 30-minute sessions' },
  { icon: '🌱', text: 'Track your growth session by session' },
]

const GUIDE_PERKS = [
  { icon: '⚡', text: 'Only see the requests you\'d actually want to accept' },
  { icon: '🗓️', text: 'You control your availability — open or close any time' },
  { icon: '💬', text: 'AI-summarised asks so you decide in 30 seconds' },
  { icon: '📊', text: 'See the real impact of your time with sharable stats' },
]

function SignUpContent() {
  const searchParams = useSearchParams()
  const defaultRole = searchParams.get('role') === 'guide' ? 'guide' : 'seeker'

  const [role, setRole] = useState<'seeker' | 'guide'>(defaultRole as 'seeker' | 'guide')
  const [step, setStep] = useState(1)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [country, setCountry] = useState('')
  const [profession, setProfession] = useState('')
  const [loading, setLoading] = useState(false)

  const perks = role === 'seeker' ? SEEKER_PERKS : GUIDE_PERKS

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      window.location.href = role === 'guide' ? '/inbox' : '/dashboard'
    }, 1400)
  }

  const step1Valid = firstName.trim() && lastName.trim() && email.trim()
  const step2Valid = password.trim().length >= 8 && country.trim()

  return (
    <div style={{ minHeight: '100vh', display: 'flex', fontFamily: 'Inter, sans-serif' }}>

      {/* Left panel */}
      <div
        className="hide-mobile"
        style={{
          width: '45%',
          background: 'var(--forest)',
          display: 'flex',
          flexDirection: 'column',
          padding: '48px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{
          position: 'absolute',
          top: '-100px',
          right: '-60px',
          width: '340px',
          height: '340px',
          borderRadius: '50%',
          background: 'rgba(45,90,64,0.35)',
          pointerEvents: 'none',
        }} />

        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', zIndex: 1, marginBottom: '64px' }}>
          <span style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: '28px',
            fontWeight: 700,
            color: 'white',
          }}>
            Bridge<span style={{ color: 'var(--amber)' }}>Up</span>
          </span>
        </Link>

        {/* Role toggle */}
        <div style={{ zIndex: 1, marginBottom: '36px' }}>
          <div style={{ display: 'flex', gap: '8px', background: 'rgba(255,255,255,0.08)', borderRadius: '12px', padding: '5px' }}>
            {(['seeker', 'guide'] as const).map((r) => (
              <button
                key={r}
                onClick={() => { setRole(r); setStep(1) }}
                style={{
                  flex: 1,
                  padding: '10px',
                  borderRadius: '9px',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 700,
                  fontSize: '14px',
                  transition: 'all 0.2s',
                  background: role === r ? 'white' : 'transparent',
                  color: role === r ? 'var(--forest)' : 'rgba(245,240,232,0.6)',
                }}
              >
                {r === 'seeker' ? 'I\'m a Seeker' : 'I\'m a Guide'}
              </button>
            ))}
          </div>
        </div>

        {/* Pitch */}
        <div style={{ zIndex: 1 }}>
          <h2 style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: '26px',
            fontWeight: 700,
            color: 'white',
            marginBottom: '8px',
            lineHeight: 1.3,
          }}>
            {role === 'seeker'
              ? 'Get the conversations that actually move your career.'
              : 'Give back — on your own terms.'}
          </h2>
          <p style={{ color: 'rgba(245,240,232,0.6)', fontSize: '14px', marginBottom: '32px', lineHeight: 1.6 }}>
            {role === 'seeker'
              ? 'No cold outreach. No awkward intros. Just structured, private sessions with people who\'ve been exactly where you are.'
              : 'We handle the curation. You show up for the asks that matter. Your time is protected.'}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {perks.map((p) => (
              <div key={p.text} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{
                  fontSize: '18px',
                  width: '28px',
                  height: '28px',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(232,168,48,0.15)',
                  borderRadius: '8px',
                }}>
                  {p.icon}
                </span>
                <p style={{ fontSize: '13px', color: 'rgba(245,240,232,0.75)', lineHeight: 1.5, margin: 0 }}>
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right panel — form */}
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--cream)',
        padding: '48px 24px',
        overflowY: 'auto',
      }}>
        <div style={{ width: '100%', maxWidth: '420px' }}>

          {/* Mobile logo */}
          <div className="hide-desktop" style={{ marginBottom: '24px', textAlign: 'center' }}>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <span style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: '26px',
                fontWeight: 700,
                color: 'var(--forest)',
              }}>
                Bridge<span style={{ color: 'var(--amber)' }}>Up</span>
              </span>
            </Link>
          </div>

          {/* Mobile role toggle */}
          <div className="hide-desktop" style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', gap: '8px', background: 'rgba(28,58,46,0.08)', borderRadius: '12px', padding: '4px' }}>
              {(['seeker', 'guide'] as const).map((r) => (
                <button
                  key={r}
                  onClick={() => { setRole(r); setStep(1) }}
                  style={{
                    flex: 1,
                    padding: '10px',
                    borderRadius: '9px',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                    fontSize: '13px',
                    background: role === r ? 'var(--forest)' : 'transparent',
                    color: role === r ? 'white' : 'var(--earth)',
                    transition: 'all 0.2s',
                  }}
                >
                  {r === 'seeker' ? 'Seeker' : 'Guide'}
                </button>
              ))}
            </div>
          </div>

          {/* Step indicator */}
          <div style={{ display: 'flex', gap: '6px', marginBottom: '28px' }}>
            {[1, 2].map((s) => (
              <div
                key={s}
                style={{
                  flex: s === step ? 2 : 1,
                  height: '4px',
                  borderRadius: '2px',
                  background: s <= step ? 'var(--forest)' : 'rgba(28,58,46,0.15)',
                  transition: 'all 0.3s',
                }}
              />
            ))}
          </div>

          <h1 style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: '28px',
            fontWeight: 800,
            color: 'var(--forest)',
            marginBottom: '6px',
          }}>
            {step === 1 ? 'Create your account' : 'Almost done'}
          </h1>
          <p style={{ color: 'var(--earth)', opacity: 0.6, fontSize: '14px', marginBottom: '28px' }}>
            {step === 1
              ? `Joining as a ${role}. Free forever.`
              : 'Just a few more details and you\'re in.'}
          </p>

          <form onSubmit={step === 1 ? (e) => { e.preventDefault(); if (step1Valid) setStep(2) } : handleSubmit}>

            {step === 1 && (
              <>
                {/* Name row */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
                  {[
                    { label: 'First name', value: firstName, set: setFirstName, ph: 'Adaeze' },
                    { label: 'Last name', value: lastName, set: setLastName, ph: 'Okonkwo' },
                  ].map((f) => (
                    <div key={f.label}>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--earth)', marginBottom: '6px' }}>
                        {f.label}
                      </label>
                      <input
                        type="text"
                        value={f.value}
                        onChange={(e) => f.set(e.target.value)}
                        placeholder={f.ph}
                        required
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          borderRadius: '12px',
                          border: '1.5px solid rgba(28,58,46,0.2)',
                          fontSize: '14px',
                          fontFamily: 'Inter, sans-serif',
                          outline: 'none',
                          color: 'var(--earth)',
                          background: 'white',
                          boxSizing: 'border-box',
                        }}
                        onFocus={(e) => (e.target.style.borderColor = 'var(--forest)')}
                        onBlur={(e) => (e.target.style.borderColor = 'rgba(28,58,46,0.2)')}
                      />
                    </div>
                  ))}
                </div>

                {/* Email */}
                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--earth)', marginBottom: '6px' }}>
                    Email address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '12px',
                      border: '1.5px solid rgba(28,58,46,0.2)',
                      fontSize: '14px',
                      fontFamily: 'Inter, sans-serif',
                      outline: 'none',
                      color: 'var(--earth)',
                      background: 'white',
                      boxSizing: 'border-box',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--forest)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(28,58,46,0.2)')}
                  />
                </div>

                {/* OAuth shortcuts */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', margin: '20px 0' }}>
                  {[
                    { icon: 'G', label: 'Google', bg: '#fff', border: 'rgba(28,58,46,0.2)' },
                    { icon: 'in', label: 'LinkedIn', bg: '#0077B5', color: 'white' },
                  ].map((o) => (
                    <button
                      key={o.label}
                      type="button"
                      style={{
                        padding: '11px',
                        borderRadius: '12px',
                        border: `1.5px solid ${o.border || 'transparent'}`,
                        background: o.bg,
                        color: o.color || 'var(--earth)',
                        fontSize: '13px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        fontFamily: 'Inter, sans-serif',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                      }}
                    >
                      <span style={{ fontWeight: 800 }}>{o.icon}</span>
                      {o.label}
                    </button>
                  ))}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '8px 0 20px' }}>
                  <div style={{ flex: 1, height: '1px', background: 'rgba(28,58,46,0.12)' }} />
                  <span style={{ fontSize: '12px', color: 'var(--earth)', opacity: 0.4 }}>or with email</span>
                  <div style={{ flex: 1, height: '1px', background: 'rgba(28,58,46,0.12)' }} />
                </div>
              </>
            )}

            {step === 2 && (
              <>
                {/* Password */}
                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--earth)', marginBottom: '6px' }}>
                    Create a password
                    <span style={{ fontWeight: 400, color: 'var(--earth)', opacity: 0.5, marginLeft: '6px' }}>(min. 8 characters)</span>
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="At least 8 characters"
                    required
                    minLength={8}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '12px',
                      border: '1.5px solid rgba(28,58,46,0.2)',
                      fontSize: '14px',
                      fontFamily: 'Inter, sans-serif',
                      outline: 'none',
                      color: 'var(--earth)',
                      background: 'white',
                      boxSizing: 'border-box',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--forest)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(28,58,46,0.2)')}
                  />
                  {password && (
                    <div style={{ marginTop: '6px', display: 'flex', gap: '4px' }}>
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          style={{
                            flex: 1,
                            height: '3px',
                            borderRadius: '2px',
                            background: password.length >= i * 3
                              ? i <= 1 ? '#c0392b' : i <= 2 ? '#E8A830' : 'var(--moss)'
                              : 'rgba(28,58,46,0.12)',
                            transition: 'background 0.2s',
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Country */}
                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--earth)', marginBottom: '6px' }}>
                    Country
                  </label>
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '12px',
                      border: '1.5px solid rgba(28,58,46,0.2)',
                      fontSize: '14px',
                      fontFamily: 'Inter, sans-serif',
                      outline: 'none',
                      color: country ? 'var(--earth)' : 'var(--earth)',
                      background: 'white',
                      boxSizing: 'border-box',
                      appearance: 'none',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--forest)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(28,58,46,0.2)')}
                  >
                    <option value="">Select your country</option>
                    {['Nigeria', 'Ghana', 'Kenya', 'South Africa', 'Ethiopia', 'Rwanda', 'Senegal', 'Tanzania', 'Uganda', 'Côte d\'Ivoire', 'Other'].map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                {/* Profession / Industry */}
                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--earth)', marginBottom: '6px' }}>
                    {role === 'seeker' ? 'What are you studying or working on?' : 'Your industry / expertise'}
                  </label>
                  <input
                    type="text"
                    value={profession}
                    onChange={(e) => setProfession(e.target.value)}
                    placeholder={role === 'seeker' ? 'e.g. CS student, frontend dev, MBA...' : 'e.g. Fintech, Product, Engineering...'}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '12px',
                      border: '1.5px solid rgba(28,58,46,0.2)',
                      fontSize: '14px',
                      fontFamily: 'Inter, sans-serif',
                      outline: 'none',
                      color: 'var(--earth)',
                      background: 'white',
                      boxSizing: 'border-box',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--forest)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(28,58,46,0.2)')}
                  />
                </div>

                {/* Terms notice */}
                <p style={{ fontSize: '12px', color: 'var(--earth)', opacity: 0.5, marginBottom: '20px', lineHeight: 1.5 }}>
                  By creating an account you agree to our{' '}
                  <Link href="/terms" style={{ color: 'var(--forest)', textDecoration: 'none', fontWeight: 600 }}>Terms of Service</Link>
                  {' '}and{' '}
                  <Link href="/privacy" style={{ color: 'var(--forest)', textDecoration: 'none', fontWeight: 600 }}>Privacy Policy</Link>.
                </p>
              </>
            )}

            {/* Navigation buttons */}
            <div style={{ display: 'flex', gap: '10px' }}>
              {step === 2 && (
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  style={{
                    flex: 1,
                    padding: '13px',
                    borderRadius: '12px',
                    border: '1.5px solid rgba(28,58,46,0.2)',
                    background: 'transparent',
                    color: 'var(--earth)',
                    cursor: 'pointer',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    fontSize: '15px',
                  }}
                >
                  ← Back
                </button>
              )}
              <button
                type="submit"
                disabled={step === 1 ? !step1Valid : loading || !step2Valid}
                style={{
                  flex: 2,
                  padding: '14px',
                  borderRadius: '12px',
                  border: 'none',
                  cursor: (step === 1 ? !step1Valid : loading || !step2Valid) ? 'not-allowed' : 'pointer',
                  background: (step === 1 ? !step1Valid : loading || !step2Valid)
                    ? 'rgba(28,58,46,0.15)'
                    : 'var(--forest)',
                  color: (step === 1 ? !step1Valid : loading || !step2Valid)
                    ? 'rgba(28,58,46,0.4)'
                    : 'white',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 700,
                  fontSize: '15px',
                  transition: 'all 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                }}
              >
                {loading ? (
                  <>
                    <span style={{
                      width: '16px',
                      height: '16px',
                      border: '2px solid rgba(255,255,255,0.3)',
                      borderTopColor: 'white',
                      borderRadius: '50%',
                      display: 'inline-block',
                      animation: 'spin 0.8s linear infinite',
                    }} />
                    Creating account...
                  </>
                ) : step === 1 ? 'Continue →' : 'Create account →'}
              </button>
            </div>
          </form>

          <p style={{ textAlign: 'center', fontSize: '14px', color: 'var(--earth)', opacity: 0.6, marginTop: '24px' }}>
            Already have an account?{' '}
            <Link href="/signin" style={{ color: 'var(--forest)', fontWeight: 700, textDecoration: 'none' }}>
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default function SignUpPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh', background: 'var(--cream)' }} />}>
      <SignUpContent />
    </Suspense>
  )
}

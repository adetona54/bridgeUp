'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function SignInPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !password) return
    setLoading(true)
    setTimeout(() => {
      window.location.href = '/dashboard'
    }, 1200)
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', fontFamily: 'Inter, sans-serif' }}>

      {/* Left panel — forest */}
      <div
        className="hide-mobile"
        style={{
          width: '45%',
          background: 'var(--forest)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '48px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background decoration */}
        <div style={{
          position: 'absolute',
          top: '-80px',
          right: '-80px',
          width: '320px',
          height: '320px',
          borderRadius: '50%',
          background: 'rgba(45,90,64,0.4)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-60px',
          left: '-40px',
          width: '240px',
          height: '240px',
          borderRadius: '50%',
          background: 'rgba(232,168,48,0.06)',
          pointerEvents: 'none',
        }} />

        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', zIndex: 1 }}>
          <span style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: '28px',
            fontWeight: 700,
            color: 'white',
          }}>
            Bridge<span style={{ color: 'var(--amber)' }}>Up</span>
          </span>
        </Link>

        {/* Center content */}
        <div style={{ zIndex: 1 }}>
          <div style={{
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '20px',
            padding: '28px',
            marginBottom: '32px',
          }}>
            <div style={{ fontSize: '32px', marginBottom: '12px' }}>✦</div>
            <p style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: '22px',
              fontWeight: 600,
              color: 'white',
              lineHeight: 1.4,
              marginBottom: '16px',
            }}>
              &ldquo;One conversation with Tunde changed how I think about my entire career.&rdquo;
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg,#2D5A40,#1C3A2E)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                fontWeight: 800,
                color: 'white',
                border: '2px solid rgba(255,255,255,0.2)',
              }}>
                AF
              </div>
              <div>
                <div style={{ color: 'rgba(245,240,232,0.9)', fontSize: '13px', fontWeight: 600 }}>Adaeze Fatima</div>
                <div style={{ color: 'rgba(245,240,232,0.5)', fontSize: '12px' }}>Product Design · Lagos</div>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '24px' }}>
            {[
              { num: '14,200+', label: 'sessions completed' },
              { num: '94%', label: 'satisfaction rate' },
              { num: '28', label: 'countries' },
            ].map((s) => (
              <div key={s.label}>
                <div style={{
                  fontFamily: '"Playfair Display", serif',
                  fontSize: '22px',
                  fontWeight: 700,
                  color: 'var(--amber)',
                }}>
                  {s.num}
                </div>
                <div style={{ fontSize: '11px', color: 'rgba(245,240,232,0.5)', marginTop: '2px' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <p style={{ color: 'rgba(245,240,232,0.3)', fontSize: '12px', zIndex: 1 }}>
          © 2026 BridgeUp Technologies Ltd.
        </p>
      </div>

      {/* Right panel — form */}
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--cream)',
        padding: '48px 24px',
      }}>
        <div style={{ width: '100%', maxWidth: '400px' }}>

          {/* Mobile logo */}
          <div className="hide-desktop" style={{ marginBottom: '32px', textAlign: 'center' }}>
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

          <h1 style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: '30px',
            fontWeight: 800,
            color: 'var(--forest)',
            marginBottom: '6px',
          }}>
            Welcome back
          </h1>
          <p style={{ color: 'var(--earth)', opacity: 0.6, fontSize: '15px', marginBottom: '36px' }}>
            Sign in to continue your journey.
          </p>

          <form onSubmit={handleSubmit}>

            {/* Email */}
            <div style={{ marginBottom: '18px' }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--earth)', marginBottom: '8px' }}>
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
                  padding: '13px 16px',
                  borderRadius: '12px',
                  border: '1.5px solid rgba(28,58,46,0.2)',
                  fontSize: '15px',
                  fontFamily: 'Inter, sans-serif',
                  outline: 'none',
                  color: 'var(--earth)',
                  background: 'white',
                  boxSizing: 'border-box',
                  transition: 'border-color 0.2s',
                }}
                onFocus={(e) => (e.target.style.borderColor = 'var(--forest)')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(28,58,46,0.2)')}
              />
            </div>

            {/* Password */}
            <div style={{ marginBottom: '10px' }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--earth)', marginBottom: '8px' }}>
                Password
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Your password"
                  required
                  style={{
                    width: '100%',
                    padding: '13px 46px 13px 16px',
                    borderRadius: '12px',
                    border: '1.5px solid rgba(28,58,46,0.2)',
                    fontSize: '15px',
                    fontFamily: 'Inter, sans-serif',
                    outline: 'none',
                    color: 'var(--earth)',
                    background: 'white',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--forest)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(28,58,46,0.2)')}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    right: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '16px',
                    opacity: 0.4,
                    padding: '4px',
                  }}
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
            </div>

            {/* Forgot */}
            <div style={{ textAlign: 'right', marginBottom: '28px' }}>
              <a href="#" style={{ fontSize: '13px', color: 'var(--forest)', fontWeight: 500, textDecoration: 'none' }}>
                Forgot password?
              </a>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading || !email || !password}
              style={{
                width: '100%',
                padding: '15px',
                borderRadius: '14px',
                border: 'none',
                cursor: loading || !email || !password ? 'not-allowed' : 'pointer',
                background: loading || !email || !password ? 'rgba(28,58,46,0.15)' : 'var(--forest)',
                color: loading || !email || !password ? 'rgba(28,58,46,0.4)' : 'white',
                fontFamily: 'Inter, sans-serif',
                fontSize: '16px',
                fontWeight: 700,
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
                  Signing in...
                </>
              ) : 'Sign in →'}
            </button>
          </form>

          {/* Divider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '24px 0' }}>
            <div style={{ flex: 1, height: '1px', background: 'rgba(28,58,46,0.12)' }} />
            <span style={{ fontSize: '12px', color: 'var(--earth)', opacity: 0.4, fontWeight: 500 }}>or continue with</span>
            <div style={{ flex: 1, height: '1px', background: 'rgba(28,58,46,0.12)' }} />
          </div>

          {/* OAuth */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '28px' }}>
            {[
              { icon: 'G', label: 'Google', bg: '#fff', border: 'rgba(28,58,46,0.2)' },
              { icon: 'in', label: 'LinkedIn', bg: '#0077B5', color: 'white' },
            ].map((o) => (
              <button
                key={o.label}
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

          <p style={{ textAlign: 'center', fontSize: '14px', color: 'var(--earth)', opacity: 0.6 }}>
            Don&apos;t have an account?{' '}
            <Link href="/signup" style={{ color: 'var(--forest)', fontWeight: 700, textDecoration: 'none' }}>
              Sign up free
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

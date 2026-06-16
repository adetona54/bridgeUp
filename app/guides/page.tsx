'use client'

import { useState } from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'

const allGuides = [
  {
    initials: 'AO',
    gradient: 'linear-gradient(135deg,#1C3A2E,#2D5A40)',
    name: 'Amara Osei',
    title: 'Head of Product',
    company: 'Flutterwave',
    country: '🇬🇭 Ghana',
    tags: ['Product', 'Fintech', 'Growth'],
    sessions: 47,
    rating: 4.9,
    available: true,
    industries: ['fintech'],
    roles: ['product'],
    bio: 'Spent 8 years scaling payment products across West Africa. I love talking to builders who are thinking seriously about distribution.',
  },
  {
    initials: 'TB',
    gradient: 'linear-gradient(135deg,#2D5A40,#1A4230)',
    name: 'Tunde Bakare',
    title: 'Engineering Lead',
    company: 'Paystack',
    country: '🇳🇬 Nigeria',
    tags: ['Engineering', 'Fintech', 'Leadership'],
    sessions: 63,
    rating: 4.8,
    available: true,
    industries: ['fintech', 'engineering'],
    roles: ['engineering'],
    bio: 'Led Paystack\'s infrastructure team through the Stripe acquisition. Ask me about scaling engineering teams in fast-moving startups.',
  },
  {
    initials: 'ZM',
    gradient: 'linear-gradient(135deg,#1A5276,#0E2E42)',
    name: 'Zainab Musa',
    title: 'Senior Product Manager',
    company: 'Google',
    country: '🇰🇪 Kenya',
    tags: ['Product', 'FAANG', 'Career Transitions'],
    sessions: 31,
    rating: 5.0,
    available: false,
    industries: ['tech'],
    roles: ['product'],
    bio: 'First African woman PM on Google Maps. I help people understand what FAANG actually looks like from the inside — and how to get there.',
  },
  {
    initials: 'KA',
    gradient: 'linear-gradient(135deg,#5B3A8A,#3D2560)',
    name: 'Kwame Asante',
    title: 'Principal Consultant',
    company: 'McKinsey',
    country: '🇬🇭 Ghana',
    tags: ['Strategy', 'Consulting', 'MBA'],
    sessions: 28,
    rating: 4.7,
    available: true,
    industries: ['consulting'],
    roles: ['strategy'],
    bio: 'McKinsey Accra. Worked across 12 African markets in telecoms, energy, and financial services. Great at helping people think through career inflection points.',
  },
  {
    initials: 'FD',
    gradient: 'linear-gradient(135deg,#884EA0,#6C3483)',
    name: 'Fatima Diallo',
    title: 'Founder & CEO',
    company: 'HealthBridge',
    country: '🇸🇳 Senegal',
    tags: ['Startup', 'HealthTech', 'Fundraising'],
    sessions: 52,
    rating: 4.9,
    available: true,
    industries: ['healthtech', 'startup'],
    roles: ['founder'],
    bio: 'Raised $4M seed for a Dakar-based digital health company. Passionate about helping first-time founders navigate the fundraising process in Africa.',
  },
  {
    initials: 'EE',
    gradient: 'linear-gradient(135deg,#1C4E72,#0D3050)',
    name: 'Emeka Eze',
    title: 'VC Investor',
    company: 'TLcom Capital',
    country: '🇳🇬 Nigeria',
    tags: ['VC', 'Investing', 'Startups'],
    sessions: 19,
    rating: 4.8,
    available: true,
    industries: ['venture', 'startup'],
    roles: ['investor'],
    bio: 'I look at 200+ deals a year across Sub-Saharan Africa. I\'ll tell you straight what makes a pitch work — and what kills it in the first 60 seconds.',
  },
  {
    initials: 'NA',
    gradient: 'linear-gradient(135deg,#2C6E4A,#1A4A30)',
    name: 'Ngozi Adeyemi',
    title: 'Data Science Manager',
    company: 'Interswitch',
    country: '🇳🇬 Nigeria',
    tags: ['Data', 'Machine Learning', 'Career'],
    sessions: 35,
    rating: 4.9,
    available: true,
    industries: ['data', 'fintech'],
    roles: ['data'],
    bio: 'Built Interswitch\'s ML fraud detection pipeline. If you\'re breaking into data science in Africa, I\'ve seen every version of that journey.',
  },
  {
    initials: 'DA',
    gradient: 'linear-gradient(135deg,#7D3C4E,#5A2838)',
    name: 'David Amponsah',
    title: 'Marketing Director',
    company: 'MTN Ghana',
    country: '🇬🇭 Ghana',
    tags: ['Marketing', 'Brand', 'Telco'],
    sessions: 22,
    rating: 4.7,
    available: false,
    industries: ['marketing', 'telco'],
    roles: ['marketing'],
    bio: '15 years building brand in West African telecoms. From Accra to Cape Town — I understand how brand actually works in African markets.',
  },
]

const industryFilters = ['All', 'Fintech', 'Tech', 'Consulting', 'HealthTech', 'Startup', 'Data', 'VC', 'Marketing']
const roleFilters = ['Any role', 'Product', 'Engineering', 'Founder', 'Strategy', 'Investor', 'Data', 'Marketing']

export default function GuidesPage() {
  const [search, setSearch] = useState('')
  const [industry, setIndustry] = useState('All')
  const [role, setRole] = useState('Any role')
  const [availableOnly, setAvailableOnly] = useState(false)

  const filtered = allGuides.filter((g) => {
    if (availableOnly && !g.available) return false
    if (search) {
      const q = search.toLowerCase()
      if (
        !g.name.toLowerCase().includes(q) &&
        !g.title.toLowerCase().includes(q) &&
        !g.company.toLowerCase().includes(q) &&
        !g.tags.some((t) => t.toLowerCase().includes(q))
      ) return false
    }
    if (industry !== 'All') {
      if (!g.industries.some((i) => i.toLowerCase() === industry.toLowerCase())) return false
    }
    if (role !== 'Any role') {
      if (!g.roles.some((r) => r.toLowerCase() === role.toLowerCase())) return false
    }
    return true
  })

  return (
    <>
      {/* Top nav spacer */}
      <div style={{ height: '72px' }} />

      {/* Hero */}
      <section style={{
        background: 'var(--forest)',
        padding: '64px 24px 80px',
        textAlign: 'center',
      }}>
        <p style={{
          color: 'var(--amber)',
          fontSize: '12px',
          fontWeight: 700,
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
          marginBottom: '16px',
        }}>
          Guide Directory
        </p>
        <h1 style={{
          fontFamily: '"Playfair Display", serif',
          fontSize: 'clamp(32px,5vw,52px)',
          fontWeight: 800,
          color: 'white',
          lineHeight: 1.15,
          marginBottom: '16px',
        }}>
          Find your guide
        </h1>
        <p style={{
          color: 'rgba(245,240,232,0.7)',
          fontSize: '18px',
          maxWidth: '520px',
          margin: '0 auto 40px',
          lineHeight: 1.6,
        }}>
          Professionals who have walked the path you&apos;re on — and are ready to talk.
        </p>

        {/* Search */}
        <div style={{ maxWidth: '560px', margin: '0 auto', position: 'relative' }}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, company, or skill..."
            style={{
              width: '100%',
              padding: '16px 52px 16px 20px',
              borderRadius: '14px',
              border: 'none',
              fontSize: '15px',
              fontFamily: 'Inter, sans-serif',
              outline: 'none',
              color: 'var(--earth)',
              background: 'white',
              boxSizing: 'border-box',
              boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
            }}
          />
          <span style={{
            position: 'absolute',
            right: '18px',
            top: '50%',
            transform: 'translateY(-50%)',
            fontSize: '18px',
            opacity: 0.4,
          }}>🔍</span>
        </div>
      </section>

      {/* Filters + results */}
      <section style={{ background: 'var(--cream)', minHeight: '60vh', padding: '0 0 80px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

          {/* Filter bar */}
          <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: '20px 24px',
            margin: '-32px 0 32px',
            boxShadow: '0 4px 24px rgba(28,58,46,0.1)',
            border: '1px solid rgba(28,58,46,0.08)',
            display: 'flex',
            gap: '16px',
            flexWrap: 'wrap',
            alignItems: 'center',
          }}>

            {/* Industry chips */}
            <div>
              <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--earth)', opacity: 0.5, textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: '8px' }}>Industry</div>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {industryFilters.map((f) => (
                  <button
                    key={f}
                    onClick={() => setIndustry(f)}
                    style={{
                      padding: '5px 12px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      border: 'none',
                      transition: 'all 0.2s',
                      background: industry === f ? 'var(--forest)' : 'rgba(28,58,46,0.08)',
                      color: industry === f ? 'white' : 'var(--earth)',
                    }}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ width: '1px', height: '40px', background: 'rgba(28,58,46,0.1)', flexShrink: 0 }} />

            {/* Role chips */}
            <div>
              <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--earth)', opacity: 0.5, textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: '8px' }}>Role</div>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {roleFilters.map((f) => (
                  <button
                    key={f}
                    onClick={() => setRole(f)}
                    style={{
                      padding: '5px 12px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      border: 'none',
                      transition: 'all 0.2s',
                      background: role === f ? 'var(--amber)' : 'rgba(28,58,46,0.08)',
                      color: role === f ? 'var(--forest)' : 'var(--earth)',
                    }}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
              <button
                onClick={() => setAvailableOnly(!availableOnly)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: `1.5px solid ${availableOnly ? 'var(--moss)' : 'rgba(28,58,46,0.15)'}`,
                  background: availableOnly ? 'rgba(45,90,64,0.1)' : 'transparent',
                  color: availableOnly ? 'var(--moss)' : 'var(--earth)',
                  transition: 'all 0.2s',
                }}
              >
                {availableOnly ? '✓ ' : ''}Available only
              </button>
            </div>
          </div>

          {/* Results count */}
          <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <p style={{ color: 'var(--earth)', opacity: 0.6, fontSize: '14px' }}>
              {filtered.length} guide{filtered.length !== 1 ? 's' : ''} found
              {industry !== 'All' && ` in ${industry}`}
            </p>
          </div>

          {/* Guide grid */}
          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 24px', color: 'var(--earth)', opacity: 0.5 }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔍</div>
              <p style={{ fontSize: '16px', fontWeight: 500 }}>No guides match your filters.</p>
              <button
                onClick={() => { setSearch(''); setIndustry('All'); setRole('Any role'); setAvailableOnly(false) }}
                style={{
                  marginTop: '16px',
                  background: 'var(--forest)',
                  color: 'white',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '10px 20px',
                  borderRadius: '10px',
                  fontSize: '14px',
                  fontWeight: 600,
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '20px',
            }}>
              {filtered.map((guide) => (
                <div
                  key={guide.name}
                  style={{
                    background: 'white',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    border: '1px solid rgba(28,58,46,0.08)',
                    boxShadow: '0 2px 12px rgba(28,58,46,0.06)',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)'
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(28,58,46,0.12)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 2px 12px rgba(28,58,46,0.06)'
                  }}
                >
                  {/* Card header */}
                  <div style={{ background: guide.gradient, padding: '24px', position: 'relative' }}>
                    <div style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '14px',
                      background: 'rgba(255,255,255,0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '18px',
                      fontWeight: 800,
                      color: 'white',
                      backdropFilter: 'blur(10px)',
                      marginBottom: '12px',
                    }}>
                      {guide.initials}
                    </div>
                    <h3 style={{ color: 'white', fontWeight: 700, fontSize: '17px', marginBottom: '2px' }}>
                      {guide.name}
                    </h3>
                    <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '13px' }}>
                      {guide.title} · {guide.company}
                    </p>
                    {/* Available badge */}
                    <div style={{
                      position: 'absolute',
                      top: '16px',
                      right: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      background: guide.available ? 'rgba(45,255,140,0.15)' : 'rgba(255,255,255,0.1)',
                      border: `1px solid ${guide.available ? 'rgba(45,255,140,0.3)' : 'rgba(255,255,255,0.15)'}`,
                      color: guide.available ? '#90FFB0' : 'rgba(255,255,255,0.5)',
                      fontSize: '11px',
                      fontWeight: 600,
                      padding: '4px 10px',
                      borderRadius: '20px',
                    }}>
                      <span style={{
                        width: '5px',
                        height: '5px',
                        borderRadius: '50%',
                        background: guide.available ? '#90FFB0' : 'rgba(255,255,255,0.4)',
                        display: 'inline-block',
                      }} />
                      {guide.available ? 'Available' : 'Full'}
                    </div>
                  </div>

                  {/* Card body */}
                  <div style={{ padding: '20px' }}>
                    <p style={{ fontSize: '13px', color: 'var(--earth)', lineHeight: 1.6, marginBottom: '14px', opacity: 0.8 }}>
                      {guide.bio}
                    </p>

                    {/* Tags */}
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '16px' }}>
                      {guide.tags.map((tag) => (
                        <span key={tag} style={{
                          background: 'rgba(28,58,46,0.07)',
                          color: 'var(--forest)',
                          fontSize: '11px',
                          fontWeight: 600,
                          padding: '3px 9px',
                          borderRadius: '20px',
                        }}>{tag}</span>
                      ))}
                    </div>

                    {/* Stats row */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px', paddingTop: '12px', borderTop: '1px solid rgba(28,58,46,0.06)' }}>
                      <div style={{ fontSize: '12px', color: 'var(--earth)', opacity: 0.6 }}>
                        <span style={{ fontWeight: 700, color: 'var(--forest)', fontSize: '14px' }}>{guide.sessions}</span> sessions
                      </div>
                      <div style={{ fontSize: '12px', color: 'var(--earth)', opacity: 0.6 }}>
                        <span style={{ fontWeight: 700, color: 'var(--forest)', fontSize: '14px' }}>★ {guide.rating}</span>
                      </div>
                      <div style={{ fontSize: '12px', color: 'var(--earth)', opacity: 0.6, marginLeft: 'auto' }}>
                        {guide.country}
                      </div>
                    </div>

                    {/* CTA */}
                    <Link href={guide.available ? '/ask-builder' : '#'} style={{ textDecoration: 'none', display: 'block' }}>
                      <button
                        disabled={!guide.available}
                        style={{
                          width: '100%',
                          padding: '12px',
                          borderRadius: '12px',
                          border: 'none',
                          cursor: guide.available ? 'pointer' : 'not-allowed',
                          background: guide.available ? 'var(--forest)' : 'rgba(28,58,46,0.1)',
                          color: guide.available ? 'white' : 'var(--earth)',
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '14px',
                          fontWeight: 700,
                          opacity: guide.available ? 1 : 0.5,
                          transition: 'all 0.2s',
                        }}
                      >
                        {guide.available ? 'Request a session →' : 'Join waitlist'}
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA strip */}
      <section style={{
        background: 'var(--forest)',
        padding: '64px 24px',
        textAlign: 'center',
      }}>
        <h2 style={{
          fontFamily: '"Playfair Display", serif',
          fontSize: 'clamp(24px,4vw,36px)',
          fontWeight: 800,
          color: 'white',
          marginBottom: '12px',
        }}>
          Are you a professional?
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.7)', fontSize: '17px', marginBottom: '32px', maxWidth: '460px', margin: '0 auto 32px' }}>
          Join 4,800+ guides giving back. Set your own availability, say yes to the asks that fit.
        </p>
        <Link href="/signup?role=guide" className="btn btn-primary btn-lg" style={{ textDecoration: 'none' }}>
          Become a Guide →
        </Link>
      </section>

      <Footer />
    </>
  )
}

'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'

/* ─── Data ─────────────────────────────────────────────────── */
const guides = [
  {
    id: 1,
    name: 'Amara Osei',
    title: 'VP of Product',
    company: 'Flutterwave',
    country: '🇬🇭 Accra',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=300&auto=format&fit=crop&q=80',
    tags: ['Product Strategy', 'VC Fundraising', 'Growth'],
    sessions: 47,
    rating: 4.9,
    available: true,
    initials: 'AO',
  },
  {
    id: 2,
    name: 'Tunde Bakare',
    title: 'CTO',
    company: 'Paystack',
    country: '🇳🇬 Lagos',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&auto=format&fit=crop&q=80',
    tags: ['Engineering', 'Tech Leadership', 'Fintech'],
    sessions: 63,
    rating: 5.0,
    available: true,
    initials: 'TB',
  },
  {
    id: 3,
    name: 'Zainab Musa',
    title: 'Partner',
    company: 'TLcom Capital',
    country: '🇳🇬 Lagos',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&auto=format&fit=crop&q=80',
    tags: ['Venture Capital', 'Startups', 'Africa Markets'],
    sessions: 38,
    rating: 4.8,
    available: false,
    initials: 'ZM',
  },
  {
    id: 4,
    name: 'Kwame Asante',
    title: 'Strategy Director',
    company: 'McKinsey & Co.',
    country: '🇬🇭 Accra',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&auto=format&fit=crop&q=80',
    tags: ['Strategy', 'Management Consulting', 'Leadership'],
    sessions: 29,
    rating: 4.9,
    available: true,
    initials: 'KA',
  },
  {
    id: 5,
    name: 'Fatima Diallo',
    title: 'Head of Marketing',
    company: 'Jumia',
    country: '🇸🇳 Dakar',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&auto=format&fit=crop&q=80',
    tags: ['Growth Marketing', 'Brand', 'E-commerce'],
    sessions: 51,
    rating: 4.7,
    available: true,
    initials: 'FD',
  },
  {
    id: 6,
    name: 'Emeka Eze',
    title: 'Engineering Lead',
    company: 'Google Africa',
    country: '🇳🇬 Lagos',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&auto=format&fit=crop&q=80',
    tags: ['Software Engineering', 'AI/ML', 'Career Transitions'],
    sessions: 72,
    rating: 4.9,
    available: true,
    initials: 'EE',
  },
]

const testimonials = [
  {
    quote: "I'd been trying to break into product management for two years. One 30-minute session with Amara gave me a clearer roadmap than all the courses I'd taken combined. I got my offer 6 weeks later.",
    name: 'Chioma Okeke',
    role: 'Product Manager at Kuda Bank',
    country: '🇳🇬',
    avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=200&h=200&auto=format&fit=crop&q=80',
    initials: 'CO',
  },
  {
    quote: "BridgeUp understood something that LinkedIn doesn't: a cold message from a stranger is different from a structured session with someone who's prepared. I've had 12 sessions and every single one delivered value.",
    name: 'Kofi Mensah',
    role: 'VP Engineering at Wave',
    country: '🇬🇭',
    avatar: 'https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?w=200&h=200&auto=format&fit=crop&q=80',
    initials: 'KM',
  },
  {
    quote: "As a final-year student from Ibadan, I never thought I'd get access to a Google engineer. BridgeUp made it normal. Emeka spent 40 minutes reviewing my GitHub and I got 3 interview calls the following week.",
    name: 'Adaeze Nwosu',
    role: 'Software Engineer at Interswitch',
    country: '🇳🇬',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&auto=format&fit=crop&q=80',
    initials: 'AN',
  },
]

const faqs = [
  {
    q: 'How is BridgeUp different from LinkedIn or cold emailing?',
    a: "BridgeUp creates structure and dignity around the mentorship request. Guides know exactly what to expect — a focused 30-minute session with a prepared agenda. Seekers can't just 'connect' and message; they must craft a quality ask that's reviewed by our AI. Both parties show up ready.",
  },
  {
    q: 'How long are sessions and how much do they cost?',
    a: 'Sessions are 30 minutes by default, though guides can opt for 45 or 60-minute formats. Pricing is set by each guide — some offer free sessions, others charge ₦5,000–₦50,000 per session. We believe great mentorship should be accessible, not free (which undervalues both parties\' time).',
  },
  {
    q: 'I\'m a student with no industry experience. Can I still use BridgeUp?',
    a: "Absolutely. Many of our most active seekers are final-year students and fresh graduates. The key is crafting a specific, well-researched ask — not 'can you mentor me?' but 'I'm preparing for PM interviews at Nigerian fintechs, here are my top 3 gaps.' Our Ask Builder guides you through this.",
  },
  {
    q: "What happens if a guide doesn't respond to my request?",
    a: 'Guides have 5 days to accept or decline your request. If there\'s no response, your request slot is automatically returned and you can send another. We track guide response rates and only surface active guides in your feed.',
  },
  {
    q: 'Can I record or share what was discussed in my session?',
    a: "Sessions are private by default. Recording requires both parties' explicit consent inside the platform. Guides control their own shareable impact card (what they choose to show), and session content remains confidential unless both parties agree to share.",
  },
]

const steps = [
  {
    num: '01',
    icon: '✦',
    title: 'Create your profile',
    desc: 'Tell us your role, industry, and what you\'re working on. Seekers share their goals; guides share their expertise.',
    color: '#E8A830',
  },
  {
    num: '02',
    icon: '◈',
    title: 'Craft your ask',
    desc: 'Our AI-guided Ask Builder helps you articulate exactly what you need — specific, actionable, and respectful of a guide\'s time.',
    color: '#2D5A40',
  },
  {
    num: '03',
    icon: '⬡',
    title: 'Match & schedule',
    desc: 'Our algorithm surfaces the right guide for your specific ask. Book a 30-minute live session directly on their calendar.',
    color: '#1C3A2E',
  },
  {
    num: '04',
    icon: '◎',
    title: 'Grow with accountability',
    desc: 'After every session, both parties log outcomes. Track your progress, endorse your guides, and share your milestones.',
    color: '#E8A830',
  },
]

const companies = ['Flutterwave', 'Paystack', 'Google', 'McKinsey', 'TLcom', 'Interswitch', 'Kuda', 'Carbon', 'Wave', 'Jumia']

/* ─── Counter hook ────────────────────────────────────────── */
function useCountUp(target: number, duration = 2000, active = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    const start = Date.now()
    const step = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [active, target, duration])
  return count
}

/* ─── Page component ─────────────────────────────────────── */
export default function LandingPage() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null)
  const [statsVisible, setStatsVisible] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const statsRef = useRef<HTMLDivElement>(null)
  const revealRefs = useRef<(HTMLElement | null)[]>([])

  const s1 = useCountUp(14200, 2200, statsVisible)
  const s2 = useCountUp(4800, 2000, statsVisible)
  const s3 = useCountUp(28, 1800, statsVisible)
  const s4 = useCountUp(94, 1600, statsVisible)

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) }
      }),
      { threshold: 0.12 }
    )
    revealRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // Stats counter trigger
  useEffect(() => {
    if (!statsRef.current) return
    const observer = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) setStatsVisible(true) },
      { threshold: 0.3 }
    )
    observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  // Auto-rotate testimonials
  useEffect(() => {
    const t = setInterval(() => setActiveTestimonial((a) => (a + 1) % testimonials.length), 5000)
    return () => clearInterval(t)
  }, [])

  const addReveal = (el: HTMLElement | null, i: number) => { revealRefs.current[i] = el }

  return (
    <div style={{ background: 'var(--cream)', paddingTop: '72px' }}>

      {/* ══════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════ */}
      <section
        style={{
          minHeight: 'calc(100vh - 72px)',
          background: 'linear-gradient(160deg, var(--forest) 0%, #142d23 55%, #0f2219 100%)',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          padding: '64px 24px',
        }}
      >
        {/* Background texture */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(232,168,48,0.07) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(45,90,64,0.4) 0%, transparent 50%)`,
        }} />

        {/* Floating dots decoration */}
        <div style={{ position: 'absolute', top: '15%', left: '10%', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--amber)', opacity: 0.6 }} className="animate-float" />
        <div style={{ position: 'absolute', top: '60%', left: '15%', width: '4px', height: '4px', borderRadius: '50%', background: 'var(--amber)', opacity: 0.4, animationDelay: '2s' }} className="animate-float" />
        <div style={{ position: 'absolute', top: '25%', right: '12%', width: '5px', height: '5px', borderRadius: '50%', background: 'var(--amber)', opacity: 0.5, animationDelay: '1s' }} className="animate-float" />

        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '64px',
            alignItems: 'center',
          }}>
            {/* Left: copy */}
            <div>
              {/* Label */}
              <div
                className="animate-fade-up"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(232,168,48,0.12)',
                  border: '1px solid rgba(232,168,48,0.25)',
                  borderRadius: '20px',
                  padding: '6px 14px',
                  marginBottom: '28px',
                }}
              >
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--amber)', display: 'inline-block' }} className="animate-pulse-glow" />
                <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--amber)', letterSpacing: '0.5px' }}>
                  NOW IN BETA · 4,800+ PROFESSIONALS
                </span>
              </div>

              <h1
                className="animate-fade-up delay-100"
                style={{
                  fontFamily: '"Playfair Display", serif',
                  fontSize: 'clamp(36px, 5.5vw, 64px)',
                  fontWeight: 800,
                  color: 'white',
                  lineHeight: 1.12,
                  letterSpacing: '-1px',
                  marginBottom: '24px',
                }}
              >
                Bridge the gap between{' '}
                <em style={{ color: 'var(--amber)', fontStyle: 'italic' }}>where you are</em>{' '}
                and where you&apos;re going
              </h1>

              <p
                className="animate-fade-up delay-200"
                style={{
                  fontSize: '18px',
                  color: 'rgba(245,240,232,0.7)',
                  lineHeight: 1.7,
                  maxWidth: '480px',
                  marginBottom: '40px',
                }}
              >
                Connect with Africa&apos;s most accomplished professionals for focused, private 30-minute sessions. No cold messages. No awkward intros. Just real guidance from people who&apos;ve been there.
              </p>

              <div className="animate-fade-up delay-300" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '48px' }}>
                <Link href="/signup" className="btn btn-primary btn-lg">
                  Find your guide →
                </Link>
                <Link href="/signup?role=guide" className="btn btn-outline-white btn-lg">
                  Become a guide
                </Link>
              </div>

              {/* Social proof */}
              <div className="animate-fade-up delay-400" style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                {/* Avatar stack */}
                <div style={{ display: 'flex', marginLeft: '8px' }}>
                  {['AO', 'TB', 'ZM', 'KA', 'FD'].map((init, i) => (
                    <div
                      key={init}
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        background: `hsl(${150 + i * 15}, 45%, ${30 + i * 5}%)`,
                        border: '2px solid rgba(255,255,255,0.2)',
                        marginLeft: i === 0 ? 0 : '-10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '11px',
                        fontWeight: 700,
                        color: 'white',
                        zIndex: 5 - i,
                        position: 'relative',
                      }}
                    >
                      {init}
                    </div>
                  ))}
                </div>
                <div>
                  <div style={{ display: 'flex', gap: '2px', marginBottom: '2px' }}>
                    {'★★★★★'.split('').map((s, i) => (
                      <span key={i} style={{ color: 'var(--amber)', fontSize: '13px' }}>{s}</span>
                    ))}
                  </div>
                  <p style={{ fontSize: '13px', color: 'rgba(245,240,232,0.6)' }}>
                    <strong style={{ color: 'white' }}>4.9/5</strong> from 1,200+ seekers
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Match card demo */}
            <div
              className="animate-float hide-mobile"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                paddingTop: '24px',
              }}
            >
              {/* Background card (stacked) */}
              <div style={{
                position: 'absolute',
                top: '24px', left: '24px', right: '-24px', bottom: '-24px',
                background: 'rgba(232,168,48,0.15)',
                borderRadius: '28px',
                border: '1px solid rgba(232,168,48,0.2)',
              }} />

              {/* Main match card */}
              <div style={{
                background: 'white',
                borderRadius: '28px',
                padding: '28px',
                width: '100%',
                maxWidth: '360px',
                boxShadow: '0 24px 64px rgba(0,0,0,0.35)',
                position: 'relative',
                zIndex: 2,
              }}>
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
                  <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #2D5A40, #1C3A2E)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '18px',
                    fontWeight: 800,
                    color: 'var(--amber)',
                    flexShrink: 0,
                    boxShadow: '0 4px 12px rgba(28,58,46,0.3)',
                  }}>
                    AO
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, color: 'var(--earth)', fontSize: '15px' }}>Amara Osei</div>
                    <div style={{ fontSize: '12px', color: 'var(--earth-light)' }}>VP Product · Flutterwave</div>
                  </div>
                  <div style={{
                    background: 'rgba(34,197,94,0.1)',
                    color: '#16a34a',
                    fontSize: '11px',
                    fontWeight: 700,
                    padding: '4px 10px',
                    borderRadius: '20px',
                  }}>
                    ● Available
                  </div>
                </div>

                {/* AI match badge */}
                <div style={{
                  background: 'linear-gradient(135deg, rgba(28,58,46,0.06), rgba(232,168,48,0.08))',
                  borderRadius: '12px',
                  padding: '14px',
                  marginBottom: '16px',
                  border: '1px solid rgba(28,58,46,0.1)',
                }}>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--moss)', letterSpacing: '0.5px', marginBottom: '6px' }}>✦ AI MATCH SCORE</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--forest)', fontFamily: '"Playfair Display", serif' }}>94%</div>
                    <div style={{ flex: 1 }}>
                      <div className="score-meter">
                        <div className="score-fill" style={{ width: '94%' }} />
                      </div>
                      <div style={{ fontSize: '11px', color: 'var(--earth-light)', marginTop: '5px' }}>
                        Based on your ask + guide history
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                  {['Product Strategy', 'Fundraising', 'Africa Markets'].map((t) => (
                    <span key={t} className="chip chip-forest" style={{ fontSize: '11px' }}>{t}</span>
                  ))}
                </div>

                {/* Stats row */}
                <div style={{ display: 'flex', gap: '0', marginBottom: '20px' }}>
                  {[{ v: '47', l: 'Sessions' }, { v: '4.9★', l: 'Rating' }, { v: '95%', l: 'Reply rate' }].map((s, i) => (
                    <div key={s.l} style={{
                      flex: 1,
                      textAlign: 'center',
                      paddingTop: '12px',
                      borderTop: i > 0 ? undefined : undefined,
                      borderLeft: i > 0 ? '1px solid var(--ghost-md)' : 'none',
                    }}>
                      <div style={{ fontWeight: 800, color: 'var(--forest)', fontSize: '16px' }}>{s.v}</div>
                      <div style={{ fontSize: '10px', color: 'var(--earth-light)', marginTop: '2px' }}>{s.l}</div>
                    </div>
                  ))}
                </div>

                <Link href="/ask-builder" className="btn btn-primary" style={{ width: '100%', fontSize: '14px', textDecoration: 'none' }}>
                  Send your ask →
                </Link>
              </div>

              {/* Floating notification */}
              <div style={{
                position: 'absolute',
                top: '-16px',
                right: '-16px',
                background: 'var(--forest)',
                borderRadius: '14px',
                padding: '10px 14px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                zIndex: 3,
              }}>
                <div style={{ fontSize: '11px', color: 'rgba(245,240,232,0.7)', marginBottom: '2px' }}>Session starting</div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: 'white' }}>⏱ In 15 minutes</div>
              </div>

              {/* Floating accepted badge */}
              <div style={{
                position: 'absolute',
                bottom: '-12px',
                left: '12px',
                background: 'white',
                borderRadius: '12px',
                padding: '8px 14px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                zIndex: 3,
              }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e' }} />
                <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--forest)' }}>Request accepted ✓</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div style={{ position: 'absolute', bottom: -1, left: 0, right: 0 }}>
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '80px' }}>
            <path d="M0,80 L0,40 Q360,80 720,40 Q1080,0 1440,40 L1440,80 Z" fill="var(--cream)" />
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          COMPANY LOGOS STRIP
      ══════════════════════════════════════════════════════════ */}
      <section style={{ padding: '40px 24px', background: 'var(--cream)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '12px', fontWeight: 700, color: 'var(--earth-light)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '24px' }}>
            Guides from Africa&apos;s leading companies
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px 32px' }}>
            {companies.map((c) => (
              <span key={c} style={{
                fontSize: '14px',
                fontWeight: 700,
                color: 'var(--earth-light)',
                opacity: 0.55,
                letterSpacing: '-0.2px',
              }}>
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          HOW IT WORKS
      ══════════════════════════════════════════════════════════ */}
      <section id="how-it-works" className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div ref={(el) => addReveal(el, 0)} className="reveal" style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p className="section-label" style={{ marginBottom: '12px' }}>Process</p>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', marginBottom: '16px' }}>
              Mentorship done right
            </h2>
            <p style={{ color: 'var(--earth-light)', fontSize: '17px', maxWidth: '520px', margin: '0 auto' }}>
              Four steps from intention to transformation — built around respect for both parties&apos; time.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {steps.map((step, i) => (
              <div
                key={step.num}
                ref={(el) => addReveal(el, i + 1)}
                className="reveal"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div style={{
                  background: 'white',
                  borderRadius: 'var(--radius-xl)',
                  padding: '32px 28px',
                  height: '100%',
                  border: '1px solid var(--ghost-md)',
                  boxShadow: 'var(--shadow-card)',
                  transition: 'transform 0.28s ease, box-shadow 0.28s ease',
                  cursor: 'default',
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lift)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-card)' }}
                >
                  <div style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '14px',
                    background: `${step.color}18`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '22px',
                    color: step.color,
                    marginBottom: '20px',
                  }}>
                    {step.icon}
                  </div>
                  <div style={{ fontSize: '11px', fontWeight: 800, color: step.color, letterSpacing: '1px', marginBottom: '10px' }}>
                    STEP {step.num}
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px', fontFamily: 'Inter, sans-serif', color: 'var(--earth)' }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--earth-light)', lineHeight: 1.7 }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          FEATURED GUIDES
      ══════════════════════════════════════════════════════════ */}
      <section style={{ background: '#f0ebe0', padding: '96px 24px' }}>
        <div className="container">
          <div ref={(el) => addReveal(el, 10)} className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <p className="section-label" style={{ marginBottom: '12px' }}>The guides</p>
              <h2 style={{ fontSize: 'clamp(26px, 4vw, 42px)' }}>
                Meet the people<br />who can change your trajectory
              </h2>
            </div>
            <Link href="/guides" className="btn btn-forest btn-sm">
              View all guides →
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
            {guides.map((guide, i) => (
              <div
                key={guide.id}
                ref={(el) => addReveal(el, 11 + i)}
                className="reveal guide-card"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <Link href="/guides" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
                  {/* Card top */}
                  <div style={{
                    height: '120px',
                    background: `linear-gradient(135deg, ${['#1C3A2E','#2D5A40','#3A2E22','#1C3A2E','#2D5A40','#1a3528'][i]}, ${['#2D5A40','#1C3A2E','#1C3A2E','#3A2E22','#1C3A2E','#2D5A40'][i]})`,
                    position: 'relative',
                  }}>
                    <div style={{
                      position: 'absolute',
                      bottom: '-28px',
                      left: '24px',
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, ${['#E8A830','#2D5A40','#E8A830','#2D5A40','#E8A830','#2D5A40'][i]}, ${['#F5C85A','#4a8a5e','#F5C85A','#1C3A2E','#F5C85A','#1C3A2E'][i]})`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '18px',
                      fontWeight: 800,
                      color: 'white',
                      border: '3px solid white',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                    }}>
                      {guide.initials}
                    </div>
                    {guide.available && (
                      <div style={{
                        position: 'absolute',
                        top: '12px',
                        right: '12px',
                        background: 'rgba(34,197,94,0.15)',
                        backdropFilter: 'blur(8px)',
                        borderRadius: '20px',
                        padding: '4px 10px',
                        fontSize: '11px',
                        fontWeight: 700,
                        color: '#16a34a',
                      }}>
                        ● Available
                      </div>
                    )}
                  </div>

                  {/* Card body */}
                  <div style={{ padding: '40px 24px 24px' }}>
                    <div style={{ marginBottom: '4px' }}>
                      <span style={{ fontWeight: 700, fontSize: '16px', color: 'var(--earth)' }}>{guide.name}</span>
                    </div>
                    <div style={{ fontSize: '13px', color: 'var(--earth-light)', marginBottom: '4px' }}>
                      {guide.title} · {guide.company}
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--earth-light)', marginBottom: '16px' }}>
                      {guide.country}
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                      {guide.tags.map((t) => (
                        <span key={t} className="chip chip-forest" style={{ fontSize: '11px' }}>{t}</span>
                      ))}
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--ghost-md)', paddingTop: '14px' }}>
                      <div style={{ fontSize: '12px', color: 'var(--earth-light)' }}>
                        <strong style={{ color: 'var(--earth)' }}>{guide.sessions}</strong> sessions completed
                      </div>
                      <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--amber)' }}>
                        {guide.rating}★
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          IMPACT STATS
      ══════════════════════════════════════════════════════════ */}
      <section
        ref={statsRef}
        style={{
          background: 'var(--forest)',
          padding: '96px 24px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(232,168,48,0.06) 0%, transparent 60%), radial-gradient(circle at 70% 50%, rgba(45,90,64,0.4) 0%, transparent 60%)',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p className="section-label" style={{ color: 'rgba(232,168,48,0.7)', marginBottom: '12px' }}>Impact</p>
            <h2 style={{ color: 'white', fontSize: 'clamp(28px, 4vw, 44px)' }}>
              Numbers that matter
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2px' }}>
            {[
              { val: s1.toLocaleString() + '+', label: 'Sessions completed', sub: 'Across all guides' },
              { val: s2.toLocaleString() + '+', label: 'Professionals helped', sub: 'Seekers and guides' },
              { val: s3 + '+', label: 'Countries represented', sub: 'Across the continent' },
              { val: s4 + '%', label: 'Satisfaction rate', sub: 'From post-session surveys' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                style={{
                  textAlign: 'center',
                  padding: '40px 24px',
                  borderRight: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                }}
              >
                <div className="stat-num" style={{ marginBottom: '8px' }}>{stat.val}</div>
                <div style={{ fontSize: '15px', fontWeight: 600, color: 'white', marginBottom: '4px' }}>
                  {stat.label}
                </div>
                <div style={{ fontSize: '13px', color: 'rgba(245,240,232,0.45)' }}>
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════════════════════════ */}
      <section id="stories" className="section" style={{ background: 'var(--cream)' }}>
        <div className="container-sm">
          <div ref={(el) => addReveal(el, 20)} className="reveal" style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p className="section-label" style={{ marginBottom: '12px' }}>Real stories</p>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 42px)' }}>
              Career-changing conversations
            </h2>
          </div>

          <div ref={(el) => addReveal(el, 21)} className="reveal">
            {/* Testimonial display */}
            <div style={{ position: 'relative', minHeight: '220px' }}>
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  style={{
                    position: i === 0 ? 'relative' : 'absolute',
                    top: 0, left: 0, right: 0,
                    opacity: i === activeTestimonial ? 1 : 0,
                    transform: i === activeTestimonial ? 'translateY(0)' : 'translateY(12px)',
                    transition: 'opacity 0.5s ease, transform 0.5s ease',
                    pointerEvents: i === activeTestimonial ? 'auto' : 'none',
                  }}
                >
                  <div className="testimonial-card">
                    <div style={{ fontSize: '48px', color: 'var(--amber)', lineHeight: 1, marginBottom: '20px', fontFamily: 'Georgia, serif' }}>&ldquo;</div>
                    <p style={{ fontSize: '18px', lineHeight: 1.7, color: 'var(--earth)', marginBottom: '28px', fontStyle: 'italic' }}>
                      {t.quote}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                      <div style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, var(--forest), var(--moss))',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '16px',
                        fontWeight: 700,
                        color: 'var(--amber)',
                        flexShrink: 0,
                      }}>
                        {t.initials}
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, color: 'var(--earth)', fontSize: '15px' }}>
                          {t.country} {t.name}
                        </div>
                        <div style={{ fontSize: '13px', color: 'var(--earth-light)' }}>{t.role}</div>
                      </div>
                      <div style={{ marginLeft: 'auto' }}>
                        <div style={{ color: 'var(--amber)', fontSize: '16px' }}>★★★★★</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '32px' }}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  aria-label={`Testimonial ${i + 1}`}
                  style={{
                    width: i === activeTestimonial ? '28px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    background: i === activeTestimonial ? 'var(--forest)' : 'var(--ghost-md)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    padding: 0,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          FOR SEEKERS vs FOR GUIDES
      ══════════════════════════════════════════════════════════ */}
      <section style={{ background: '#f0ebe0', padding: '96px 24px' }}>
        <div className="container">
          <div ref={(el) => addReveal(el, 30)} className="reveal" style={{ textAlign: 'center', marginBottom: '56px' }}>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 42px)' }}>Built for both sides of the bridge</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {/* Seekers */}
            <div
              ref={(el) => addReveal(el, 31)}
              className="reveal reveal-left"
              style={{
                background: 'white',
                borderRadius: 'var(--radius-xl)',
                padding: '40px',
                border: '1px solid var(--ghost-md)',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <div style={{
                width: '52px', height: '52px', borderRadius: '14px',
                background: 'rgba(28,58,46,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '24px', marginBottom: '20px',
              }}>
                🚀
              </div>
              <h3 style={{ fontSize: '22px', marginBottom: '8px', fontFamily: 'Inter, sans-serif', fontWeight: 700 }}>
                For Seekers
              </h3>
              <p style={{ color: 'var(--earth-light)', fontSize: '14px', marginBottom: '28px' }}>
                Young professionals and students navigating their careers in Africa&apos;s fast-moving economy.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                {[
                  'Get specific guidance — not generic advice',
                  'Book a 30-min session with verified industry leaders',
                  'AI-powered Ask Builder so you always show up prepared',
                  'Private sessions — no public embarrassment',
                  'Track your growth across multiple sessions',
                  'Affordable access to people you couldn\'t reach before',
                ].map((item) => (
                  <li key={item} style={{ display: 'flex', gap: '10px', fontSize: '14px', color: 'var(--earth)' }}>
                    <span style={{ color: 'var(--moss)', fontWeight: 700, flexShrink: 0, marginTop: '1px' }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/signup" className="btn btn-forest" style={{ width: '100%', textDecoration: 'none', justifyContent: 'center' }}>
                Find your guide →
              </Link>
            </div>

            {/* Guides */}
            <div
              ref={(el) => addReveal(el, 32)}
              className="reveal reveal-right"
              style={{
                background: 'var(--forest)',
                borderRadius: 'var(--radius-xl)',
                padding: '40px',
                boxShadow: 'var(--shadow-lift)',
              }}
            >
              <div style={{
                width: '52px', height: '52px', borderRadius: '14px',
                background: 'rgba(232,168,48,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '24px', marginBottom: '20px',
              }}>
                🏅
              </div>
              <h3 style={{ fontSize: '22px', marginBottom: '8px', fontFamily: 'Inter, sans-serif', fontWeight: 700, color: 'white' }}>
                For Guides
              </h3>
              <p style={{ color: 'rgba(245,240,232,0.65)', fontSize: '14px', marginBottom: '28px' }}>
                Senior professionals who want to give back — without the burden of managing unstructured mentorship requests.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                {[
                  'Only receive quality, structured asks — no cold messages',
                  'Control your availability and session types',
                  'Set your own rates or offer free sessions',
                  'AI filters low-effort requests automatically',
                  'Build your personal impact record',
                  'Share your "giving back" story with your network',
                ].map((item) => (
                  <li key={item} style={{ display: 'flex', gap: '10px', fontSize: '14px', color: 'rgba(245,240,232,0.8)' }}>
                    <span style={{ color: 'var(--amber)', fontWeight: 700, flexShrink: 0, marginTop: '1px' }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/signup?role=guide" className="btn btn-primary" style={{ width: '100%', textDecoration: 'none', justifyContent: 'center' }}>
                Become a guide →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════════════════════ */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container-sm">
          <div ref={(el) => addReveal(el, 40)} className="reveal" style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p className="section-label" style={{ marginBottom: '12px' }}>FAQ</p>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 42px)' }}>Common questions</h2>
          </div>

          <div ref={(el) => addReveal(el, 41)} className="reveal">
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item">
                <button
                  className="faq-question"
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                >
                  <span>{faq.q}</span>
                  <span
                    className={`faq-icon ${faqOpen === i ? 'open' : ''}`}
                    style={{
                      width: '24px', height: '24px',
                      borderRadius: '50%',
                      background: faqOpen === i ? 'var(--forest)' : 'var(--ghost-md)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '16px', fontWeight: 400,
                      color: faqOpen === i ? 'white' : 'var(--earth-light)',
                      flexShrink: 0,
                    }}
                  >
                    +
                  </span>
                </button>
                <div className={`faq-answer ${faqOpen === i ? 'open' : ''}`}>
                  <p style={{ fontSize: '15px', color: 'var(--earth-light)', lineHeight: 1.75 }}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════════════════════ */}
      <section
        style={{
          background: 'linear-gradient(135deg, var(--forest), #0f2219)',
          padding: '96px 24px',
          position: 'relative',
          overflow: 'hidden',
          textAlign: 'center',
        }}
      >
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(232,168,48,0.08) 0%, transparent 60%)',
        }} />

        <div className="container-sm" style={{ position: 'relative', zIndex: 2 }}>
          <div ref={(el) => addReveal(el, 50)} className="reveal">
            <p style={{ fontSize: '14px', fontWeight: 700, color: 'var(--amber)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '20px' }}>
              Ready to grow?
            </p>
            <h2 style={{ color: 'white', fontSize: 'clamp(30px, 5vw, 52px)', marginBottom: '20px', lineHeight: 1.15 }}>
              Your next breakthrough<br />is one conversation away
            </h2>
            <p style={{ color: 'rgba(245,240,232,0.65)', fontSize: '17px', marginBottom: '40px', maxWidth: '460px', margin: '0 auto 40px' }}>
              Join thousands of African professionals levelling up through structured, meaningful mentorship.
            </p>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '24px' }}>
              <Link href="/signup" className="btn btn-primary btn-lg">
                Get started — it&apos;s free
              </Link>
              <Link href="/guides" className="btn btn-outline-white btn-lg">
                Browse guides
              </Link>
            </div>

            <p style={{ fontSize: '13px', color: 'rgba(245,240,232,0.4)' }}>
              No credit card required · Cancel anytime · 100% private sessions
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

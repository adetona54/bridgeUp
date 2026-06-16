'use client';

import { useState } from 'react';
import Link from 'next/link';

const GUIDES = [
  {
    id: 1,
    name: 'Tunde Adebayo',
    initials: 'TA',
    title: 'VP Engineering',
    company: 'Flutterwave',
    tags: ['Career Growth', 'Engineering Leadership'],
    match: 94,
    gradient: 'linear-gradient(135deg, #1C3A2E 0%, #2D5A40 100%)',
  },
  {
    id: 2,
    name: 'Amaka Osei',
    initials: 'AO',
    title: 'Product Manager',
    company: 'Paystack',
    tags: ['Product Strategy', 'Fintech'],
    match: 88,
    gradient: 'linear-gradient(135deg, #3A2E22 0%, #6B5744 100%)',
  },
  {
    id: 3,
    name: 'Chidi Nwosu',
    initials: 'CN',
    title: 'Senior Data Scientist',
    company: 'Andela',
    tags: ['Data Science', 'ML'],
    match: 82,
    gradient: 'linear-gradient(135deg, #2D5A40 0%, #E8A830 100%)',
  },
  {
    id: 4,
    name: 'Fatima Aliyu',
    initials: 'FA',
    title: 'Marketing Director',
    company: 'Konga',
    tags: ['Brand Building', 'Growth'],
    match: 76,
    gradient: 'linear-gradient(135deg, #6B5744 0%, #3A2E22 100%)',
  },
];

const NAV_ITEMS = [
  { id: 'feed', label: 'Feed', icon: '🏠' },
  { id: 'sessions', label: 'Sessions', icon: '📅' },
  { id: 'asks', label: 'My Asks', icon: '📬' },
  { id: 'portfolio', label: 'Portfolio', icon: '💼' },
  { id: 'intros', label: 'Warm Intros', icon: '🤝' },
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('feed');
  const [drawerOpen, setDrawerOpen] = useState(false);

  const stats = [
    { label: 'Sessions Completed', value: '2', icon: '✅' },
    { label: 'Requests Sent', value: '5', icon: '📤' },
    { label: 'Response Rate', value: '80%', icon: '📈' },
  ];

  const SidebarContent = ({ onNavClick }: { onNavClick?: () => void }) => (
    <>
      <div style={{ padding: '28px 24px 20px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <span style={{ color: 'white', fontWeight: 800, fontSize: '22px', letterSpacing: '-0.5px' }}>
          Bridge<span style={{ color: 'var(--amber)' }}>Up</span>
        </span>
      </div>
      <div style={{ padding: '18px 24px', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{
          width: '44px', height: '44px', borderRadius: '50%',
          background: 'linear-gradient(135deg, #E8A830, #2D5A40)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'white', fontWeight: 700, fontSize: '15px', flexShrink: 0,
        }}>AO</div>
        <div>
          <div style={{ color: 'white', fontWeight: 600, fontSize: '14px' }}>Adaeze Okonkwo</div>
          <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px' }}>Product Designer</div>
        </div>
      </div>
      <nav style={{ flex: 1, padding: '16px 12px' }}>
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => { setActiveTab(item.id); onNavClick?.(); }}
            style={{
              display: 'flex', alignItems: 'center', gap: '12px',
              width: '100%', padding: '12px 16px', borderRadius: '10px',
              border: 'none', cursor: 'pointer', marginBottom: '4px',
              background: activeTab === item.id ? 'rgba(232,168,48,0.15)' : 'transparent',
              color: activeTab === item.id ? 'var(--amber)' : 'rgba(255,255,255,0.65)',
              fontWeight: activeTab === item.id ? 600 : 400,
              fontSize: '15px', textAlign: 'left',
              transition: 'all 0.2s ease',
            }}
          >
            <span style={{ fontSize: '18px' }}>{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>
      <div style={{ padding: '16px 12px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <button style={{
          display: 'flex', alignItems: 'center', gap: '12px',
          width: '100%', padding: '12px 16px', borderRadius: '10px',
          border: 'none', cursor: 'pointer',
          background: 'transparent', color: 'rgba(255,255,255,0.55)', fontSize: '15px',
        }}>
          <span style={{ fontSize: '18px' }}>⚙️</span>
          Settings
        </button>
      </div>
    </>
  );

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--cream)', fontFamily: 'Inter, sans-serif' }}>

      {/* ── Desktop Sidebar ── */}
      <aside
        className="db-sidebar"
        style={{
          width: '260px',
          background: 'var(--forest)',
          display: 'flex',
          flexDirection: 'column',
          position: 'fixed',
          top: 0, left: 0, bottom: 0,
          zIndex: 100,
        }}
      >
        <SidebarContent />
      </aside>

      {/* ── Mobile Drawer Overlay ── */}
      {drawerOpen && (
        <div
          onClick={() => setDrawerOpen(false)}
          style={{
            position: 'fixed', inset: 0,
            background: 'rgba(0,0,0,0.5)',
            zIndex: 199,
            display: 'none',
          }}
          className="db-overlay"
        />
      )}

      {/* ── Mobile Drawer ── */}
      <aside
        className="db-drawer"
        style={{
          width: '260px',
          background: 'var(--forest)',
          display: 'none',
          flexDirection: 'column',
          position: 'fixed',
          top: 0, left: drawerOpen ? '0' : '-280px', bottom: 0,
          zIndex: 200,
          transition: 'left 0.3s ease',
        }}
      >
        <div style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <span style={{ color: 'white', fontWeight: 800, fontSize: '20px' }}>Bridge<span style={{ color: 'var(--amber)' }}>Up</span></span>
          <button onClick={() => setDrawerOpen(false)} style={{ background: 'none', border: 'none', color: 'white', fontSize: '22px', cursor: 'pointer', lineHeight: 1 }}>✕</button>
        </div>
        <SidebarContent onNavClick={() => setDrawerOpen(false)} />
      </aside>

      {/* ── Main ── */}
      <main className="db-main" style={{ flex: 1, minHeight: '100vh', paddingBottom: '80px' }}>

        {/* Mobile Top Header */}
        <header
          className="db-mobile-header"
          style={{
            display: 'none',
            position: 'fixed', top: 0, left: 0, right: 0, zIndex: 90,
            background: 'var(--forest)', padding: '14px 20px',
            alignItems: 'center', justifyContent: 'space-between',
          }}
        >
          <button
            onClick={() => setDrawerOpen(!drawerOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white', fontSize: '22px', lineHeight: 1 }}
          >☰</button>
          <span style={{ color: 'white', fontWeight: 800, fontSize: '20px' }}>Bridge<span style={{ color: 'var(--amber)' }}>Up</span></span>
          <div style={{
            width: '36px', height: '36px', borderRadius: '50%',
            background: 'linear-gradient(135deg, #E8A830, #2D5A40)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'white', fontWeight: 700, fontSize: '13px',
          }}>AO</div>
        </header>

        {/* Page Body */}
        <div className="db-content" style={{ padding: '40px 36px', maxWidth: '920px', margin: '0 auto' }}>

          {/* Greeting */}
          <div style={{ marginBottom: '32px' }}>
            <h1 style={{ fontSize: '28px', fontWeight: 800, color: 'var(--earth)', marginBottom: '6px', lineHeight: 1.2 }}>
              Good morning, Adaeze! 👋
            </h1>
            <p style={{ color: 'var(--earth)', opacity: 0.6, fontSize: '16px', margin: 0 }}>
              Here&apos;s what&apos;s happening on your BridgeUp journey.
            </p>
          </div>

          {/* Stat Cards */}
          <div className="db-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '36px' }}>
            {stats.map((s) => (
              <div key={s.label} style={{
                background: 'white', borderRadius: '16px',
                boxShadow: 'var(--shadow-card)', padding: '22px 20px',
                textAlign: 'center', border: '1px solid rgba(28,58,46,0.07)',
              }}>
                <div style={{ fontSize: '28px', marginBottom: '8px' }}>{s.icon}</div>
                <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--forest)', marginBottom: '4px', lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: '12px', color: 'var(--earth)', opacity: 0.6, fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Guide Match Feed */}
          <div style={{ marginBottom: '36px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--earth)', margin: 0 }}>Guides matched for you</h2>
              <Link href="/guides" style={{ color: 'var(--forest)', fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}>
                Explore all →
              </Link>
            </div>
            <div style={{ display: 'flex', gap: '16px', overflowX: 'auto', paddingBottom: '12px', scrollbarWidth: 'thin' }}>
              {GUIDES.map((guide) => (
                <div
                  key={guide.id}
                  className="feed-card"
                  style={{
                    minWidth: '220px', flexShrink: 0,
                    background: 'white', borderRadius: '18px',
                    boxShadow: 'var(--shadow-card)', padding: '20px',
                    position: 'relative',
                    border: '1px solid rgba(28,58,46,0.07)',
                  }}
                >
                  {/* Match badge */}
                  <div style={{
                    position: 'absolute', top: '14px', right: '14px',
                    background: 'var(--amber)', color: 'var(--earth)',
                    fontWeight: 700, fontSize: '11px', borderRadius: '20px',
                    padding: '3px 8px',
                  }}>{guide.match}%</div>

                  {/* Avatar */}
                  <div style={{
                    width: '52px', height: '52px', borderRadius: '50%',
                    background: guide.gradient,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'white', fontWeight: 700, fontSize: '17px',
                    marginBottom: '12px',
                  }}>{guide.initials}</div>

                  <div style={{ fontWeight: 700, fontSize: '15px', color: 'var(--earth)', marginBottom: '2px' }}>{guide.name}</div>
                  <div style={{ fontSize: '13px', color: 'var(--earth)', opacity: 0.7, marginBottom: '2px' }}>{guide.title}</div>
                  <div style={{ fontSize: '12px', color: 'var(--earth)', opacity: 0.45, marginBottom: '12px' }}>{guide.company}</div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '14px' }}>
                    {guide.tags.map((tag) => (
                      <span key={tag} style={{
                        background: 'rgba(28,58,46,0.08)', color: 'var(--forest)',
                        fontSize: '10px', fontWeight: 600, borderRadius: '20px',
                        padding: '3px 9px',
                      }}>{tag}</span>
                    ))}
                  </div>

                  <Link href="/ask-builder">
                    <button style={{
                      width: '100%', padding: '9px 0', borderRadius: '10px',
                      background: 'var(--forest)', color: 'white',
                      border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '13px',
                      fontFamily: 'Inter, sans-serif',
                    }}>
                      Send Ask
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Session Banner */}
          <div style={{
            background: 'linear-gradient(135deg, var(--forest), var(--moss))',
            borderRadius: '18px', padding: '24px 28px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            marginBottom: '28px', flexWrap: 'wrap', gap: '16px',
          }}>
            <div>
              <div style={{
                color: 'var(--amber)', fontSize: '11px', fontWeight: 700,
                textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '6px',
              }}>
                Upcoming Session
              </div>
              <div style={{ color: 'white', fontWeight: 700, fontSize: '18px', marginBottom: '4px' }}>
                Tunde Adebayo &middot; VP Engineering
              </div>
              <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: '14px' }}>
                Today at 3:00 PM &middot; 45 minutes
              </div>
            </div>
            <Link href="/session">
              <button style={{
                padding: '13px 26px', borderRadius: '12px',
                background: 'var(--amber)', color: 'var(--earth)',
                border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: '15px',
                whiteSpace: 'nowrap', fontFamily: 'Inter, sans-serif',
              }}>
                Join Session →
              </button>
            </Link>
          </div>

          {/* Explore More Guides */}
          <div style={{
            border: '2px dashed rgba(28,58,46,0.18)', borderRadius: '18px',
            padding: '32px', textAlign: 'center',
          }}>
            <div style={{ fontSize: '36px', marginBottom: '12px' }}>🔍</div>
            <h3 style={{ fontWeight: 700, color: 'var(--earth)', marginBottom: '8px', fontSize: '18px', margin: '0 0 8px' }}>
              Discover more guides
            </h3>
            <p style={{ color: 'var(--earth)', opacity: 0.6, fontSize: '14px', marginBottom: '20px' }}>
              Browse our full directory of experienced professionals ready to help you grow.
            </p>
            <Link href="/guides">
              <button style={{
                padding: '12px 28px', borderRadius: '12px',
                background: 'var(--forest)', color: 'white',
                border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '15px',
                fontFamily: 'Inter, sans-serif',
              }}>Explore Guides Directory</button>
            </Link>
          </div>
        </div>
      </main>

      {/* ── Mobile Bottom Nav ── */}
      <nav
        className="db-bottom-nav"
        style={{
          display: 'none',
          position: 'fixed', bottom: 0, left: 0, right: 0,
          background: 'white', borderTop: '1px solid rgba(0,0,0,0.08)',
          padding: '8px 0 env(safe-area-inset-bottom, 12px)',
          zIndex: 90,
        }}
      >
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            style={{
              flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center',
              gap: '3px', border: 'none', background: 'none', cursor: 'pointer',
              color: activeTab === item.id ? 'var(--forest)' : 'rgba(0,0,0,0.35)',
              fontSize: '10px', fontWeight: activeTab === item.id ? 700 : 400,
              padding: '4px 0', fontFamily: 'Inter, sans-serif',
            }}
          >
            <span style={{ fontSize: '20px' }}>{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>

      <style>{`
        /* Desktop defaults */
        .db-sidebar        { display: flex !important; }
        .db-mobile-header  { display: none !important; }
        .db-bottom-nav     { display: none !important; }
        .db-drawer         { display: none !important; }
        .db-overlay        { display: none !important; }
        .db-main           { margin-left: 260px; }

        @media (max-width: 768px) {
          .db-sidebar       { display: none !important; }
          .db-mobile-header { display: flex !important; }
          .db-bottom-nav    { display: flex !important; }
          .db-drawer        { display: flex !important; }
          .db-overlay       { display: block !important; }
          .db-main          { margin-left: 0 !important; padding-top: 60px; }
          .db-content       { padding: 20px 16px !important; }
          .db-stats         { grid-template-columns: repeat(3, 1fr) !important; gap: 10px !important; }
        }
        @media (max-width: 480px) {
          .db-stats { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

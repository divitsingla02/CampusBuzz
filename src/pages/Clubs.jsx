import React, { useState } from 'react';
import { 
  Users, 
  Search, 
  Sparkles, 
  Mail, 
  Clock, 
  Award, 
  ExternalLink, 
  ArrowLeft,
  Calendar,
  Compass,
  CheckCircle2
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ClubCard } from '../components/ClubCard';
import { EventCard } from '../components/EventCard';

export const Clubs = () => {
  const { 
    clubs, 
    events, 
    activeTab, 
    selectedClubId, 
    viewClubDetail, 
    navigateTo 
  } = useApp();

  const [clubCategory, setClubCategory] = useState('all');
  const [clubSearch, setClubSearch] = useState('');

  // Individual club detail view
  if (activeTab === 'club-detail' && selectedClubId) {
    const club = clubs.find((c) => c.id === selectedClubId) || clubs[0];
    const clubEvents = events.filter((e) => e.organizerId === club.id);

    return (
      <div className="page-container detail-container">
        {/* Back Button */}
        <button
          onClick={() => navigateTo('clubs')}
          className="btn-secondary"
          style={{ color: '#334155', background: '#ffffff', borderColor: '#e2e8f0', padding: '0.5rem 1rem', marginBottom: '1.5rem' }}
        >
          <ArrowLeft size={16} />
          <span>Back to All Clubs</span>
        </button>

        {/* Club Profile Header */}
        <div style={{ background: '#ffffff', borderRadius: '1.5rem', border: '1px solid #e2e8f0', overflow: 'hidden', boxShadow: 'var(--shadow-sm)', marginBottom: '2rem' }}>
          <div style={{ height: 220, position: 'relative' }}>
            <img src={club.banner} alt={club.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          <div style={{ padding: '0 2rem 2rem', position: 'relative' }}>
            {/* Overlapping Avatar */}
            <div style={{ marginTop: -50, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
              <img
                src={club.avatar}
                alt={club.name}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: '1.25rem',
                  border: '4px solid #ffffff',
                  boxShadow: 'var(--shadow-md)',
                  objectFit: 'cover',
                  background: '#ffffff'
                }}
              />

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a
                  href={`mailto:${club.email}`}
                  className="btn-secondary"
                  style={{ color: '#4338ca', background: '#eef2ff', borderColor: '#c7d2fe', padding: '0.5rem 1rem', textDecoration: 'none' }}
                >
                  <Mail size={16} />
                  <span>Contact Lead</span>
                </a>
              </div>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#6366f1', textTransform: 'uppercase' }}>
                  {club.category} Society
                </span>
                <span style={{ color: '#94a3b8' }}>•</span>
                <span style={{ fontSize: '0.85rem', color: '#64748b' }}>Est. {club.established}</span>
              </div>
              <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a' }}>{club.name}</h1>
              <p style={{ fontSize: '1.1rem', color: '#64748b', marginTop: '0.25rem' }}>{club.tagline}</p>
            </div>

            {/* Quick Metrics */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '1rem',
                padding: '1.25rem',
                background: '#f8fafc',
                borderRadius: '1rem',
                border: '1px solid #e2e8f0',
                marginBottom: '1.75rem'
              }}
            >
              <div>
                <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase' }}>Total Members</span>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a' }}>{club.membersCount}+ active</div>
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase' }}>Lead / Convener</span>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a' }}>{club.lead}</div>
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase' }}>Regular Meetings</span>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#4338ca' }}>{club.meetingSchedule}</div>
              </div>
            </div>

            {/* Description */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.75rem' }}>
                About the Society
              </h3>
              <p style={{ color: '#334155', lineHeight: 1.75, fontSize: '1rem' }}>
                {club.description}
              </p>
            </div>

            {/* Key Achievements */}
            {club.achievements && (
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>
                  Recent Achievements & Highlights
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {club.achievements.map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem', color: '#334155' }}>
                      <Award size={18} color="#6366f1" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.75rem' }}>
                Skills & Focus Domains
              </h3>
              <div className="tag-cloud">
                {club.tags.map((tag, idx) => (
                  <span key={idx} className="tag-pill" style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}>
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Club's Hosted Activities / Events */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div className="section-header">
            <div>
              <h2 className="section-title">
                <Calendar size={22} color="#4f46e5" />
                <span>Activities Hosted by {club.shortName}</span>
              </h2>
              <p className="section-subtitle">Events, workshops, and competitions organized on campus</p>
            </div>
          </div>

          {clubEvents.length > 0 ? (
            <div className="events-grid">
              {clubEvents.map((evt) => (
                <EventCard key={evt.id} event={evt} />
              ))}
            </div>
          ) : (
            <div style={{ padding: '2rem', textAlign: 'center', background: '#ffffff', borderRadius: '1rem', border: '1px solid #e2e8f0', color: '#64748b' }}>
              No scheduled events right now from this club.
            </div>
          )}
        </div>
      </div>
    );
  }

  // Filter clubs
  const filteredClubs = clubs.filter((c) => {
    const matchesCat = clubCategory === 'all' || c.category.toLowerCase() === clubCategory.toLowerCase();
    const matchesSearch =
      c.name.toLowerCase().includes(clubSearch.toLowerCase()) ||
      c.tagline.toLowerCase().includes(clubSearch.toLowerCase()) ||
      c.tags.some((t) => t.toLowerCase().includes(clubSearch.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="page-container">
      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.025em', marginBottom: '0.5rem' }}>
          Campus Clubs & Societies
        </h1>
        <p style={{ color: '#64748b', fontSize: '1rem' }}>
          Join student organizations, collaborate with like-minded peers, and lead flagship events.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="controls-bar">
        <div className="search-input-group">
          <Search size={18} color="#94a3b8" />
          <input
            type="text"
            placeholder="Search clubs by name, domain, or skills..."
            value={clubSearch}
            onChange={(e) => setClubSearch(e.target.value)}
          />
          {clubSearch && (
            <button
              onClick={() => setClubSearch('')}
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.8rem', color: '#94a3b8' }}
            >
              Clear
            </button>
          )}
        </div>

        <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', padding: '0.2rem 0' }}>
          {['all', 'Technical', 'Music', 'Cultural', 'Sports', 'Workshops'].map((cat) => (
            <button
              key={cat}
              onClick={() => setClubCategory(cat)}
              className={`filter-tab ${clubCategory === cat ? 'active' : ''}`}
              style={{ padding: '0.45rem 0.9rem', fontSize: '0.8rem' }}
            >
              {cat === 'all' ? 'All Societies' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Clubs Grid */}
      <div className="clubs-grid">
        {filteredClubs.map((club) => (
          <ClubCard key={club.id} club={club} />
        ))}
      </div>
    </div>
  );
};

